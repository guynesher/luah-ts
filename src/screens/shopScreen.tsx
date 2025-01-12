import { Authenticator, Button, Flex, Image } from '@aws-amplify/ui-react';
import { useAppDispatch, useAppSelector } from "../store/hooks"
import {components} from '../services/components'
import { useEffect,  useState} from 'react';
import { Hub } from 'aws-amplify/utils';
import { useNavigate } from 'react-router-dom';
import { selectAudio, setAudio } from '../reducers/misSlice';
import { AuthUtils } from '../components/AuthUtils';
import { selectPrograms, selectUser, setCards } from '../reducers/userSlice';
import ZipLottieBTN from '../components/zipLottieBtn';
import Count from '../components/count';

function ShopScreen() {
  const dispatch = useAppDispatch()
  const[show,setShow]=useState(false)
  const navigate=useNavigate()
  const audio = useAppSelector(selectAudio)
  const [width, setWidth] = useState<number>()
  const [height, setHeight] = useState<number>()
  const [step, setStep] = useState<number>(2)
  const [treasure, setTreasure] = useState<number>(1)
  const [pageItems,setPageItems]=useState<any[]>([])
  const lsPrograms = useAppSelector(selectPrograms)
  const lsUser = useAppSelector(selectUser)
  //const buttons = useAppSelector(selectButtons)

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
        //console.log(ratio,w,h)
    }    
    window.onresize = resize;
    
  useEffect(() => {
    if(!width && !height){
    const initWidth=((window.innerWidth > 0) ? window.innerWidth : window.screen.width)
    const initHeight=((window.innerHeight > 0) ? window.innerHeight : window.screen.height)
      setWidth(initWidth)
      setHeight(initHeight)
      resize()
      setTreasure(Number(lsPrograms[0].treasure))
    }
    }, [width,height,treasure])
      
  Hub.listen('auth', (data) => {
    if(!show && data.payload.event==="signedIn") {
      setShow(true) 
      navigate("/Courses") 
    }
    if(!show && data.payload.event==="signedOut") {
      setShow(false) 
    }
  });

  window.onclick = function() {if(!audio){dispatch(setAudio(true))}}  
  
  //Set the pageItems of all the levels and more: 
  useEffect(() => {
    if(Object.keys(pageItems).length === 0) {   
                let newPageItems:any=[]
                let posX=""
                let posY=""
                for (let index = 0; index <= 10; index++) {
                    //position by index
                    posX=index<5?"5%":"80%"
                    posY=(25+(index%5)*15).toString()+"%"
                    const newName=(index+1)>=10?(index+1).toString():"0"+(index+1).toString()
                    const ar:string[]=lsUser.cards
                    let uc1:string=ar.includes("Q0101-Card-"+newName+"-01")?"_UC":""
                    let uc2:string=ar.includes("Q0101-Card-"+newName+"-02")?"_UC":""
                    let uc3:string=ar.includes("Q0101-Card-"+newName+"-03")?"_UC":""
                    let uc4:string=ar.includes("Q0101-Card-"+newName+"-04")?"_UC":""
                    if(index+1<=10)
                    { newPageItems=[...newPageItems,
    [1, 1, Number(newName),"btn", [["15%","15%",posX,posY],[]], "Q0101-Card-"+newName, [true,true,"Q0101-Card-"+newName,[false,false,false],[0,80,85,90,0,90],""]],
    [1, index+2, "Card-"+newName+"-01","btn", [["22%","22%","25%","2%"],[]], "Q0101-Card-"+newName+"-01", [true,true,"Q0101-Card-"+newName+"-01"+uc1,[false,false,false],[3,90,0,1,0,90],""]],
    [1, index+2, "Card-"+newName+"-02","btn", [["22%","22%","45%","2%"],[]], "Q0101-Card-"+newName+"-02", [true,true,"Q0101-Card-"+newName+"-02"+uc2,[false,false,false],[3,90,0,1,0,90],""]],
    [1, index+2, "Card-"+newName+"-03","btn", [["22%","22%","25%","50%"],[]], "Q0101-Card-"+newName+"-03", [true,true,"Q0101-Card-"+newName+"-03"+uc3,[false,false,false],[3,90,0,1,0,90],""]],
    [1, index+2, "Card-"+newName+"-04","btn", [["22%","22%","45%","50%"],[]], "Q0101-Card-"+newName+"-04", [true,true,"Q0101-Card-"+newName+"-04"+uc4,[false,false,false],[3,90,0,1,0,90],""]],
                        ]
                    }    
                }
                setPageItems([
                  [1, 1, 103,"btn", [["10%","10%","83%","1%"],[]], "BtnHP", [true,true,"BtnHP",[false,true,false],[39,40,0,40,0,1],""]],
                  [1, 1, 104,"btn", [["10%","10%","5%","1%"],[]], "BtnTreasure", [true,true,"BtnTreasure",[false,true,false],[0,120,0,120,0,120],""]],
                 ,...newPageItems])
      }       
}, [lsPrograms,pageItems])

