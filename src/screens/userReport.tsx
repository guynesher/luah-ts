import { useEffect, useState } from "react";
import { Authenticator, Button, Card, Flex, Grid, SwitchField, Text } from "@aws-amplify/ui-react";
import {components} from '../services/components'
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getAllDatas, selectDatas, updateGender } from "../reducers/misSlice";
import { PROGRAMS } from "../constants/userConstants";
import { PieChart } from 'react-minimal-pie-chart';

interface UpdateProps {
  setMode: (value: string) => void;
  itm: any;
  mode: string;
}

const UserReport: React.FC<UpdateProps>=({itm, mode}) =>{
  const [arrange, setArrange] = useState<boolean>(false);
  const [call, setCall] = useState<boolean>(false);
  const [gender, setGender] = useState<boolean>(true);
  const [once, setOnce] = useState<boolean>(true);
  const [list, setList] = useState<any>();
  const [program, setProgram] = useState<string>();
  const [programName, setProgramName] = useState<string>();
  let dataList = useAppSelector(selectDatas)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if(!call && mode==="user" && itm) { 
      const upid=JSON.parse(itm)
      setCall(true)
      setProgram(upid?.userProgramId.slice(37))
      dispatch(getAllDatas([upid?.userProgramId.slice(0,37),upid?.userProgramId.slice(37)]))
    }  
    if(!call && mode==="user" && !itm) { 
      setCall(true)
      setProgram(window.location.pathname.split("/")[2].slice(37))
    dispatch(getAllDatas([window.location.pathname.split("/")[2].slice(0,37),window.location.pathname.split("/")[2].slice(37)]))
    }  
    if(!dataList) {
      setCall(false)
      setArrange(false)
      setOnce(true)
    }
    if(dataList && !arrange) {
      setArrange(true)
      //Sort and group by work per day and level 
      const lst=[...dataList].sort(compareDate)
      const groupedItems = lst.reduce((accumulator:any, item:any) => {
        const d=new Date(Date.parse(item.updatedAt))
        const category = item.question.chapter.level.levelNumber*100000000000+
                            d.getFullYear()*1000000+(d.getMonth()+1)*1000+d.getDate();
        if (!accumulator[category]) {
          accumulator[category] = []
        }
        if(program===item.question.chapter.level.program.programId) accumulator[category].push(item);
        return accumulator
      }, {})
      //list numbers of each work day: #of questions, #correct = #find, #mistakes, #help, #video = #show, 
                                  //    average
      //console.log(groupedItems)
      const newList:any=[]
      for (const dt in groupedItems) {
        let usr:string=""
        let usrId:string=""
        let usrName:string=""
        let prg:string=""
        let gndr:string="male"
        let vid:number=0
        let chapter:number=1
        let d:Date=new Date()
        let precent:number=0
        let count:number=0
        let streams:number=0
        let noMistakeOrHelpCounter:number=0
        let oneMistakeCounter:number=0
        let oneHelpCounter:number=0
        let moreThanOneMistakeCounter:number=0
        let grade:number=0
        for (const itm in groupedItems[dt]) {    
           for (const obj in groupedItems[dt][itm]) {
             if(obj==="question") {prg=groupedItems[dt][itm][obj].chapter.level.program.programId}
             if(obj==="updatedAt") {
              d=new Date(Date.parse(groupedItems[dt][itm][obj])) //work day
              chapter=Math.floor(Number(dt)/100000000000) //chapter
             }
             if(obj==="precent") {
              precent+=groupedItems[dt][itm][obj]
             }
             if(obj==="user") {
              usr=groupedItems[dt][itm][obj].email
              usrName=groupedItems[dt][itm][obj].name
              gndr=groupedItems[dt][itm][obj].picture
             }
             if(obj==="userId") {
              usrId=groupedItems[dt][itm][obj]
             }
             if(obj==="answer") {
                const ans:string[]=JSON.parse(groupedItems[dt][itm][obj]);
                let correct:number=0
                let mistake:number=0
                let help:number=0
                for (let index = 0; index < ans.length; index++) {
                  if(ans[index][0]==="correct" || ans[index][0]==="find") {correct+=1}
                  if(ans[index][0]==="mistake") mistake+=1
                  if(ans[index][0]==="help") help+=1
                  if(ans[index][0]==="video" || ans[index][0]==="show") vid+=1
                }
                //console.log(correct,mistake,help)
                if(correct>0) {
                  if(mistake===0 && help===0) noMistakeOrHelpCounter+=1
                  if(mistake===1 && help===0) oneMistakeCounter+=1
                  if(mistake===0 && help===1) oneHelpCounter+=1
                  if(mistake+help>1) moreThanOneMistakeCounter+=1
                }
                if(correct===0) {streams+=1}
             }
             
           }
           count+=1
           grade=(precent/count)
        }
        grade=(precent-streams*100)/(count-streams) //correction for pure video units
        //console.log(grade,precent,count,streams)
        //console.log(chapter,d.getFullYear(),d.getMonth()+1,d.getDate(),grade,vid,usr,usrName,
        //noMistakeOrHelpCounter,oneMistakeCounter,oneHelpCounter,moreThanOneMistakeCounter)
        newList?.push({
                      id: usrId,
                      email: usr,
                      user: usrName, 
                      gender: gndr,
                      date: {
                        year: d.getFullYear(), 
                        month: d.getMonth()+1, 
                        day: d.getDate()
                      }, 
                      program: prg,
                      chapter: {
                        chapterNumber: chapter, 
                        numberOfUnits: count,
                        numberOfVideos: vid, 
                        grade: grade,
                        noMistakeOrHelpCounter: noMistakeOrHelpCounter,
                        oneMistakeCounter: oneMistakeCounter,
                        oneHelpCounter: oneHelpCounter,
                        moreThanOneMistakeCounter: moreThanOneMistakeCounter
                      }
                  })
        setList(newList)
      }
    }
  }, [mode,dataList]);

  useEffect(() => {
    if(program===PROGRAMS[0]) setProgramName("תוכנית קריאה - הכנה לכיתה א'")
    if(program===PROGRAMS[1]) setProgramName("תוכנית חשבון - הכנה לכיתה א'")
  }, [program]);

  useEffect(() => {
    if(list && once) {
      setOnce(false)
      setGender(list[0].gender==="male"?true:false)
      setList(list.reverse())
    }
  }, [list]);

  function compareDate( a:any, b:any) {
    if ( a.updatedAt < b.updatedAt ){ return -1 }
    if ( a.createdAt > b.updatedAt ){return 1}
    return 0;
  }

  const chapterContent = (program:string, chapNumber:number) => {
    if(program===PROGRAMS[0]) {
      if(chapNumber===1) return "פרק 1 עוסק ביחסים בין גופים וצורות - מציאת מיקום והתמצאות במרחב" 
      if(chapNumber===2) return "פרק 2 עוסק בהבחנה בין דמות לרקע - מציאת הדמות הנכונה מתוך דמויות דומות"
      if(chapNumber===3) return "פרק 3 עוסק בהבחנה בין דמות לרקע - מציאת העיקר מתוך פרטים רבים"
      if(chapNumber===4) return "פרק 4 עוסק בהבחנה בין דמות לרקע בתחום האותיות - מציאת מילה יוצאת דופן"
      if(chapNumber===5) return "פרק 5 עוסק באותיות - הכרת אותיות בכתב ובדפוס והשוני שביניהן"
      if(chapNumber===6) return "פרק 6 עוסק בתנועות - הכרת תנועות ויצירת צלילים מאותיות ותנועות יחד"
      if(chapNumber===7) return "פרק 7 עוסק בחלוקה להברות - חלוקה לפי אות פותחת וסוגרת וצליל פותח וסוגר"
      if(chapNumber===8) return "פרק 8 עוסק במילים מתחרזות - מציאת צליל סוגר זהה"
      if(chapNumber===9) return "פרק 9 עוסק זיהוי שמיעתי של צלילים - זיהוי האות והתנועה רק מצליל"
      if(chapNumber===10) return "פרק 10 עוסק בהבחנה בין מילה למילות תפל על בסיס חזותי - הדגש הוא על הבדלים בין התנועות השונות"
      if(chapNumber===11) return "פרק 11 עוסק בהבחנה בין מילה למילות תפל על בסיס חזותי- תרגול נוסף לעידוד קריאה ללא ניחוש"
      if(chapNumber===12) return "פרק 12 עוסק בהבחנה בין מילה למילות תפל על בסיס שמיעתי - מציאת מילה נכונה מבין מספר אפשרויות"
      if(chapNumber===13) return "פרק 13 עוסק חיבור הברות למילה שלמה - מציאת סדר נכון בין הברות ליצירת מילה בעלת משמעות"
      if(chapNumber===14) return "פרק 14 עוסק חיבור הברות למילה שלמה - תרגול נוסף במציאת סדר נכון בין הברות ליצירת מילה בעלת משמעות"
      if(chapNumber===15) return "פרק 15 עוסק בהבחנה בין מילה למילות תפל - קריאה מלאה של מילים"
    }
    return ""
  }

  return (
    <Authenticator components={components}>
    {({}) => (
      <Flex direction={"column"}>
        <Grid
          columnGap="0.5rem"
          rowGap="0.5rem"
          templateColumns="1fr 1fr 1fr"
          templateRows="1fr"
        >
          <Card 
            columnStart="1"
            columnEnd="-1"
            backgroundColor="orange.20"
          >
            <Flex direction={{base:"column", large:"row"}}>
            <Flex width={"100%"}>
            <Text     variation="primary"
              as="p"
              lineHeight="1.5em"
              fontWeight={400}
              fontSize="2em"
              fontStyle="normal"
              textDecoration="none"
              color={"blue.80"}
              width={{base:"100%", large:"100%"}}>
              דוח התקדמות של <b>{list && list[0].user?" "+list[0].user:gender?"הילד ":"הילדה "}</b> {"ב"} 
              <b>{programName}</b>
            </Text>
            </Flex>
            <Flex direction={"column"} width={"100%"}>
            <Text     variation="primary"
              as="p"
              lineHeight="1.1em"
              fontWeight={400}
              fontSize="1.5em"
              fontStyle="normal"
              textDecoration="none"
              color={"blue.80"}
              width={{base:"100%", large:"100%"}}>
              משוייך לאי-מייל{list?" "+list[0].email:""}
            </Text>
            <SwitchField
              id="loop"
              isDisabled={false}
              trackColor={"purple.40"}
              trackCheckedColor={"blue.60" }
              label="זכר/נקבה"
              labelPosition="end"
              dir="ltr"
              isChecked={gender}
              onChange={(e)=>{setGender(e.target.checked);dispatch(updateGender([list?list[0].id:"",gender?"female":"male"]))}}
            />
            </Flex>
            </Flex>

{list &&  list.map((itm: {date:any, user:string,chapter:any, program:string})=>  
          
            <Flex key={"key1999"+Math.floor(Math.random()*99999)} direction="column" gap="medium" margin="40px">
              <Button backgroundColor="purple.80"></Button>
              <Text     
                variation="primary"
                as="p"
                lineHeight="1.1em"
                fontWeight={400}
                fontSize="1.5em"
                fontStyle="normal"
                textDecoration="none"
                color={"blue.80"}
                width="100%">
                   בתאריך <b>{" "+itm.date.year+"-"+itm.date.month+"-"+itm.date.day}</b> 
                  {gender?" תרגל ":" תרגלה "}
                  <b>{itm.user+" "}</b> בפרק  <b>{" "+itm.chapter.chapterNumber}</b> 
              </Text>
              <Text     
                variation="primary"
                as="p"
                lineHeight="1.1em"
                fontWeight={400}
                fontSize="1.5em"
                fontStyle="normal"
                textDecoration="none"
                color={"blue.80"}
                width="100%">
                    {chapterContent(itm.program,Number(itm.chapter.chapterNumber))}
              </Text>
              <Text     
                variation="primary"
                as="p"
                lineHeight="1.1em"
                fontWeight={400}
                fontSize="1.5em"
                fontStyle="normal"
                textDecoration="none"
                color={"blue.80"}
                width="100%">
                    {itm.user} 
                    {gender?" למד ":" למדה "}
                    <b>{ itm.chapter.numberOfUnits}</b> {" יחידות לימוד בהן הוקרנו "}
                    <b>{itm.chapter.numberOfVideos }</b> { " סרטוני הסבר"}
              </Text>
              {itm.chapter.grade?
              <>
              <Text     
                variation="primary"
                as="p"
                lineHeight="1.1em"
                fontWeight={400}
                fontSize="1.5em"
                fontStyle="normal"
                textDecoration="none"
                color={"blue.80"}
                width="100%">
                    {" הציון ביחידות הלימוד הללו היה  "}<b>{Math.ceil(itm.chapter.grade)}</b> {" והתחלק בדרך הזו:"}
              </Text>
              <Flex direction={{base:"column", large:"row"}}>
              <Flex direction={"column"} width={"100%"}>
              <Text     
                variation="primary"
                as="p"
                lineHeight="1.1em"
                fontWeight={400}
                fontSize="1.5em"
                fontStyle="normal"
                textDecoration="none"
                color={"green"}
                width={"100%"}>
               <b>{ itm.chapter.noMistakeOrHelpCounter+ " "}</b> שאלות בהן לא נדרשה כלל עזרה
              </Text>
              <Text     
                variation="primary"
                as="p"
                lineHeight="1.1em"
                fontWeight={400}
                fontSize="1.5em"
                fontStyle="normal"
                textDecoration="none"
                color={"orange"}
                width={"100%"}>
                <b>{ itm.chapter.oneHelpCounter+ " "}</b>   שאלות בהן נדרשה מעט עזרה
              </Text>
              <Text     
                variation="primary"
                as="p"
                lineHeight="1.1em"
                fontWeight={400}
                fontSize="1.5em"
                fontStyle="normal"
                textDecoration="none"
                color={"red"}
                width={"100%"}>
                    <b>{ itm.chapter.oneMistakeCounter+ " "}</b>שאלות בהן נעשתה טעות אחת
              </Text>
              <Text     
                variation="primary"
                as="p"
                lineHeight="1.1em"
                fontWeight={400}
                fontSize="1.5em"
                fontStyle="normal"
                textDecoration="none"
                color={"red.90"}
                width={"100%"}>
                  <b>{ itm.chapter.moreThanOneMistakeCounter+ " "}</b> שאלות בהן נעשו טעויות רבות
              </Text>
              </Flex>
              <Flex direction={"column"}  width={"100%"}>
              <PieChart
                data={[
                  { title: 'One', value: itm.chapter.noMistakeOrHelpCounter, color: 'green' },
                  { title: 'Two', value: itm.chapter.oneHelpCounter, color: 'orange' },
                  { title: 'Three', value: itm.chapter.oneMistakeCounter, color: 'red' },
                  { title: 'For', value: itm.chapter.moreThanOneMistakeCounter, color: 'hsl(0, 100%, 20%)' },
                ]}
                label={({ dataEntry }) => dataEntry.value>0?dataEntry.value:""}
                labelStyle={{...{fontSize: '10px',fill: "white"}}}
                viewBoxSize={[200, 100]}
              />
              </Flex>
              </Flex>
              </>:<></>}
              {itm.chapter.grade<60?
                <Text     
                variation="primary"
                as="p"
                lineHeight="1.1em"
                fontWeight={400}
                fontSize="1.5em"
                fontStyle="normal"
                textDecoration="none"
                color={"red"}
                width="100%">
                   נראה שכדאי לחזור על היחידה. אנא, עודדו את ילדכם לחזור על פרק {" "+itm.chapter.chapterNumber}
              </Text>:<></>}
            </Flex>
            )}
           
          </Card>
        </Grid>
      </Flex>
        )}
      </Authenticator>
  );
}

export default UserReport;