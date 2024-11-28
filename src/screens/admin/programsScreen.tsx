import { Authenticator, Table, TableBody, TableCell, TableHead, TableRow, Text } from '@aws-amplify/ui-react';
import {components} from '../../services/components'
import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAllChapters, getAllLevels, getAllPrograms, getAllQuestions, selectChapters, selectItems, selectLevels, selectPrograms, selectQuestions, selectTest, setItemsAsync, setTest } from '../../reducers/misSlice';
import UpdateAllScreen from '../updateAllScreen';
import { VscAdd, VscEdit, VscRemove } from 'react-icons/vsc';
import { FaTrashCan } from 'react-icons/fa6';
import ReadXlsxFile from 'read-excel-file'
import { useNavigate } from 'react-router-dom';

function ProgramsScreen() {
  const [items, setItems]=useState<any[]>([])
  const [itm, setItm]=useState<any>()
  const [mode, setMode]=useState<string>("programs")
  const [chap, setChap]=useState<string>("")
  const [bund, setBund]=useState<string>("")
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

  const listChapterQuestions= (chapNum:number,bundNum:number,chapName:string) => {
    const list=chaptersList?.filter(item=> item.chapterNumber===chapNum && item.bundleNumber[0]===bundNum &&
              item.chapterName===chapName && item)
    setChap(chapNum.toString())
    setBund(bundNum.toString())
    dispatch(getAllQuestions(list?list:[]))
  }

  const add= () => {
    if(mode==="chapters") console.log(chaptersList)
    if(mode==="questions") {
      console.log(chap,bund)
      const name=questionsList?questionsList[0].questionName:""
      console.log(name)
      const list=chaptersList?.filter(item=> item.chapterNumber===Number(chap) && item.bundleNumber[0]===Number(bund) &&
        item.chapterName===name && item)
        //add identical chapter with a differetn chapterId
        //add question with the same: chapterId ,and questionId as the chapterId ,and questionName, 
        //                            and chapterNuber must be questionsList[questionsList.length].chapterNuber+1
        //                            and questionNumber must be questionsList[questionsList.length].questionNumber+1
        console.log(list)}
    if(mode==="items") { 
      //add item with a new itemId and the same questionId and questionNumber
      console.log(itemsList)
    }
  }

  const createManyLines = (e: ChangeEvent<HTMLInputElement>) => {
    if(e && e.target && e.target.files) ReadXlsxFile(e.target.files[0]).then((rows)=> {
      for (let index = 1; index < rows.length; index++) {
          console.log(rows[index]) 
          //Create new Item with the data from the row
      }
    })}

  const goToGraphics = () => {
          dispatch(setTest(true))
          navigate("/Question") 
    }

  //DB connections: 
  //selectionSet: ["createdAt","programAnimation","programAnimationName","programDescription",
  //"programId","programName","programNumber","programSubject","updatedAt"],

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
                <TableCell onClick={() => {dispatch(getAllLevels(itm.programId));setMode("levels");}}>{itm.programId}</TableCell>
                <TableCell onClick={() => {dispatch(getAllLevels(itm.programId));setMode("levels");}}>{itm.programNumber}</TableCell>
                <TableCell onClick={() => {dispatch(getAllLevels(itm.programId));setMode("levels");}}>{itm.programName}</TableCell>
                <TableCell onClick={() => {dispatch(getAllLevels(itm.programId));setMode("levels");}}>{itm.programSubject}</TableCell>
                <TableCell onClick={() => {dispatch(getAllLevels(itm.programId));setMode("levels");}}>{itm.programDescription}</TableCell>
                <TableCell onClick={() => {dispatch(getAllLevels(itm.programId));setMode("levels");}}>{itm.createdAt}</TableCell>
                <TableCell onClick={() => {dispatch(getAllLevels(itm.programId));setMode("levels");}}>{itm.updatedAt}</TableCell>
              </TableRow>
                ))}
            </TableBody>
          </Table>
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
          </> 
          }  
          {mode!=="programs" &&    
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
                <TableCell onClick={() => {dispatch(getAllChapters(itm.levelNumber));setMode("chapters");}}>{itm.levelId}</TableCell>
                <TableCell onClick={() => {dispatch(getAllChapters(itm.levelNumber));setMode("chapters");}}>{itm.levelNumber}</TableCell>
                <TableCell onClick={() => {dispatch(getAllChapters(itm.levelNumber));setMode("chapters");}}>{itm.levelName}</TableCell>
                <TableCell onClick={() => {dispatch(getAllChapters(itm.levelNumber));setMode("chapters");}}>{itm.levelSubject}</TableCell>
                <TableCell onClick={() => {dispatch(getAllChapters(itm.levelNumber));setMode("chapters");}}>{itm.levelDescription}</TableCell>
                <TableCell onClick={() => {dispatch(getAllChapters(itm.levelNumber));setMode("chapters");}}>{itm.createdAt}</TableCell>
                <TableCell onClick={() => {dispatch(getAllChapters(itm.levelNumber));setMode("chapters");}}>{itm.updatedAt}</TableCell>
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
                <TableCell onClick={() => {listChapterQuestions(itm.chapterNumber,Number(itm.bundleNumber[0]),itm.chapterName);setMode("questions");}}>{itm.chapterId}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm.chapterNumber,Number(itm.bundleNumber[0]),itm.chapterName);setMode("questions");}}>{itm.levelNumber}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm.chapterNumber,Number(itm.bundleNumber[0]),itm.chapterName);setMode("questions");}}>{itm.chapterNumber}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm.chapterNumber,Number(itm.bundleNumber[0]),itm.chapterName);setMode("questions");}}>{itm.bundleNumber}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm.chapterNumber,Number(itm.bundleNumber[0]),itm.chapterName);setMode("questions");}}>{itm.chapterName}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm.chapterNumber,Number(itm.bundleNumber[0]),itm.chapterName);setMode("questions");}}>{itm.chapterSubject}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm.chapterNumber,Number(itm.bundleNumber[0]),itm.chapterName);setMode("questions");}}>{itm.chapterDescription}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm.chapterNumber,Number(itm.bundleNumber[0]),itm.chapterName);setMode("questions");}}>{itm.createdAt}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm.chapterNumber,Number(itm.bundleNumber[0]),itm.chapterName);setMode("questions");}}>{itm.updatedAt}</TableCell>
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
                <TableCell onClick={() => {dispatch(setItemsAsync(itm.questionId));setMode("items");}}>{itm.questionId}</TableCell>
                <TableCell onClick={() => {dispatch(setItemsAsync(itm.questionId));setMode("items");}}>{itm.questionNumber}</TableCell>
                <TableCell onClick={() => {dispatch(setItemsAsync(itm.questionId));setMode("items");}}>{itm.questionName}</TableCell>
                <TableCell onClick={() => {dispatch(setItemsAsync(itm.questionId));setMode("items");}}>{itm.questionSubject}</TableCell>
                <TableCell onClick={() => {dispatch(setItemsAsync(itm.questionId));setMode("items");}}>{itm.questionDescription}</TableCell>
                <TableCell onClick={() => {dispatch(setItemsAsync(itm.questionId));setMode("items");}}>{itm.createdAt}</TableCell>
                <TableCell onClick={() => {dispatch(setItemsAsync(itm.questionId));setMode("items");}}>{itm.updatedAt}</TableCell>
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
                    <FaTrashCan className={"iconBg"}/> 
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