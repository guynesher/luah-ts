import { Authenticator, Button, Flex, Image } from '@aws-amplify/ui-react';
import { useAppDispatch, useAppSelector } from "../store/hooks"
import {components} from '../services/components'
import { useEffect,  useState} from 'react';
import { Hub } from 'aws-amplify/utils';
import { useNavigate } from 'react-router-dom';
import { selectAudio, setAudio } from '../reducers/misSlice';
import { AuthUtils } from '../components/AuthUtils';
import { selectPrograms } from '../reducers/userSlice';
import { PROGRAMS } from '../constants/userConstants';
import LocalLottie from '../components/localLottie';
import { CHAPTERS } from '../constants/program0101';
import getFromRestAPI from '../actions/usersActions';

function Map1() {
  const dispatch = useAppDispatch()
  const[show,setShow]=useState(false)
  const navigate=useNavigate()
  const audio = useAppSelector(selectAudio)
  const [width, setWidth] = useState(1100)
  const [height, setHeight] = useState(800)
  const [pageItems,setPageItems]=useState<any[]>([])
  const lsPrograms = useAppSelector(selectPrograms)

      const initWidth=((window.innerWidth > 0) ? window.innerWidth : window.screen.width)
      const initHeight=((window.innerHeight > 0) ? window.innerHeight : window.screen.height)
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
      setWidth(initWidth)
      setHeight(initHeight)
    }, [initWidth,initHeight])
      
  Hub.listen('auth', (data) => {
    if(!show && data.payload.event==="signedIn") {
      setShow(true) 
    }
    if(!show && data.payload.event==="signedOut") {
      setShow(false) 
    }
  });

  window.onclick = function() {if(!audio){dispatch(setAudio(true))}}  
  
  //DB connections: 
  //Listen to current user changes + get user

  useEffect(() => {
    if(Object.keys(pageItems).length === 0 && lsPrograms) {   
    let maxLevel:number=1;
    if(lsPrograms[0].programName===PROGRAMS[0]) 
      maxLevel=JSON.parse(lsPrograms[0].currentStatus?.toString()).chapterDetails.level
    if(lsPrograms[1].programName===PROGRAMS[1]) 
      maxLevel=JSON.parse(lsPrograms[1].currentStatus?.toString()).chapterDetails.level    
    if (JSON.parse(lsPrograms[0].currentStatus?.toString())) {
                let newPageItems:any=[]
                let posX=""
                let posY=""
                for (let index = 0; index < 15; index++) {
                    //position by index
                    posX=(5+(index%4)*15).toString()+"%"
                    posY=(30+Math.floor(index/4)*15).toString()+"%"
                    const newName=(index+1)>=10?(index+1).toString():"0"+(index+1).toString()
                    if(index+1<=maxLevel)
                    {   newPageItems=[...newPageItems,
    [1, 1, Number(newName),"btn", [["15%","15%",posX,posY],[]], "Levels0101-"+newName, [true,true,"Level0101-"+newName,[false,false,false],[0,55,0,55,0,55],""]],
                        ]
                    }    
                    else {  newPageItems=[...newPageItems,
    [1, 1, Number(newName),"btn", [["15%","15%",posX,posY],[]], "NotOpen", [true,true,"Level0101-"+newName,[false,false,false],[59,60,59,60,59,60],""]],
                        ]
                    }  
                }
                setPageItems([
                  [1, 1, 101,"btn", [["12%","12%","0%","0%"],[]], "BtnChangeUser", [true,true,"BtnChangeUser",[false,true,false],[0,25,50,121,0,121],""]],
                  [1, 1, 102,"btn", [["50%","50%","30%","0%"],[]], "luach", [true,true,"luach",[false,true,false],[0,29,30,115,0,29],""]],
                  [1, 1, 103,"btn", [["12%","12%","83%","1%"],[]], "BtnHP", [true,true,"BtnHP",[false,true,false],[39,40,0,40,0,1],""]],
                  [1, 1, 104,"btn", [["12%","12%","83%","26%"],[]], "BtnTreasure", [true,true,"BtnTreasure",[false,true,false],[0,120,0,120,0,120],""]],
                  [1, 1, 105,"btn", [["12%","12%","83%","55%"],[]], "BtnShirTochnit", [true,true,"BtnShirTochnit",[false,true,false],[0,120,0,120,0,120],"Song0101"]],
                ,...newPageItems])
        }
      }       
}, [lsPrograms,pageItems])