//Handles the clicks on the app and update the userProgram to the DB and locally 
const clickHandler = (ans:string,data:string) => {
  console.log(ans,data)
    if(data==="BtnHP" || data==="BtnChangeUser") {navigate('/CourseMap1')}
    if(data==="BtnShirTochnit") {navigate('/ShirScreen')}
    if(Number(ans)>=1) { setStep(Number(ans)+1) }
    if(data==="BtnTreasure") {setStep(2)}
    if(!Number(ans) && ans.split("-")[0]==="Card" &&
    treasure-((Number(ans.split("-")[2])+1)<3?3:Number(ans.split("-")[2])+1)>=0 && //user have enough money 
    !lsUser.cards.includes("Q0101-"+ans)){ //user don't have this card already 
      const allCards:string[]=[...lsUser.cards,"Q0101-"+ans]
      dispatch(setCards(["Q0101-"+ans, //CardName
                        ((Number(ans.split("-")[2])+1)<3?3:Number(ans.split("-")[2])+1).toString() //Treasure
                        ,"0" //ProgramIndex
                        , lsUser.id //userId
                        , lsPrograms[0].userProgramId //userProgramId
                        , treasure.toString() 
                        , JSON.stringify(allCards) //Cards list
      ]))
      setTreasure(treasure-((Number(ans.split("-")[2])+1)<3?3:Number(ans.split("-")[2])+1))
      setPageItems([])
    }
  }

  return (
    <Authenticator components={components}>
      {({user }) => (
        <Flex direction={"column"} className="rotated homePage"  width={width} height={height }>
          <AuthUtils email={user?.signInDetails?.loginId} user={user?.userId}/>
            <Image
              alt="bg"
              src="/homebg.png"
              height={height}
              width={width}
              />
              <div key={"treasure"+treasure} className='hp-button' style={{width: "10%", 
                height: "10%", right: "13%", 
                top: "0%"}} >
                  <Count start={0} end={treasure}/>
            </div> 
            {pageItems?  Object.values(pageItems).map(pageItem => (  
            pageItem[1]===1 && 
            pageItem[3]==="btn" && //pageItem[2]<102 &&
            <div key={pageItem[2]} className='hp-button' style={{width: pageItem[4][0][0], 
                height: pageItem[4][0][1], right: pageItem[4][0][2], 
                top: pageItem[4][0][3]}} >
                <Button backgroundColor="transparent" className='lottieButton' key={pageItem[2]}
                        onClick={()=>clickHandler(pageItem[2],pageItem[6][2]) } hidden={false}>
                    <ZipLottieBTN loop={pageItem[6][0]} autoplay={pageItem[6][1]} data={pageItem[6][2]} 
                    isAudio={pageItem[6][3]} segments={pageItem[6][4]} name={pageItem[6][2]} 
                    audioData={pageItem[6][5]!==""?pageItem[6][5]:pageItem[6][2]}/>
                </Button>   
            </div>               
            )): ""
        }
        {pageItems?  Object.values(pageItems).map(pageItem => (  
            pageItem[1]===step && 
            pageItem[3]==="btn" && //pageItem[2]<102 &&
            <div key={pageItem[2]} className='hp-button' style={{width: pageItem[4][0][0], 
                height: pageItem[4][0][1], right: pageItem[4][0][2], 
                top: pageItem[4][0][3]}} >
                <Button backgroundColor="transparent" className='lottieButton' key={pageItem[2]}
                        onClick={()=>clickHandler(pageItem[2],pageItem[6][2]) } hidden={false}>
                    <ZipLottieBTN loop={pageItem[6][0]} autoplay={pageItem[6][1]} data={pageItem[6][2]} 
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

export default ShopScreen