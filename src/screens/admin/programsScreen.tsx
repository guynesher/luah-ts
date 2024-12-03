import { Authenticator, Table, TableBody, TableCell, TableHead, TableRow, Text } from '@aws-amplify/ui-react';
import {components} from '../../services/components'
import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { createChapter, createQuestion, createLevel, getAllChapters, getAllLevels, getAllPrograms, getAllQuestions, selectChapters, selectItems, selectLevels, selectPrograms, selectQuestions, selectTest, setItemsAsync, setTest, createItem, deleteItem, createItems } from '../../reducers/misSlice';
import UpdateAllScreen from '../updateAllScreen';
import { VscAdd, VscEdit, VscRemove } from 'react-icons/vsc';
import { FaTrashCan } from 'react-icons/fa6';
import ReadXlsxFile from 'read-excel-file'
import { useNavigate } from 'react-router-dom';

function ProgramsScreen() {
  const [items, setItems]=useState<any[]>([])
  const [itm, setItm]=useState<any>()
  const [mode, setMode]=useState<string>("programs")
  const [chapId, setChapId]=useState<string>("")
  const [chapName, setChapName]=useState<string>("")  
  const [chapSubject, setChapSubject]=useState<string>("")
  const [chapDesc, setChapDesc]=useState<string>("")
  const [chap, setChap]=useState<string>("")
  const [bund, setBund]=useState<string>("")
  const [questionId, setQuestionId]=useState<string>("")
  const [questionNum, setQuestionNum]=useState<string>("")
  const [prg, setPrg]=useState<string>("")
  const [prgNum, setPrgNum]=useState<string>("")
  const [lvlNum, setLvlNum]=useState<string>("")
  const [lvlId, setLvlId]=useState<string>("")
  const [nav, setNav] = useState<boolean>(false);
  const test = useAppSelector(selectTest)
  const dispatch = useAppDispatch()
  const navigate=useNavigate()
  let programsList = useAppSelector(selectPrograms)
  let levelsList = useAppSelector(selectLevels)
  let chaptersList = useAppSelector(selectChapters)
  let questionsList = useAppSelector(selectQuestions)
  let itemsList = useAppSelector(selectItems)

  useEffect(() => {
    if(Object.keys(items).length===0 && mode==="programs") {
      dispatch(getAllPrograms([]))
      setItems([1])
    }
    if(items[0]===1 && programsList) setItems(programsList) 
    if(programsList && !programsList[0].programName) setItems([]) 
    if(Object.keys(items).length>0 && mode==="programs" && test) {
      setMode("items")
    }
  }, [items])

  useEffect(() => {
    if(nav) {
      setTimeout(function () {
        setNav(false)
        if(mode==="levels") {dispatch(getAllLevels(prg))}
        if(mode==="chapters") {dispatch(getAllChapters([lvlId,lvlNum]))}
        if(mode==="questions") {dispatch(getAllQuestions([chapSubject,chapDesc]))}
        if(mode==="items") {dispatch(setItemsAsync(questionId))}
      }, 1000);
    }
  }, [nav,mode]);

  const changeMode= () => {
    if(mode==="levels") setMode("programs")
    if(mode==="chapters") setMode("levels")
    if(mode==="questions") setMode("chapters")
    if(mode==="items") setMode("questions")
    if(mode==="program") setMode("programs")
    if(mode==="level") setMode("levels")
    if(mode==="chapter") setMode("chapters")
    if(mode==="question") setMode("questions")
    if(mode==="item") setMode("items")
  }

  const listChapterQuestions= (itm:any) => {
    setChapId(itm.chapterId)
    setChapName(itm.chapterName)
    setChapSubject(itm.chapterSubject)
    setChapDesc(itm.chapterDescription)
    setChap(itm.chapterNumber.toString())
    setBund(itm.bundleNumber[0].toString())
    dispatch(getAllQuestions([itm.chapterSubject,itm.chapterDescription]))
  }

  const add= () => {
    if(mode==="levels") {dispatch(createLevel([prg])); setNav(true);}
    if(mode==="chapters") {dispatch(createChapter([lvlId,lvlNum,prgNum])); setNav(true);}
    if(mode==="questions") {dispatch(createQuestion([chapId, chapName,chapSubject,chapDesc]));setNav(true);}
    if(mode==="items") {dispatch(createItem([questionId,questionNum]));setNav(true);} 
  }

  const delItm= (id:string) => {
    //if(mode==="levels") {dispatch(createLevel([prg])); setNav(true);}
    //if(mode==="chapters") {dispatch(createChapter([lvlId,lvlNum,prgNum])); setNav(true);}
    //if(mode==="questions") {dispatch(createQuestion([chapId, chapName,chapSubject,chapDesc]));setNav(true);}
    if(mode==="items" && id!=="all") {dispatch(deleteItem(id));setNav(true);} 
    if(mode==="items" && id==="all") { 
      if(itemsList) 
        for (let index = 0; index < itemsList.length; index++) {
          setTimeout(function () {
            dispatch(deleteItem(itemsList[index].itemId))
          }, 200);
        }
        setTimeout(function () {
          setNav(true)
        }, 3000);
    } 
  }

  const createManyLines = (e: ChangeEvent<HTMLInputElement>) => {
    if(e && e.target && e.target.files) ReadXlsxFile(e.target.files[0]).then((rows)=> {
      const arr:string[][]=[]
      for (let index = 1; index < rows.length; index++) {
          const it=rows[index]
          arr.push([questionId,questionNum,it[0]?it[0].toString():"",it[1]?it[1].toString():"",it[8]?it[8].toString():"",
          it[11]?it[11].toString():"",it[7]?it[7].toString():"",it[6]?it[6].toString():"", it[2]?it[2].toString():"0", it[3]?it[3].toString():"0",
          it[4]?it[4].toString():"0", it[5]?it[5].toString():"0", it[17]?it[17].toString():"0", it[18]?it[18].toString():"0", 
          it[19]?it[19].toString():"0", it[20]?it[20].toString():"0", it[21]?it[21].toString():"0",
          it[22]?it[22].toString():"0",it[16]?it[16].toString():"",it[9]?"true":"false",it[10]?"true":"false"
          ,it[13]?"true":"false",it[14]?"true":"false",it[15]?"true":"false"] )
      }
      dispatch(createItems(arr))
      setTimeout(function () {
        setNav(true)
      }, 5000);
    })}

  const goToGraphics = () => {
          dispatch(setTest(true))
          navigate("/Question") 
    }

  return (
    <Authenticator components={components}>
      {({}) => (
        <main>  
        {mode==="programs" &&     //This is the PROGRAMS screen 
        <Table
          caption=""
          highlightOnHover={false}>
            <TableHead>
              <TableRow>
                <TableCell as="th"></TableCell>
                <TableCell as="th">ID תוכנית</TableCell>
                <TableCell as="th">מספר התוכנית</TableCell>
                <TableCell as="th">שם התוכנית</TableCell>
                <TableCell as="th">נושא</TableCell>
                <TableCell as="th">תיאור</TableCell>
                <TableCell as="th">תאריך יצירה</TableCell>
                <TableCell as="th"> עדכון</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {programsList && Object.values(programsList).map(itm => (
              <TableRow key={itm.programId} className="tableRow">
                <TableCell>
                    <VscEdit className={"iconBg"} onClick={() =>  {setItm(itm);setMode("program");}}/>
                    <VscAdd className={"iconBg"}/>
                    <VscRemove className={"iconBg"}/>  
                </TableCell>
                <TableCell onClick={() => {dispatch(getAllLevels(itm.programId));setMode("levels");setPrg(itm.programId);setPrgNum(itm.programNumber);}}>{itm.programId}</TableCell>
                <TableCell onClick={() => {dispatch(getAllLevels(itm.programId));setMode("levels");setPrg(itm.programId);setPrgNum(itm.programNumber);}}>{itm.programNumber}</TableCell>
                <TableCell onClick={() => {dispatch(getAllLevels(itm.programId));setMode("levels");setPrg(itm.programId);setPrgNum(itm.programNumber);}}>{itm.programName}</TableCell>
                <TableCell onClick={() => {dispatch(getAllLevels(itm.programId));setMode("levels");setPrg(itm.programId);setPrgNum(itm.programNumber);}}>{itm.programSubject}</TableCell>
                <TableCell onClick={() => {dispatch(getAllLevels(itm.programId));setMode("levels");setPrg(itm.programId);setPrgNum(itm.programNumber);}}>{itm.programDescription}</TableCell>
                <TableCell onClick={() => {dispatch(getAllLevels(itm.programId));setMode("levels");setPrg(itm.programId);setPrgNum(itm.programNumber);}}>{itm.createdAt}</TableCell>
                <TableCell onClick={() => {dispatch(getAllLevels(itm.programId));setMode("levels");setPrg(itm.programId);setPrgNum(itm.programNumber);}}>{itm.updatedAt}</TableCell>
              </TableRow>
                ))}
            </TableBody>
          </Table>
          }
          {mode==="programs" &&    
            <button onClick={()=>navigate("/Courses")}>חזרה</button>
          }
          {mode!=="programs" &&    
            <button onClick={()=>changeMode()}>חזרה</button>
          }

          { //This is the TEXT area in the screen 
            programsList && (mode==="levels" || mode==="chapters" || mode==="questions" || mode==="items") &&
            <Text variation="primary" as="p" lineHeight="1.5em" fontWeight={400} fontSize="1em" fontStyle="normal"
             textDecoration="none" width="60vw">
            {Object.values(programsList).length>0 && programsList[0].programName}
            </Text>
          }
          { //This is the TEXT area in the screen 
            chaptersList && (mode==="chapters" || mode==="questions" || mode==="items") &&
            <Text variation="primary" as="p" lineHeight="1.5em" fontWeight={400} fontSize="1em" fontStyle="normal"
             textDecoration="none" width="60vw"> 
            {Object.values(chaptersList).length>0 && "שלב "+chaptersList[0].levelNumber}
            </Text>
          }
          { //This is the TEXT area in the screen 
            chaptersList && (mode==="questions" || mode==="items") &&
            <>
            <Text variation="primary" as="p" lineHeight="1.5em" fontWeight={400} fontSize="1em" fontStyle="normal"
             textDecoration="none" width="60vw"> 
            {Object.values(chaptersList).length>0 && "פרק "+ chap}
            </Text>
            <Text variation="primary" as="p" lineHeight="1.5em" fontWeight={400} fontSize="1em" fontStyle="normal"
             textDecoration="none" width="60vw"> 
            {Object.values(chaptersList).length>0 && "חלק "+ bund}
            </Text>
            </>
          }
          { //This is the TEXT area in the screen 
            itemsList && mode==="items" &&
            <Text variation="primary" as="p" lineHeight="1.5em" fontWeight={400} fontSize="1em" fontStyle="normal"
             textDecoration="none" width="60vw"> 
            {Object.values(itemsList).length>0 && "שאלה "+itemsList[0].questionNumber}
            </Text>
          }
          {mode==="items" && 
          <>  
            <button onClick={()=>goToGraphics()}>מסך גרפי</button>
            <div>הוספת {mode}</div><input type="file" onChange={(e)=>createManyLines(e)}/>
            <button onClick={()=>delItm("all")}>מחיקת כל הפריטים יחד </button><br></br>
          </> 
          }  
          {(mode==="levels" || mode==="chapters" || mode==="questions" || mode==="items")&&    
            <button onClick={()=>add()}>הוספת {mode.slice(0,mode.length-1)}</button>
          }        
          {mode==="levels" && levelsList &&   //This is the LEVELS screen 
            <Table
              caption=""
              highlightOnHover={false}>
            <TableHead>
              <TableRow>
                <TableCell as="th"></TableCell>
                <TableCell as="th">ID שלב</TableCell>
                <TableCell as="th">מספר השלב</TableCell>
                <TableCell as="th">שם השלב</TableCell>
                <TableCell as="th">נושא</TableCell>
                <TableCell as="th">תיאור</TableCell>
                <TableCell as="th">תאריך יצירה</TableCell>
                <TableCell as="th">תאריך עדכון</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(levelsList).map(itm => (
              <TableRow key={itm.levelId} className="tableRow">
                <TableCell>
                    <VscEdit className={"iconBg"} onClick={() =>  {setItm(itm);setMode("level");}}/>
                    <VscAdd className={"iconBg"}/>
                    <VscRemove className={"iconBg"}/>  
                </TableCell>
                <TableCell onClick={() => {dispatch(getAllChapters([itm.levelId,itm.levelNumber]));setMode("chapters");setLvlId(itm.levelId);setLvlNum(itm.levelNumber.toString());}}>{itm.levelId}</TableCell>
                <TableCell onClick={() => {dispatch(getAllChapters([itm.levelId,itm.levelNumber]));setMode("chapters");setLvlId(itm.levelId);setLvlNum(itm.levelNumber.toString());}}>{itm.levelNumber}</TableCell>
                <TableCell onClick={() => {dispatch(getAllChapters([itm.levelId,itm.levelNumber]));setMode("chapters");setLvlId(itm.levelId);setLvlNum(itm.levelNumber.toString());}}>{itm.levelName}</TableCell>
                <TableCell onClick={() => {dispatch(getAllChapters([itm.levelId,itm.levelNumber]));setMode("chapters");setLvlId(itm.levelId);setLvlNum(itm.levelNumber.toString());}}>{itm.levelSubject}</TableCell>
                <TableCell onClick={() => {dispatch(getAllChapters([itm.levelId,itm.levelNumber]));setMode("chapters");setLvlId(itm.levelId);setLvlNum(itm.levelNumber.toString());}}>{itm.levelDescription}</TableCell>
                <TableCell onClick={() => {dispatch(getAllChapters([itm.levelId,itm.levelNumber]));setMode("chapters");setLvlId(itm.levelId);setLvlNum(itm.levelNumber.toString());}}>{itm.createdAt}</TableCell>
                <TableCell onClick={() => {dispatch(getAllChapters([itm.levelId,itm.levelNumber]));setMode("chapters");setLvlId(itm.levelId);setLvlNum(itm.levelNumber.toString());}}>{itm.updatedAt}</TableCell>
              </TableRow>
                ))}
            </TableBody>
          </Table>
          }
          {mode==="chapters" && chaptersList && //This is the CHAPTERS screen 
            <Table
              caption=""
              highlightOnHover={false}>
            <TableHead>
              <TableRow>
                <TableCell as="th"></TableCell>
                <TableCell as="th">ID פרק</TableCell>
                <TableCell as="th">מספר השלב</TableCell>
                <TableCell as="th">מספר הפרק</TableCell>
                <TableCell as="th">מספר החלק</TableCell>
                <TableCell as="th">שם הפרק</TableCell>
                <TableCell as="th">נושא</TableCell>
                <TableCell as="th">תיאור</TableCell>
                <TableCell as="th">תאריך יצירה</TableCell>
                <TableCell as="th">תאריך עדכון</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(chaptersList).map(itm => (
              <TableRow key={itm.chapterId} className="tableRow">
                <TableCell>
                    <VscEdit className={"iconBg"} onClick={() =>  {setItm(itm);setMode("chapter");}}/>
                    <VscAdd className={"iconBg"}/>
                    <VscRemove className={"iconBg"}/>  
                </TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm);setMode("questions");}}>{itm.chapterId}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm);setMode("questions");}}>{itm.levelNumber}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm);setMode("questions");}}>{itm.chapterNumber}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm);setMode("questions");}}>{itm.bundleNumber}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm);setMode("questions");}}>{itm.chapterName}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm);setMode("questions");}}>{itm.chapterSubject}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm);setMode("questions");}}>{itm.chapterDescription}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm);setMode("questions");}}>{itm.createdAt}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm);setMode("questions");}}>{itm.updatedAt}</TableCell>
              </TableRow>
                ))}
            </TableBody>
          </Table>
          }
          {mode==="questions" && questionsList && //This is the QUESTIONS screen 
            <Table
              caption=""
              highlightOnHover={false}>
            <TableHead>
              <TableRow>
                <TableCell as="th"></TableCell>
                <TableCell as="th">ID שאלה</TableCell>
                <TableCell as="th">מספר השאלה</TableCell>
                <TableCell as="th">שם השאלה</TableCell>
                <TableCell as="th">נושא</TableCell>
                <TableCell as="th">תיאור</TableCell>
                <TableCell as="th">תאריך יצירה</TableCell>
                <TableCell as="th">תאריך עדכון</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(questionsList).map(itm => (
              <TableRow key={itm.questionId} className="tableRow">
                <TableCell>
                    <VscEdit className={"iconBg"} onClick={() =>  {setItm(itm);setMode("question");}}/>
                    <VscAdd className={"iconBg"}/>
                    <VscRemove className={"iconBg"}/>  
                </TableCell>
                <TableCell onClick={() => {dispatch(setItemsAsync(itm.questionId));setMode("items");setQuestionId(itm.questionId);setQuestionNum(itm.questionNumber)}}>{itm.questionId}</TableCell>
                <TableCell onClick={() => {dispatch(setItemsAsync(itm.questionId));setMode("items");setQuestionId(itm.questionId);setQuestionNum(itm.questionNumber)}}>{itm.questionNumber}</TableCell>
                <TableCell onClick={() => {dispatch(setItemsAsync(itm.questionId));setMode("items");setQuestionId(itm.questionId);setQuestionNum(itm.questionNumber)}}>{itm.questionName}</TableCell>
                <TableCell onClick={() => {dispatch(setItemsAsync(itm.questionId));setMode("items");setQuestionId(itm.questionId);setQuestionNum(itm.questionNumber)}}>{itm.questionSubject}</TableCell>
                <TableCell onClick={() => {dispatch(setItemsAsync(itm.questionId));setMode("items");setQuestionId(itm.questionId);setQuestionNum(itm.questionNumber)}}>{itm.questionDescription}</TableCell>
                <TableCell onClick={() => {dispatch(setItemsAsync(itm.questionId));setMode("items");setQuestionId(itm.questionId);setQuestionNum(itm.questionNumber)}}>{itm.createdAt}</TableCell>
                <TableCell onClick={() => {dispatch(setItemsAsync(itm.questionId));setMode("items");setQuestionId(itm.questionId);setQuestionNum(itm.questionNumber)}}>{itm.updatedAt}</TableCell>
              </TableRow>
                ))}
            </TableBody>
          </Table>
          }
          {mode==="items" && itemsList && //This is the ITEMS screen 
            <Table
              caption=""
              highlightOnHover={false}>
            <TableHead>
              <TableRow>
                <TableCell as="th"></TableCell>
                <TableCell as="th">ItemID</TableCell>
                <TableCell as="th">שלב</TableCell>
                <TableCell as="th">מספר</TableCell>
                <TableCell as="th"> סוג</TableCell>
                <TableCell as="th">מקום</TableCell>
                <TableCell as="th">גודל</TableCell>
                <TableCell as="th">תנאים </TableCell>
                <TableCell as="th"> אנימציה</TableCell>
                <TableCell as="th"> שמע</TableCell>
                <TableCell as="th"> סגמנטים</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(itemsList).map(itm => (
              <TableRow key={itm.itemId} className="tableRow"
                   >
                <TableCell>
                    <VscEdit className={"iconBg"} onClick={() =>  {setItm(itm); setMode("item");}}/>
                    <FaTrashCan className={"iconBg"} onClick={() =>  delItm(itm.itemId) }/> 
                    <VscAdd className={"iconBg"}/>
                    <VscRemove className={"iconBg"}/>  
                </TableCell>
                <TableCell onClick={() => { setItm(itm); setMode("item");}}>{itm.itemId}</TableCell>
                <TableCell onClick={() => { setItm(itm); setMode("item");}}>{itm.step}</TableCell>
                <TableCell onClick={() => { setItm(itm); setMode("item");}}>{itm.itemNumber}</TableCell>
                <TableCell onClick={() => { setItm(itm); setMode("item");}}>{itm.itemType}</TableCell>
                <TableCell onClick={() => { setItm(itm); setMode("item");}} width={"5rem"}>
                    {itm.itemPosition[0]+" "+itm.itemPosition[1]}</TableCell>
                <TableCell onClick={() => { setItm(itm); setMode("item");}}width={"5rem"}>
                    {itm.itemSize[0]+" "+itm.itemSize[1]}</TableCell>
                <TableCell onClick={() => { setItm(itm); setMode("item");}} width={"5rem"}>
                   {itm.itemCondition[0]+" "+itm.itemCondition[1]}</TableCell>
                <TableCell onClick={() => { setItm(itm); setMode("item");}}>{itm.animationName}</TableCell>
                <TableCell onClick={() => { setItm(itm); setMode("item");}}>{itm.audioData}</TableCell>
                <TableCell onClick={() => { setItm(itm); setMode("item");}}>{itm.segments[0]+" "+itm.segments[1]+" "
                   +itm.segments[2]+" "+itm.segments[3]+" "+itm.segments[4]+" "+itm.segments[5]+" "}</TableCell>
              </TableRow>
                ))}
            </TableBody>
          </Table>
          }
          {(mode==="program" || mode==="level" || mode==="chapter" || mode==="question" || mode==="item")&&    
            <UpdateAllScreen itm={JSON.stringify(itm)} mode={mode} setMode={setMode}/>
          }         
          {mode!=="programs" &&    
            <button onClick={()=>changeMode()}>חזרה</button>
          }
        </main>
      )}
    </Authenticator>
  );
}

export default ProgramsScreen