const clickHandler = (ans:string,data:string) => {
    if(data==="BtnHP" || data==="BtnChangeUser") {navigate('/Courses')}
    if(data==="BtnTreasure") {navigate('/ShopScreen')}
    if(data==="BtnShirTochnit") {navigate('/ShirScreen')}
    if(Number(ans)>=1) {
      //Update userProgram --> current question = Chapter[0]
      const prog=lsPrograms.find((program)=>program.programName===PROGRAMS[0])
      const curStatus=prog?.currentStatus?.toString();
      let userIndex:number=1
      let userLevel:number=1
      if(curStatus) {
        userIndex=JSON.parse(curStatus).userIndex
        userLevel=JSON.parse(curStatus)?.chapterDetails?.level
      }
      const chpaterStartIndex=CHAPTERS.filter((chapter)=>Number(chapter.chapterIndex)===Number(ans)*1000000).map((chapter)=>chapter.userIndex)[0]
      const lvl=CHAPTERS.filter((chapter)=>Number(chapter.chapterIndex)===Number(ans)*1000000).map((chapter)=>chapter.chapterDetails?.level)[0]
      console.log(userIndex,chpaterStartIndex,prog)
      if(userIndex>=chpaterStartIndex && prog) {
        (async () => { 
          console.log(await getFromRestAPI(["updateUserPrograms",
            prog.userProgramId, (userIndex-1).toString(), //[userProgramId,maxChpaterIndex,
          (userLevel!==lvl)?(chpaterStartIndex-1).toString():(userIndex-1).toString(),""
          ]))
          })()
        
        // (async () => { 
        // console.log(
        //   updateUserPrograms([prog.userProgramId, (userIndex-1).toString(), //[userProgramId,maxChpaterIndex,
        //   (userLevel!==lvl)?(chpaterStartIndex-1).toString():(userIndex-1).toString(),""]) //askedChapterIndex,data]
        // ) 
        //})() 
                  //if it is not the current level continue to the first chapter at the requested level
        //navigate('/Question')
      }
    }
  }
  
  return (
    <Authenticator components={components}>
      {({user }) => (
        <Flex direction={"column"} className="rotated"  width={width} height={height }>
          <AuthUtils email={user?.signInDetails?.loginId} user={user?.userId}/>
            <Image
              alt="bg"
              src="/homebg.png"
              height={height}
              width={width}
              />
            {pageItems?  Object.values(pageItems).map(pageItem => (  
            pageItem[1]===1 && 
            pageItem[3]==="btn" && //pageItem[2]<102 &&
            <div key={pageItem[2]} className='hp-button' style={{width: pageItem[4][0][0], 
                height: pageItem[4][0][1], right: pageItem[4][0][2], 
                top: pageItem[4][0][3]}} >
                <Button backgroundColor="transparent" className='lottieButton' key={pageItem[2]}
                        onClick={()=>clickHandler(pageItem[2],pageItem[6][2]) }>
                    <LocalLottie loop={pageItem[6][0]} autoplay={pageItem[6][1]} data={pageItem[6][2]} 
                    isAudio={pageItem[6][3]} segments={pageItem[6][4]} name={pageItem[6][2]} 
                    audioData={pageItem[6][5]!==""?pageItem[6][5]:pageItem[6][2]}/>
                </Button>   
            </div>               
            )): ""
        }
        </Flex>
      )}
    </Authenticator>
  );
}

export default Map1