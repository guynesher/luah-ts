import { Authenticator, Button, Flex } from '@aws-amplify/ui-react';
import { useAppDispatch, useAppSelector } from "../store/hooks"
import {components} from '../services/components'
import { useEffect,  useState} from 'react';
import { Hub } from 'aws-amplify/utils';
import { useNavigate } from 'react-router-dom';
import { selectAudio, selectButtons, selectItems, setAudio, setButton, setItemsAsync } from '../reducers/misSlice';
import { selectPrograms, selectUser, setPrograms } from '../reducers/userSlice';
import { AuthUtils } from '../components/AuthUtils';
//import { Howl, Howler } from 'howler';
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../../amplify/data/resource'
import { PROGRAMS } from '../constants/userConstants';
import { getUrl } from 'aws-amplify/storage';
import { flushSync } from 'react-dom';
import ZipLottieSound from '../components/zipLottieSound';
import ZipLottieBTN from '../components/zipLottieBtn';
import VideoPlayer from '../components/videoPlayer';
import MovingBtn from '../components/movingBtn';
import MovingFind from '../components/movingFind';
import Cursor from '../components/cursor';
import Draggable from 'react-draggable';
import { CHAPTERS } from '../constants/program0101';
import { updateUserData, updateUserPrograms } from '../actions/usersActions';

const client = generateClient<Schema>();

