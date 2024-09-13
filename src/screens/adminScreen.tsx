import { Authenticator, Input } from '@aws-amplify/ui-react';
import { useAppDispatch } from "../store/hooks"
import {components} from '../services/components'
import { userLogout } from '../actions/userActions';
import { ChangeEvent, useEffect,  useState} from 'react';
import { Hub } from 'aws-amplify/utils';
import { useNavigate } from 'react-router-dom';
import ReadXlsxFile from 'read-excel-file'
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../../amplify/data/resource'

function AdminScreen() {
  const dispatch = useAppDispatch()
  const[show,setShow]=useState(false)
  const[start,setStart]=useState<String>()
  const[end,setEnd]=useState<String>()
  const navigate=useNavigate()

  Hub.listen('auth', (data) => {
    if(!show && data) setShow(true)
  });

  //DB connections: 
  //Listen to current user changes + get user
  //check user.isAdmin? CRUD all DB : navigate(/Courses) 
  //Recheck in lambda if user belongs to "Admin" group !!!
  
  useEffect(() => {
    if(show) console.log("D")
  }, [show])

  const client = generateClient<Schema>();

  const createManyLines = (e: ChangeEvent<HTMLInputElement>,type:string) => {
          if(e && e.target && e.target.files) ReadXlsxFile(e.target.files[0]).then((rows)=> {
            for (let index = 1; index < rows.length; index++) {
                if(type!=="Item") console.log(rows[index]) 

                    if(type==="Program")
                      client.models.Program.create({   
                      programName: rows[index][3].toString(),
                      programNumber: Number(rows[index][4]),
                      programSubject: rows[index][5].toString(),
                      programId: rows[index][0].toString(),
                    })
                    .catch((error)=>console.log('GET call failed: ',error)).finally(()=>console.log("Done"))

                    if(type==="Level") {
                      async function createLevel() {
                        const { data: program } = await client.models.Program.get({ programId: rows[index][8].toString()})
                        client.models.Level.create({  
                          programName: program?.programId,
                          levelNumber: Number(rows[index][5]),
                          levelName: rows[index][6].toString(),
                          levelSubject: rows[index][7].toString(),
                          levelId: rows[index][0].toString(),
                        })
                        .catch((error)=>console.log('GET call failed: ',error)).finally(()=>console.log("Done"))
                      }
                      createLevel()
                    }

                    if(type==="Chapter") {
                      async function createChapter() {
                        const { data: level } = await client.models.Level.get({ levelId: rows[index][7].toString()})
                        await client.models.Chapter.create({  
                          chapterId: rows[index][0].toString(),
                          levelId: level?.levelId,
                          levelNumber: level?.levelNumber,
                          chapterNumber: Number(rows[index][3]),
                          bundleNumber: [Number(rows[index][2])],
                          chapterName: rows[index][9].toString(),
                        })
                        .catch((error)=>console.log('GET call failed: ',error)).finally(()=>console.log("Done"))
                        await client.models.Question.create({  
                          questionId: rows[index][0].toString(),
                          chapterId: rows[index][0].toString(),
                          chapterNumber: Number(rows[index][8]),
                          questionName: rows[index][9].toString(),
                          questionNumber: Number(rows[index][10]),
                        })
                        .catch((error)=>console.log('GET call failed: ',error)).finally(()=>console.log("Done"))
                      }
                      createChapter()
                    }

                    if(type==="Item") {
                      async function createItem(sgmt:number[]) {
                        const { data: question } = await client.models.Question.get({ questionId: rows[index][12].toString()})
                        client.models.Item.create({  
                          itemId: rows[index][0].toString(),
                          questionId: rows[index][12].toString(),
                          questionNumber: Number(question?.questionNumber),
                          itemNumber: Number(rows[index][13]),
                          itemType: rows[index][14].toString(),
                          itemPosition: [rows[index][17].toString(),rows[index][18].toString()], //[x,y]
                          itemSize: [rows[index][19].toString(),rows[index][16].toString()], //[width,height]
                          itemCondition: [rows[index][6]?.toString(),rows[index][7]?.toString()], //[condition,continueTo]
                          step: Number(rows[index][21]),
                          loop: rows[index][15]==="TRUE"?true:false,
                          autoplay: rows[index][5]==="TRUE"?true:false,
                          animationName: rows[index][3].toString(),
                          isAudioPlay: rows[index][11]==="TRUE"?true:false,
                          isAudioHoover: rows[index][10]==="TRUE"?true:false,
                          isAudioClick: rows[index][9]==="TRUE"?true:false,
                          audioData: rows[index][4]?.toString(),
                          segments: sgmt,
                        })
                        .catch((error)=>console.log('GET call failed: ',error)).finally(()=>console.log("Done"))
                      }
                      //console.log(start,end);
                      if(index>=Number(start) && index<Number(end)) setTimeout(function() {
                        const segments:number[]= []
                        //if(index===1) {
                          const st:string=rows[index][20].toString()
                          const ar:string[]=st.split('"')
                          for (let i = 0; i < ar.length; i++) {
                            if(!isNaN(Number(ar[i]))) {
                              segments.push(Number(ar[i]));
                            }
                          }
                          //console.log(segments);
                          //break;
                        //}
                        console.log(index,"  ",rows[index][0])
                        createItem(segments)
                      }, 5000);
                    }
            }
          })
  }

  async function getLevelsByProgramId() {
    try {
      const { data: program } = await client.models.Program.get({ programId: "252b1d21-8edb-471c-8d0f-600bcecfb2c5"});
      console.log(program)
      const levels = await program?.levels()
      levels?.data.forEach((level) => console.log(level.levelId));

      } catch (error) {
        console.log('GET call failed: ',error);
      }
    }

    async function getChaptersByLevelId() {
      try {
        const { data: level } = await client.models.Level.get({ levelId: "925d7a21-bff9-49a4-b69b-21b975e649e2"});
        console.log(level)
        const chapters = await level?.chapters()
        chapters?.data.forEach((chapter) => console.log(chapter.chapterName));
        } catch (error) {
          console.log('GET call failed: ',error);
        }
      }

    async function getQuestionssByChapterId() {
      try {
        const { data: chapter } = await client.models.Chapter.get({ chapterId: "507a7dd1-912a-4f08-821e-4b9d3133ea32"});
        console.log(chapter)
        const questions = await chapter?.questions()
        questions?.data.forEach((question) => console.log(question.questionName));
        } catch (error) {
          console.log('GET call failed: ',error);
        }
      }

      async function getItemsByQuestionId() {
        try {
          const { data: question } = await client.models.Question.get({ questionId: "8b67d9dd-8c8b-424e-8369-df0f92515b45"});
          console.log(question)
          const items = await question?.items()
          items?.data.forEach((item) => console.log(item.itemNumber));
          } catch (error) {
            console.log('GET call failed: ',error);
          }
      }

  return (
    <Authenticator components={components}>
      {({user }) => (
        <main>
          <h1>Hello {user?.signInDetails?.loginId}</h1>
          <button onClick={()=>dispatch(userLogout())}>Sign out </button>
          <button onClick={()=>navigate('/Courses')}>Courses Screen</button>
          <div>Create Programs</div><input type="file" onChange={(e)=>createManyLines(e,"Program")}/>
          <div>Create Levels</div><input type="file" onChange={(e)=>createManyLines(e,"Level")}/>
          <button onClick={()=>getLevelsByProgramId()}>Check that Levels are part of Program</button>
          <div>Create Chapters</div><input type="file" onChange={(e)=>createManyLines(e,"Chapter")}/>
          <button onClick={()=>getChaptersByLevelId()}>Check that Chapters are part of Level</button>
          <button onClick={()=>getQuestionssByChapterId()}>Check that Questions are part of Chapter</button>
          <div>Create Items</div><input type="file" onChange={(e)=>createManyLines(e,"Item")}/>
          <button onClick={()=>getItemsByQuestionId()}>Check that Items are part of Question</button> 
          <Input onInput={(e) => setStart(e.currentTarget.value)}></Input>
          <Input onInput={(e) => setEnd(e.currentTarget.value)}></Input>                  
        </main>
      )}
    </Authenticator>
  );
}

export default AdminScreen