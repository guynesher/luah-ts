import { Authenticator, Button, Flex, Table, TableBody, TableCell, TableHead, TableRow, Text } from '@aws-amplify/ui-react';
import {components} from '../../services/components'
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAllChapters, getAllLevels, getAllPrograms, getAllQuestions, selectChapters, selectItems, selectLevels, 
  selectPrograms, selectQuestions, selectTest, setItemsAsync, setTest, getAllUserPrograms, 
  selectUsers,
  clearDatas} from '../../reducers/misSlice';
import { VscEdit } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import AllReportsScreen from '../allReportsScreen';
import UserReport from '../userReport';

function ReportsScreen() {
  const [items, setItems]=useState<any[]>([])
  const [itm, setItm]=useState<any>()
  const [mode, setMode]=useState<string>("users")
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
  const [uplst, setUPLst]=useState<any>()
  const test = useAppSelector(selectTest)
  const dispatch = useAppDispatch()
  const navigate=useNavigate()
  let programsList = useAppSelector(selectPrograms)
  let levelsList = useAppSelector(selectLevels)
  let chaptersList = useAppSelector(selectChapters)
  let questionsList = useAppSelector(selectQuestions)
  let itemsList = useAppSelector(selectItems)
  let usersList = useAppSelector(selectUsers)

  useEffect(() => {
    if(items[0]===1 && programsList) setItems(programsList) 
    if(programsList && !programsList[0].programName) setItems([]) 
    if(Object.keys(items).length>0 && mode==="programs" && test) {
      setMode("items")
    }
    console.log(chapId,chapName,questionNum,prgNum)
  }, [items])

  useEffect(() => {
    if(usersList && mode==="usersReports") {
      setUPLst([...usersList])
    }
  }, [usersList,mode])

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
    if(mode==="user") {setMode("usersReports"); dispatch(clearDatas())}
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

  const goToGraphics = () => {
          dispatch(setTest(true))
          navigate("/Question") 
    }

  function compareDate( a:any, b:any) {
    if ( a.createdAt < b.createdAt ){ return -1 }
    if ( a.createdAt > b.createdAt ){return 1}
    return 0;
  }
  function compareEmail( a:any, b:any) {
    if ( a.email < b.email ){ return -1 }
    if ( a.email > b.email ){return 1}
    return 0;
  }
  function compareProgramName( a:any, b:any) {
    if (a.currentStatus &&  b.currentStatus && JSON.parse(a.currentStatus).chapterIndex  < JSON.parse(b.currentStatus).chapterIndex ){ return -1 }
    if (!a.currentStatus &&  b.currentStatus ){ return -1 }
    if (a.currentStatus &&  b.currentStatus && JSON.parse(a.currentStatus).chapterIndex > JSON.parse(b.currentStatus).chapterIndex ){return 1}
    if (a.currentStatus &&  !b.currentStatus ){ return 1 }
    return 0;
  }

  const clickHandler = (list:string) => {
      if(list==="usersReports") {dispatch(getAllUserPrograms());setMode(list)}
      if(list==="programs") {dispatch(getAllPrograms([]));setItems([1]);setMode(list)}
      if(usersList && list==="date" && mode==="usersReports") {setUPLst([...usersList].sort(compareDate).filter((item: { isOpen: any; })=>item.isOpen))}
      if(usersList && list==="email" && mode==="usersReports") {setUPLst([...usersList].sort(compareEmail).filter((item: { isOpen: any; })=>item.isOpen))}
      if(usersList && list==="programName" && mode==="usersReports") {setUPLst([...usersList].sort(compareProgramName).filter((item: { isOpen: any; })=>item.isOpen))}
      if(uplst && list==="reverse" && mode==="usersReports") {const arr = uplst.filter((item: { isOpen: any; })=>item.isOpen).reverse(); setUPLst([...arr])}
    }  

  return (
    <Authenticator components={components}>
      {({}) => (
        <main> 
        <Flex direction={{ base: 'column', large: 'row' }} gap="large" justifyContent="center" margin="10px 10px">
        <Flex direction="row">
        <Button className='btn' onClick={()=>clickHandler("usersReports")}>דוחות משתמשים</Button>
        <Button className='btn' onClick={()=>clickHandler("programs")}>דוחות תוכנית</Button>
        </Flex>
        </Flex> 

        {mode==="usersReports" && //usersList && //This is the CHAPTERS screen 
            <>
            <Flex direction={{ base: 'column', large: 'row' }} gap="large" justifyContent="center" margin="10px 10px">
            <Flex direction="row">
            <Button className='btn' onClick={()=>clickHandler("date")}>סדר לפי תאריך </Button>
            <Button className='btn' onClick={()=>clickHandler("email")}>סדר לפי אימייל  </Button>
            <Button className='btn' onClick={()=>clickHandler("programName")}>סדר לפי מצב נוכחי   </Button>
            <Button className='btn' onClick={()=>clickHandler("reverse")}>בסדר הפוך  </Button>
            </Flex>
            </Flex>
            <Table
              caption=""
              highlightOnHover={false}>
            <TableHead>
              <TableRow>
                <TableCell as="th">ID </TableCell>
                <TableCell as="th">אי מייל </TableCell>
                <TableCell as="th">שם תוכנית </TableCell>
                <TableCell as="th"> ממוצע </TableCell>
                <TableCell as="th">מצב נוכחי</TableCell>
                <TableCell as="th">שאלה הבאה</TableCell>
                <TableCell as="th">תאריך יצירה</TableCell>
                <TableCell as="th"></TableCell>
                {/* <TableCell as="th">תאריך עדכון</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {uplst && uplst.map((itm: { userProgramId: string; isOpen: any; email: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; programName: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; chapterAverage: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; currentStatus: string; nextQuestion: string; createdAt: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; updatedAt: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
              <TableRow key={"key"+itm.userProgramId+Math.floor(Math.random()*9999)} className={itm.isOpen?"adminTableRow":"tableRow"}>

                <TableCell >{itm.userProgramId}</TableCell>
                <TableCell >{itm.email}</TableCell>
                <TableCell >{itm.programName}</TableCell>
                <TableCell >{itm.chapterAverage}</TableCell>
                <TableCell >{itm.currentStatus?JSON.parse(itm.currentStatus).chapterIndex:""}</TableCell>
                <TableCell >{itm.nextQuestion?JSON.parse(itm.nextQuestion).userIndex:""}</TableCell>
                <TableCell >{itm.createdAt}</TableCell>
                <TableCell>
                    <VscEdit className={"iconBg"} onClick={() =>  {setItm(itm);setMode("user");}}/>
                </TableCell>
                {/* <TableCell >{itm.updatedAt}</TableCell> */}
              </TableRow>
                ))}
            </TableBody>
          </Table>
          </>
          }

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
            <button onClick={()=>goToGraphics()}>מסך גרפי</button>
          }  
    
          {mode==="levels" && levelsList &&   //This is the LEVELS screen 
            <Table
              caption=""
              highlightOnHover={false}>
            <TableHead>
              <TableRow>
                <TableCell as="th">ID שלב</TableCell>
                <TableCell as="th">מספר השלב</TableCell>
                <TableCell as="th">שם השלב</TableCell>
                <TableCell as="th">נושא</TableCell>
                <TableCell as="th">תיאור</TableCell>
                <TableCell as="th">תאריך יצירה</TableCell>
                <TableCell as="th">תאריך עדכון</TableCell>
                <TableCell as="th"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(levelsList).map(itm => (
              <TableRow key={itm.levelId} className="tableRow">
                <TableCell onClick={() => {dispatch(getAllChapters([itm.levelId,itm.levelNumber]));setMode("chapters");setLvlId(itm.levelId);setLvlNum(itm.levelNumber.toString());}}>{itm.levelId}</TableCell>
                <TableCell onClick={() => {dispatch(getAllChapters([itm.levelId,itm.levelNumber]));setMode("chapters");setLvlId(itm.levelId);setLvlNum(itm.levelNumber.toString());}}>{itm.levelNumber}</TableCell>
                <TableCell onClick={() => {dispatch(getAllChapters([itm.levelId,itm.levelNumber]));setMode("chapters");setLvlId(itm.levelId);setLvlNum(itm.levelNumber.toString());}}>{itm.levelName}</TableCell>
                <TableCell onClick={() => {dispatch(getAllChapters([itm.levelId,itm.levelNumber]));setMode("chapters");setLvlId(itm.levelId);setLvlNum(itm.levelNumber.toString());}}>{itm.levelSubject}</TableCell>
                <TableCell onClick={() => {dispatch(getAllChapters([itm.levelId,itm.levelNumber]));setMode("chapters");setLvlId(itm.levelId);setLvlNum(itm.levelNumber.toString());}}>{itm.levelDescription}</TableCell>
                <TableCell onClick={() => {dispatch(getAllChapters([itm.levelId,itm.levelNumber]));setMode("chapters");setLvlId(itm.levelId);setLvlNum(itm.levelNumber.toString());}}>{itm.createdAt}</TableCell>
                <TableCell onClick={() => {dispatch(getAllChapters([itm.levelId,itm.levelNumber]));setMode("chapters");setLvlId(itm.levelId);setLvlNum(itm.levelNumber.toString());}}>{itm.updatedAt}</TableCell>
                <TableCell>
                    <VscEdit className={"iconBg"} onClick={() =>  {setItm(itm);setMode("level");}}/> 
                </TableCell>
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
                <TableCell as="th">ID פרק</TableCell>
                <TableCell as="th">מספר השלב</TableCell>
                <TableCell as="th">מספר הפרק</TableCell>
                <TableCell as="th">מספר החלק</TableCell>
                <TableCell as="th">שם הפרק</TableCell>
                <TableCell as="th">נושא</TableCell>
                <TableCell as="th">תיאור</TableCell>
                <TableCell as="th">תאריך יצירה</TableCell>
                <TableCell as="th">תאריך עדכון</TableCell>
                <TableCell as="th"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(chaptersList).map(itm => (
              <TableRow key={itm.chapterId} className="tableRow">
                <TableCell onClick={() => {listChapterQuestions(itm);setMode("questions");}}>{itm.chapterId}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm);setMode("questions");}}>{itm.levelNumber}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm);setMode("questions");}}>{itm.chapterNumber}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm);setMode("questions");}}>{itm.bundleNumber}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm);setMode("questions");}}>{itm.chapterName}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm);setMode("questions");}}>{itm.chapterSubject}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm);setMode("questions");}}>{itm.chapterDescription}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm);setMode("questions");}}>{itm.createdAt}</TableCell>
                <TableCell onClick={() => {listChapterQuestions(itm);setMode("questions");}}>{itm.updatedAt}</TableCell>
                <TableCell>
                    <VscEdit className={"iconBg"} onClick={() =>  {setItm(itm);setMode("chapter");}}/>
                </TableCell>
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
                <TableCell as="th">ID שאלה</TableCell>
                <TableCell as="th">מספר השאלה</TableCell>
                <TableCell as="th">שם השאלה</TableCell>
                <TableCell as="th">נושא</TableCell>
                <TableCell as="th">תיאור</TableCell>
                <TableCell as="th">תאריך יצירה</TableCell>
                <TableCell as="th">תאריך עדכון</TableCell>
                <TableCell as="th"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(questionsList).map(itm => (
              <TableRow key={itm.questionId} className="tableRow">
                <TableCell onClick={() => {dispatch(setItemsAsync(itm.questionId));setMode("items");setQuestionId(itm.questionId);setQuestionNum(itm.questionNumber)}}>{itm.questionId}</TableCell>
                <TableCell onClick={() => {dispatch(setItemsAsync(itm.questionId));setMode("items");setQuestionId(itm.questionId);setQuestionNum(itm.questionNumber)}}>{itm.questionNumber}</TableCell>
                <TableCell onClick={() => {dispatch(setItemsAsync(itm.questionId));setMode("items");setQuestionId(itm.questionId);setQuestionNum(itm.questionNumber)}}>{itm.questionName}</TableCell>
                <TableCell onClick={() => {dispatch(setItemsAsync(itm.questionId));setMode("items");setQuestionId(itm.questionId);setQuestionNum(itm.questionNumber)}}>{itm.questionSubject}</TableCell>
                <TableCell onClick={() => {dispatch(setItemsAsync(itm.questionId));setMode("items");setQuestionId(itm.questionId);setQuestionNum(itm.questionNumber)}}>{itm.questionDescription}</TableCell>
                <TableCell onClick={() => {dispatch(setItemsAsync(itm.questionId));setMode("items");setQuestionId(itm.questionId);setQuestionNum(itm.questionNumber)}}>{itm.createdAt}</TableCell>
                <TableCell onClick={() => {dispatch(setItemsAsync(itm.questionId));setMode("items");setQuestionId(itm.questionId);setQuestionNum(itm.questionNumber)}}>{itm.updatedAt}</TableCell>
                <TableCell>
                    <VscEdit className={"iconBg"} onClick={() =>  {setItm(itm);setMode("question");}}/> 
                </TableCell>
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
          {(mode==="program" || mode==="level" || mode==="chapter" || mode==="question")&&    
            <AllReportsScreen itm={JSON.stringify(itm)} mode={mode} setMode={setMode}/>
          } 
          {mode==="user"&&    
            <UserReport itm={JSON.stringify(itm)} mode={mode} setMode={setMode}/>
          }         
          {mode!=="programs" &&    
            <button onClick={()=>changeMode()}>חזרה</button>
          }
        </main>
      )}
    </Authenticator>
  );
}

export default ReportsScreen