function QuestionScreen() {
  const dispatch = useAppDispatch()
  const[show,setShow]=useState(false)
  const navigate=useNavigate()
  const audio = useAppSelector(selectAudio)
  const [width, setWidth] = useState<number>()
  const [height, setHeight] = useState<number>()
  const [pageItems,setPageItems]=useState<any[]>([])
  const lsPrograms = useAppSelector(selectPrograms)
  let itemsList = useAppSelector(selectItems)
  const [timeStamp] = useState<number>(new Date().getTime());
  const [step, setStep] = useState<number>(0);
  const [correct, setCorrect] = useState<boolean>(false);
  const [userData, setUserData] = useState<any[]>([]);
  const [appear, setAppear] = useState<any[]>([]);
  const [mistake, setMistake] = useState<boolean>(false);
  const [mistakeNum, setMistakeNum] = useState<string>("0");
  const [help, setHelp] = useState<boolean>(false);
  const [aud, setAud] = useState<boolean>(false);
  // const [nav, setNav] = useState<boolean>(false);
  const [upload, setUpload] = useState<boolean>(true);
  const [media, setMedia] = useState<any>();
  const [pointer, setPointer] = useState<boolean>(false);
  const [voice, setVoice] = useState<boolean>(true);
  const [showNumber, setShowNumber] = useState<number>(0);
  const [correctStep, setCorrectStep] = useState<number>(0);
  const buttons = useAppSelector(selectButtons)
  const lsUser = useAppSelector(selectUser)

      const resize = () => {
        
        var w=((window.innerWidth > 0) ? window.innerWidth : window.screen.width)
        var h=((window.innerHeight > 0) ? window.innerHeight : window.screen.height)
        const ratio=w/h
        if(ratio>=2.1 && ratio<=2.3) {  //landscape screen
          setHeight(h) 
          setWidth(w)     
        }
        if(ratio<2.1) { //pillar screen
          setHeight(Math.floor(w/2.2)) 
          setWidth(w)     
        }
        if(ratio>2.3) {  //very long landscape
          setHeight(h) 
          setWidth(h)     
        } 
    }    
    window.onresize = resize;
    
    useEffect(() => {
      
      if(!width && !height){
        const initWidth=((window.innerWidth > 0) ? window.innerWidth : window.screen.width)
        const initHeight=((window.innerHeight > 0) ? window.innerHeight : window.screen.height)
          setWidth(initWidth)
          setHeight(initHeight)
          resize()
      }
      }, [width,height])
      
  Hub.listen('auth', (data) => {
    if(!show && data.payload.event==="signedIn") {
      setShow(true) 
    }
    if(!show && data.payload.event==="signedOut") {
      setShow(false) 
    }
  });

  const maxStep=pageItems? Math.max.apply(Math, pageItems.map(function (i) {return i.step;})):""
  window.onclick = function() {if(!audio){dispatch(setAudio(true))}}  
  
  //DB connections: 
  //step 0 - List (current user and program) question items (show some default until loading)
  //step final - Define next question (function or AI)  
  //             Create new userData
  //             Update user (current userProgram status - next question)
  //Remove items and return to step 0 

  useEffect(() => {
    const prog=lsPrograms.find((program)=>program.programName===PROGRAMS[0])
    if(prog) {
      const sub=client.models.UserProgram.onUpdate({ filter: {  email: { eq: prog.email, }, },})
      .subscribe({ next: (data) => { (async () => {
            let quests:string[]=[]
            if (data?.nextQuestion) {
              quests=JSON.parse(data?.nextQuestion?.toString()).questions
              dispatch(setItemsAsync(quests[Math.floor(Math.random() * quests.length)]))
          } })() },
        error: (error) => console.warn(error),
      });return () => sub.unsubscribe();
    }
    }, [])

    useEffect(() => {
      if(itemsList) {
        const pi:any[]=[]
        for (let index = 0; index < itemsList.length; index++) {
          pi.push({id: itemsList[index].itemId, questionId: itemsList[index].questionId, 
            lineNumber: itemsList[index].itemNumber, lineType: itemsList[index].itemType, step: itemsList[index].step,
            picWidth: itemsList[index].itemSize[0].toString(), picLength: itemsList[index].itemSize[1].toString(), 
            picPositionX: itemsList[index].itemPosition[0].toString(), picPositionY: itemsList[index].itemPosition[1].toString(),
            condition: itemsList[index].itemCondition[0], continueTo: itemsList[index].itemCondition[1],
            loop: itemsList[index].loop, animationName: itemsList[index].animationName, autoplay: itemsList[index].autoplay,
            isAudioPlay: itemsList[index].isAudioPlay, isAudioHoover: itemsList[index].isAudioHoover, isAudioClick: itemsList[index].isAudioClick,
            audioData: itemsList[index].audioData, segments: JSON.stringify(itemsList[index].segments)
          });
        }
        var sortedArray: { lineNumber: string; }[] = pi.sort((n1,n2) => {
          if (Number(n1.lineNumber) > Number(n2.lineNumber)) {return 1; }
          if (Number(n1.lineNumber) < Number(n2.lineNumber)) {return -1;}
          return 0;
      });
        setPageItems(sortedArray)  
      }
    }, [itemsList])

    const checkForPointer: Array<any> | string = pageItems?pageItems
      .filter(item => item.itemType === "pointer")
      .map(item => item):"";
    const checkForStopPointer: Array<any> | string = pageItems?pageItems
      .filter(item => item.itemType === "stopPointer")
      .map(item => item.step):"";
    //console.log(checkForPointer, checkForStopPointer,maxStep)
  
    async function setURLs() {
      const media = await getUrl({path:`public/media/audio/BackgroundSong.mp3`})
      setMedia(media.url.toString());
    }

    useEffect(() => {
      const pos = buttons.map((button: { btnname: any; }) => button.btnname).indexOf("logo")
      if(step===0 && buttons && buttons[pos]?.condition==="complete"){
          setURLs()
          setStep(1)   
      } 
      if (step===1 && buttons && buttons[pos].condition==="complete") {
          dispatch(setButton({btnname:"logo", condition:"on"}));
      }
   }, [dispatch, buttons, step])

   function Calculate(){
    let correctNum:number=0
    let mistakeNum:number=0
    let helpNum:number=0
    const helpValue:number=0.5
    for (let index = 0; index < userData.length; index++) {
        const element = userData[index][0];
        if(element==="correct"){correctNum+=1}
        if(element==="mistake"){mistakeNum+=1}
        if(element==="help"){helpNum+=1}
    }
    const precent = correctNum? 
        correctNum/(correctNum+mistakeNum+helpNum*helpValue)*100: 100
    setUserData([])
    return precent
}

useEffect(() => {
  if (step===Number(maxStep)+1) {
      setStep(0)
      setAppear([])
      Howler.unload()
      //Create userData, Update userProgram, get new Items
      const prog=lsPrograms.find((program)=>program.programName===PROGRAMS[0])
      const curStatus=prog?.currentStatus?.toString();
      const currentQuestion=prog?.nextQuestion?.toString();
      let maxIndex:number=1
      let currentIndex:number=1
      let nextIndex:number=1
      if(curStatus) maxIndex=JSON.parse(curStatus).userIndex
      if(currentQuestion) {
        currentIndex= JSON.parse(currentQuestion).userIndex
        nextIndex=currentIndex+1
      }
      const chpatersStartIndexes=CHAPTERS.filter((chapter)=>Number(chapter.chapterIndex)%1000000===0).map((chapter)=>chapter.userIndex)
      const precent:number=Calculate()
      const progIndex=lsPrograms.findIndex((program)=>program.programName===PROGRAMS[0])
      let treasure:number=Math.floor(Number(lsPrograms[progIndex].treasure))
      const chapAve:number=Math.floor(Number(lsPrograms[progIndex].chapterAverage))
      const chapterCount=Math.min(...chpatersStartIndexes.map((value)=> currentIndex - value).map((value)=>value<0? 100:value))
      let newChapterAve:number=chapAve 
      if(nextIndex>maxIndex) { 
        //console.log(chapterCount,chapAve,precent,(chapAve*chapterCount+precent)/(chapterCount+1) )
        newChapterAve=(chapAve*chapterCount+precent)/(chapterCount+1) 
      }
      if(nextIndex>CHAPTERS.length) nextIndex=chpatersStartIndexes[chpatersStartIndexes.length-1] //end  of program case
      if(chpatersStartIndexes.includes(nextIndex)) { //end of chapter case
        treasure+=Math.floor(newChapterAve/10)
        newChapterAve=0
      }
      if(prog) {
      (async () => { 
        const maxChapter=CHAPTERS[nextIndex>maxIndex?nextIndex-1:maxIndex-1] 
        const nextQuests=CHAPTERS[nextIndex-1]
        updateUserData([lsUser.id, pageItems[0].questionId,JSON.stringify(maxChapter), JSON.stringify(nextQuests)],userData, precent)
      updateUserPrograms([prog.userProgramId, JSON.stringify(maxChapter), JSON.stringify(nextQuests),treasure.toString(),
                  newChapterAve.toString()]) //[userProgramId,maxChpater,askedChapterIndex]
        //SetPrograms localy!!!
        //console.log("precent",precent)
        const progs:any=[]
        for (let i = 0; i < lsPrograms.length; i++) {
          progs[i]=
          {
            userProgramId: lsPrograms[i].userProgramId,
            programName: lsPrograms[i].programName,
            email: lsPrograms[i].email,
            isOpen: lsPrograms[i].isOpen,
            expiredAt: lsPrograms[i].expiredAt,
            treasure: treasure,
            chapterAverage: newChapterAve,
            currentStatus: i===progIndex?JSON.stringify(maxChapter):lsPrograms[i].currentStatus,
            nextQuestion: i===progIndex?JSON.stringify(nextQuests):lsPrograms[i].currentStatus,
          } 
        }
        dispatch(setPrograms(progs))
        const quests=nextQuests.questions      //questions in the chapter object  
        dispatch(setItemsAsync(quests[Math.floor(Math.random() * quests.length)]))
        })() 
      }
  }
}, [dispatch,maxStep, pageItems, step, userData,Howler])

useEffect(() => {
  if(step && step > 0 && pageItems) {
      const getComplete=buttons ? Object.values(buttons)
      .find(item => item.condition === "complete"): null
      if(getComplete && getComplete.btnname!=="logo"){
          const item =pageItems? pageItems
            .filter(item => 
                item.animationName===getComplete.btnname)
                .map(item=>item)[0]
            : ""
          if(item && item.lineType==="video" && getComplete.condition==="complete"){
              dispatch(setButton({btnname:item.animationName, condition:"off"}))
              let currTime=new Date()
              setUserData(oldArray => [...oldArray, ["video","complete",currTime.getTime()-timeStamp]])
              setStep(step+1)
          } 
          if(item && item.lineType==="show" && getComplete.condition==="complete"){
              dispatch(setButton({btnname:item.animationName, condition:"off"}))
              let currTime=new Date()
              setUserData(oldArray => [...oldArray, ["show","complete",currTime.getTime()-timeStamp]])
              setShowNumber(0)
          } 
          if(item && item.lineType==="audio" && getComplete.condition==="complete"){
            dispatch(setButton({btnname:item.animationName, condition:"off"}))
            setStep(step+1)
          } 
          if(item && item.lineType==="voiceover" && getComplete.condition==="complete"){
            dispatch(setButton({btnname:item.animationName, condition:"off"}))
            setVoice(false)
          } 
          if(item && item.lineType==="correct" && getComplete.condition==="complete" && correct){
              setCorrect(false)
              Promise.resolve().then(() => 
                  flushSync(() => {
                      if(step<correctStep) setStep(step+1)
                      setUpload(true)  
                      setMistakeNum("0")         
                      dispatch(setButton({btnname:item.animationName, condition:"on"}))
                    })
              );
          }
          if(item && item.lineType==="mistake" && getComplete.condition==="complete"){
              Promise.resolve().then(() => 
                  flushSync(() => {
                      setMistake(false)         
                      dispatch(setButton({btnname:item.animationName, condition:"on"}))
                    })
              );
          }  
          if(item && item.lineType==="help" && getComplete.condition==="complete"){
              Promise.resolve().then(() => 
                  flushSync(() => {
                      setHelp(false)  
                      dispatch(setButton({btnname:item.animationName, condition:"on"}))
                 })
              );   
          } 
          }
  }
}, [dispatch,timeStamp,buttons,step,correct,correctStep,help,mistake,userData,pageItems, maxStep])

useEffect(() => {
  if(Object.keys(checkForPointer).length > 0 && !help && !mistake && !correct 
      && !checkForStopPointer.includes(step.toString())) 
      {setPointer(true) }
  else { setPointer(false)       }
}, [checkForPointer,checkForStopPointer,step,pointer,help ,mistake ,correct]) 

const clickHandler = (ans:string,data:string) => {
  let currTime=new Date()
  let answer=ans.split("_")[0] //get the answer without the mistake number
  setUserData(oldArray => [...oldArray, [answer,data,currTime.getTime()-timeStamp]])
  //console.log(ans,data,userData)
  if(answer==="correct") {
      //console.log("step,max",step,maxStep)
       setCorrectStep(step+1)
       if(Number(step)<=Number(maxStep)) {setCorrect(true)}
       else {
          setStep(step+1)
          setUpload(true)
       }
  }
  if(answer==="mistake") {
      if(Number(step)<Number(maxStep)) {setMistake(true)}
      let arrSize=ans.split("_").length-1//get the answer array size for # of possible mistakes
      if(arrSize===0) {setMistakeNum("1")}//Set the Mistake number
      if(arrSize===1) {setMistakeNum(ans.split("_")[1])}
      if(arrSize>1 && mistakeNum==="0") { setMistakeNum(ans.split("_")[1])}
      if(arrSize>1 && mistakeNum!=="0") { 
          if(!ans.split("_").includes(mistakeNum)){
              //console.log("misnum",mistakeNum)
              setMistakeNum(ans.split("_")[2])
          }
          else{
              const ind=ans.split("_").indexOf(mistakeNum)
              //console.log("ind",ind)
              if(ind===arrSize) {setMistakeNum(ans.split("_")[2])}
              else {setMistakeNum(ans.split("_")[ind+1])}
          }
      }
  }
  if(answer==="help") {
      if(Number(step)<Number(maxStep)) {setHelp(true)}
  }
  if(answer==="find" || answer==="movingbtn") {
      let app=appear
      if(!app.includes("Line"+ans.split("_")[1]))
      {
          app.push("Line"+ans.split("_")[1])
          setAppear(app)
          clickHandler("appear",data)
      }
  }        
  if(answer==="appear") {
      let numberOfAppear=Object.values(pageItems
      .filter(item => item.continueTo === "appear"))
      if(numberOfAppear.length===appear.length) {
          clickHandler("correct",data)
      }
  }
  if(answer==="show") {
      setShowNumber(Number(ans.split("_")[1]))
  }
  if(answer==="BtnBack") {
      Howler.unload(); 
      navigate("/CourseMap1");
  }
  if(answer==="Background") {
      setAud(!aud)
      if(!aud) {playBackground()}
      if(aud) {Howler.unload()}
  }
  if(ans==="Repeat") {
      setStep(0)
  }
  if(ans==="moveToEnd") {
    setStep(Number(maxStep)+1)
}
}

const playBackground = () => {
  const pS = new Howl({
      src: [media],
      html5: true,
      preload: true,
  });
  if(!aud) {
      pS.play()
      pS.on('end', function(){
          setAud(false)
      });
      }
  if(aud) {console.log("")}//Howler.unload()}
}


const dragHandler = (e:any,name:string) => {
  if(width && height) {const d={e}
  const dist=50 //distance to drag place
  const items=pageItems? pageItems.filter(item =>  item.lineType==="dragBusket"): ""
  const dragItem=pageItems? pageItems.find(item =>  item.animationName===name): ""
  //calculate distance to all dragBaskets
  const drugPosition=[d.e.screenX-d.e.offsetX+dragItem.picWidth/200*width,
                      d.e.y-d.e.offsetY+dragItem.picLength/200*width]
  for (let i = 0; i < items.length; i++) {
      const item = items[i];  
      const basketPosition=
      [(1-(Number(item.picPositionX)+Number(item.picWidth)/2)/100)*width,
          (Number(item.picPositionY)+Number(item.picLength)/2)/100*height]
      const xDist=drugPosition[0]-basketPosition[0]
      const yDist=drugPosition[1]-basketPosition[1]
      const distance=Math.sqrt(xDist*xDist+yDist*yDist)
      if(distance<dist && item.continueTo==="correct") {clickHandler(item.continueTo,item.animationName)}
      if(distance<dist && item.continueTo.split("_")[0]==="mistake") {clickHandler(item.continueTo,item.animationName)}
  }
}}

  return (
    <Authenticator components={components}>
      {({user }) => (
        <Flex direction={"column"} className="rotated homePage"  width={width} height={height }>
          <AuthUtils email={user?.signInDetails?.loginId} user={user?.userId}/>
          {step===0 && 
            <div className='hp-button' style={{width: "30%", height: "30%", right: "40%", top: "5%"}}>
                <div className='lottieButton'>
                    <ZipLottieSound loop={false} autoplay={true} data={"logo"} 
                    isAudio={[buttons.find(btn=>btn.btnname==="logo")?.condition==="on",false,false]} 
                    segments={[0,150,0,150,0,150]} name={"logo"} 
                    audioData={"logo"}/>
                </div>   
            </div>
        }

{(pageItems && width && height)?  Object.values(pageItems).map(pageItem => (
            pageItem.step===step && 
            pageItem.lineType==="bg"? 
            <div key={pageItem.id} className='hp-button' style={{width: pageItem.picWidth+"%", 
                height: pageItem.picLength+"%", right: pageItem.picPositionX+"%", 
                top: pageItem.picPositionY+"%"}}> 
                <div style={{backgroundColor:'transparent'}} className={pointer?'lottieButton2':'lottieButton'}>
                    <ZipLottieSound loop={pageItem.loop} autoplay={pageItem.autoplay} data={pageItem.animationName} 
                    isAudio={[pageItem.isAudioPlay,pageItem.isAudioHoover,pageItem.isAudioClick]} 
                    segments={JSON.parse(pageItem.segments)} 
                    name={pageItem.animationName} 
                    audioData={pageItem.audioData!==""?pageItem.audioData:pageItem.animationName}/>
                </div>   
            </div> :  pageItem.step===step && 
            pageItem.lineType==="appear" &&
            appear.find(element => element === pageItem.continueTo) ? 
            <div key={pageItem.id} className='hp-button' style={{width: pageItem.picWidth+"%", 
                height: pageItem.picLength+"%", right: pageItem.picPositionX+"%", 
                top: pageItem.picPositionY+"%"}}> 
                <div style={{backgroundColor:'transparent'}} className={pointer?'lottieButton2':'lottieButton'}>
                    <ZipLottieSound loop={pageItem.loop} autoplay={pageItem.autoplay} data={pageItem.animationName} 
                    isAudio={[pageItem.isAudioPlay,pageItem.isAudioHoover,pageItem.isAudioClick]} 
                    segments={JSON.parse(pageItem.segments)} 
                    name={pageItem.animationName} 
                    audioData={pageItem.audioData!==""?pageItem.audioData:pageItem.animationName}/>
                </div>   
            </div> : pageItem.step===step && 
            pageItem.lineType==="dragBusket"? 
            <div key={pageItem.id} className='hp-button' style={{width: pageItem.picWidth+"%", 
                height: pageItem.picLength+"%", right: pageItem.picPositionX+"%", 
                top: pageItem.picPositionY+"%"}}> 
                <div style={{backgroundColor:'transparent'}} className={pointer?'lottieButton2':'lottieButton'}>
                    <ZipLottieSound loop={pageItem.loop} autoplay={pageItem.autoplay} data={pageItem.animationName} 
                    isAudio={[pageItem.isAudioPlay,pageItem.isAudioHoover,pageItem.isAudioClick]} 
                    segments={JSON.parse(pageItem.segments)} 
                    name={pageItem.animationName} 
                    audioData={pageItem.audioData!==""?pageItem.audioData:pageItem.animationName}/>
                </div>   
            </div> : Number(pageItem.step)===step &&
            pageItem.lineType==="video" ?
            <div key={pageItem.id} className='hp-button' style={{width: pageItem.picWidth+"%", 
            height: pageItem.picLength+"%", right: pageItem.picPositionX+"%", 
            top: pageItem.picPositionY+"%"}}> 
                <div style={{backgroundColor:'transparent'}} className={pointer?'lottieButton2':'lottieButton'}>
                <VideoPlayer
                    videoData={pageItem.animationName} 
                    w={width*Number(pageItem.picWidth)/100} 
                    h={height*Number(pageItem.picLength)/100}/> 
                </div> 
            </div> : pageItem.step===step && showNumber===pageItem.continueTo &&
            pageItem.lineType==="show" ?
            <div key={pageItem.id} className='hp-button' style={{width: pageItem.picWidth+"%", 
            height: pageItem.picLength+"%", right: pageItem.picPositionX+"%", 
            top: pageItem.picPositionY+"%"}}>
                <div style={{backgroundColor:'transparent'}}>
                <VideoPlayer
                    videoData={pageItem.animationName} 
                    w={width*Number(pageItem.picWidth)/100} 
                    h={height*Number(pageItem.picLength)/100}/> 
                </div> 
            </div> : pageItem.step===step &&
            pageItem.lineType==="btn" ?
            <div key={pageItem.id} className='hp-button' style={{width: pageItem.picWidth+"%", 
            height: pageItem.picLength+"%", right: pageItem.picPositionX+"%", 
            top: pageItem.picPositionY+"%"}} 
                hidden={help && pageItem.continueTo==="help"}> 
                <Button backgroundColor="transparent" className={pointer?'lottieButton2':'lottieButton'} hidden={upload}
                        onClick={()=>clickHandler(pageItem.continueTo,pageItem.animationName) }>
                    <ZipLottieBTN loop={pageItem.loop} autoplay={pageItem.autoplay} data={pageItem.animationName} 
                    isAudio={[pageItem.isAudioPlay,pageItem.isAudioHoover,pageItem.isAudioClick]} 
                    segments={JSON.parse(pageItem.segments)} 
                    name={pageItem.animationName} 
                    audioData={pageItem.audioData!==""?pageItem.audioData:pageItem.animationName}/>
                </Button>   
            </div> :          
            pageItem.step===step &&
            pageItem.lineType==="movingbtn" ?
            <div key={pageItem.id} 
            hidden={appear.find(element => element === "Line"+pageItem.lineNumber)}> 
                <MovingBtn pageItem={pageItem} w={width} onClick={clickHandler}></MovingBtn>
            </div> :
            pageItem.step===step &&
            pageItem.lineType==="movingfind" ?
            <div key={pageItem.id} 
            hidden={appear.find(element => element === "Line"+pageItem.lineNumber)}> 
                <MovingFind pageItem={pageItem} w={width} onClick={clickHandler}></MovingFind>
            </div> :
             pageItem.step===step &&
            pageItem.lineType==="find" ?
            <div key={pageItem.id} className='hp-button' style={{width: pageItem.picWidth+"%", 
            height: pageItem.picLength+"%", right: pageItem.picPositionX+"%", 
            top: pageItem.picPositionY+"%"}}  
                hidden={appear.find(element => element === "Line"+pageItem.lineNumber)}> 
                <Button backgroundColor="transparent" className={pointer?'lottieButton2':'lottieButton'} hidden={upload}
                        onClick={()=>clickHandler("find_"+pageItem.lineNumber,pageItem.animationName) }>
                    <ZipLottieBTN loop={pageItem.loop} autoplay={pageItem.autoplay} data={pageItem.animationName} 
                    isAudio={[pageItem.isAudioPlay,pageItem.isAudioHoover,pageItem.isAudioClick]} 
                    segments={JSON.parse(pageItem.segments)} 
                    name={pageItem.animationName} 
                    audioData={pageItem.audioData!==""?pageItem.audioData:pageItem.animationName}/>
                </Button>   
            </div>  : pageItem.step===step &&
            pageItem.lineType==="match" ?
            <div key={pageItem.id} className='hp-button' style={{width: pageItem.picWidth+"%", 
            height: pageItem.picLength+"%", right: pageItem.picPositionX+"%", 
            top: pageItem.picPositionY+"%"}}> 
                <Button backgroundColor="transparent" className={pointer?'lottieButton2':'lottieButton'} hidden={upload}
                        onClick={()=>clickHandler( 
                            isNaN(Number(pageItem.continueTo))? "find_"+pageItem.lineNumber: "find_"+pageItem.continueTo,
                            pageItem.animationName) }>
                    <ZipLottieBTN loop={pageItem.loop} autoplay={pageItem.autoplay} data={pageItem.animationName} 
                    isAudio={[pageItem.isAudioPlay,pageItem.isAudioHoover,pageItem.isAudioClick]} 
                    segments={JSON.parse(pageItem.segments)} 
                    name={pageItem.animationName} 
                    audioData={pageItem.audioData!==""?pageItem.audioData:pageItem.animationName}/>
                </Button>   
            </div> : pageItem.step===step &&
            pageItem.lineType==="dragToPosition" ?
            <div key={pageItem.id} className='hp-button' style={{width: pageItem.picWidth+"%", 
            height: pageItem.picLength+"%", right: pageItem.picPositionX+"%", 
            top: pageItem.picPositionY+"%"}}> 
            <Draggable onStop={(e:any)=>dragHandler(e,pageItem.animationName)}>
                <div style={{backgroundColor:'transparent'}} className={pointer?'lottieButton2':'lottieButton'}>
                    <ZipLottieSound loop={pageItem.loop} autoplay={pageItem.autoplay} data={pageItem.animationName} 
                    isAudio={[pageItem.isAudioPlay,pageItem.isAudioHoover,pageItem.isAudioClick]} 
                    segments={JSON.parse(pageItem.segments)} 
                    name={pageItem.animationName} 
                    audioData={pageItem.audioData!==""?pageItem.audioData:pageItem.animationName}/>
                </div> 
            </Draggable>  
            </div>  : pageItem.lineType==="pointer" && pointer? 
            <div key={pageItem.id}> 
                <Cursor pageItem={pageItem} w={width} onClick={clickHandler}></Cursor>
            </div>  : pageItem.step===step && correct &&
            pageItem.lineType==="correct" ?
            <div key={pageItem.id} className='hp-button' style={{width: pageItem.picWidth+"%", 
            height: pageItem.picLength+"%", right: pageItem.picPositionX+"%", 
            top: pageItem.picPositionY+"%"}}>
                <div style={{backgroundColor:'transparent'}}  className={pointer?'lottieButton2':'lottieButton'}>
                    <ZipLottieSound loop={pageItem.loop} autoplay={pageItem.autoplay} data={pageItem.animationName} 
                    isAudio={[buttons.find(btn=>btn.btnname===pageItem.animationName)?.condition==="on",pageItem.isAudioHoover,pageItem.isAudioClick]} 
                    segments={JSON.parse(pageItem.segments)} 
                    name={pageItem.animationName} 
                    audioData={pageItem.audioData!==""?pageItem.audioData:pageItem.animationName}/>
                </div>   
            </div>  : pageItem.step===step && mistake &&
            pageItem.lineType==="mistake" && pageItem.continueTo===mistakeNum ?
            <div key={pageItem.id} className='hp-button' style={{width: pageItem.picWidth+"%", 
            height: pageItem.picLength+"%", right: pageItem.picPositionX+"%", 
            top: pageItem.picPositionY+"%"}}>
                <div style={{backgroundColor:'transparent'}}  className={pointer?'lottieButton2':'lottieButton'}>
                    <ZipLottieSound loop={pageItem.loop} autoplay={pageItem.autoplay} data={pageItem.animationName} 
                    isAudio={[buttons.find(btn=>btn.btnname===pageItem.animationName)?.condition==="on",pageItem.isAudioHoover,pageItem.isAudioClick]} 
                    segments={JSON.parse(pageItem.segments)} 
                    name={pageItem.animationName} 
                    audioData={pageItem.audioData!==""?pageItem.audioData:pageItem.animationName}/>
                </div>   
            </div>  : pageItem.step===step && help &&
            pageItem.lineType==="help" ?
            <div key={pageItem.id} className='hp-button' style={{width: pageItem.picWidth+"%", 
            height: pageItem.picLength+"%", right: pageItem.picPositionX+"%", 
            top: pageItem.picPositionY+"%"}}>
                <div style={{backgroundColor:'transparent'}}  className={pointer?'lottieButton2':'lottieButton'}>
                    <ZipLottieSound loop={pageItem.loop} autoplay={pageItem.autoplay} data={pageItem.animationName} 
                    isAudio={[buttons.find(btn=>btn.btnname===pageItem.animationName)?.condition==="on",pageItem.isAudioHoover,pageItem.isAudioClick]} 
                    segments={JSON.parse(pageItem.segments)} 
                    name={pageItem.animationName} 
                    audioData={pageItem.audioData!==""?pageItem.audioData:pageItem.animationName}/>
                </div>   
            </div>  : pageItem.step===step && 
            pageItem.lineType==="audio" ?
            <div key={pageItem.id} className='hp-button' style={{width: pageItem.picWidth+"%", 
            height: pageItem.picLength+"%", right: pageItem.picPositionX+"%", 
            top: pageItem.picPositionY+"%"}}>
                <div style={{backgroundColor:'transparent'}} className={pointer?'lottieButton2':'lottieButton'}> 
                    <ZipLottieSound loop={pageItem.loop} autoplay={pageItem.autoplay} data={pageItem.animationName} 
                    isAudio={[buttons.find(btn=>btn.btnname===pageItem.animationName)?.condition==="on",pageItem.isAudioHoover,pageItem.isAudioClick]} 
                    segments={JSON.parse(pageItem.segments)} 
                    name={pageItem.animationName} 
                    audioData={pageItem.audioData!==""?pageItem.audioData:pageItem.animationName}/>
                </div>   
            </div> : pageItem.step===step && 
            pageItem.lineType==="voiceover" &&
            <div key={pageItem.id} className='hp-button' style={{width: pageItem.picWidth+"%", 
            height: pageItem.picLength+"%", right: pageItem.picPositionX+"%", 
            top: pageItem.picPositionY+"%"}}
            hidden={!voice}> 
                <div style={{backgroundColor:'transparent'}} className={pointer?'lottieButton2':'lottieButton'}> 
                    <ZipLottieSound loop={pageItem.loop} autoplay={pageItem.autoplay} data={pageItem.animationName} 
                    isAudio={[buttons.find(btn=>btn.btnname===pageItem.animationName)?.condition==="on",pageItem.isAudioHoover,pageItem.isAudioClick]} 
                    segments={JSON.parse(pageItem.segments)} 
                    name={pageItem.animationName} 
                    audioData={pageItem.audioData!==""?pageItem.audioData:pageItem.animationName}/>
                </div>   
            </div>            
            )): ""
        }
        {step!==0 &&
        <div>
            <div className='hp-button' style={{width: "10%", height: "10%", right: "85%", top: "75%"}}>
                <Button backgroundColor="transparent" className='lottieButton' onClick={()=>clickHandler("BtnBack","BtnBack")}>
                    <ZipLottieBTN loop={true} autoplay={true} data="BtnBack2" name="BtnBack2"
                    isAudio={[false,false,false]} segments={[0,90,0,90,0,90]}
                    audioData="BtnBack"/>
                </Button> 
            </div>  
            <div className='hp-button' style={{width: "10%", height: "10%", right: "0%", top: "0%"}}>
                <Button backgroundColor="transparent" className='lottieButton' onClick={()=>clickHandler("Background","Background")}>
                    {aud &&
                    <ZipLottieBTN loop={true} autoplay={true} data="audioOn" name="audioOn4"
                    isAudio={[false,false,false]} segments={[0,20,0,20,0,20]}/>
                    }
                    {!aud &&
                    <ZipLottieBTN loop={false} autoplay={true} data="audioOff" name="audioOff4"
                    isAudio={[false,false,false]} segments={[0,1,0,1,0,1]}/>
                    }
                </Button> 
            </div> 
        </div>  
        }
        {/* <button onClick={()=>clickHandler("moveToEnd","moveToEnd")}>moveToEnd</button>  */}


      </Flex>
      )}
    </Authenticator>
  );
}

export default QuestionScreen