import { Authenticator, Flex } from '@aws-amplify/ui-react';
import { useAppDispatch, useAppSelector } from "../store/hooks"
import {components} from '../services/components'
import { useEffect,  useState} from 'react';
import { Hub } from 'aws-amplify/utils';
//import { useNavigate } from 'react-router-dom';
import { selectAudio, setAudio } from '../reducers/misSlice';
import { selectPrograms } from '../reducers/userSlice';
import { AuthUtils } from '../components/AuthUtils';
//import { Howl, Howler } from 'howler';
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../../amplify/data/resource'
import { PROGRAMS } from '../constants/userConstants';

const client = generateClient<Schema>();

function QuestionScreen() {
  const dispatch = useAppDispatch()
  const[show,setShow]=useState(false)
  //const navigate=useNavigate()
  const audio = useAppSelector(selectAudio)
  const [width, setWidth] = useState(1100)
  const [height, setHeight] = useState(800)
  const [pageItems,setPageItems]=useState<any[]>([])
  const lsPrograms = useAppSelector(selectPrograms)

  // const [timeStamp] = useState<number>(new Date().getTime());
  // const [step, setStep] = useState<number>(0);
  // const [correct, setCorrect] = useState<boolean>(false);
  // const [userData, setUserData] = useState<any[]>([]);
  // const [appear, setAppear] = useState<any[]>([]);
  // const [mistake, setMistake] = useState<boolean>(false);
  // const [mistakeNum, setMistakeNum] = useState<string>("0");
  // const [help, setHelp] = useState<boolean>(false);
  // const [aud, setAud] = useState<boolean>(false);
  // const [nav, setNav] = useState<boolean>(false);
  // const [upload, setUpload] = useState<boolean>(true);
  // const [media, setMedia] = useState<any>();
  // const [pointer, setPointer] = useState<boolean>(false);
  // const [voice, setVoice] = useState<boolean>(true);
  // const [showNumber, setShowNumber] = useState<number>(0);
  // const [correctStep, setCorrectStep] = useState<number>(0);

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
  //step 0 - List (current user and program) question items (show some default until loading)
  //step final - Define next question (function or AI)  
  //             Create new userData
  //             Update user (current userProgram status - next question)
  //Remove items and return to step 0 
  
  useEffect(() => {
    const prog=lsPrograms.find((program)=>program.programName===PROGRAMS[0])
    console.log(prog?.userProgramId)
    if(prog) {
      client.models.UserProgram.onUpdate({ 
        filter: {
          email: {
            eq: prog.userProgramId,
          },
        },
      }).subscribe({
        next: (data) => {
          (async () => {
            let quest:string[]=[]
            if (data?.nextQuestion) quest=JSON.parse(data?.nextQuestion?.toString()).questions
            setPageItems([
              //default values
            ]);
            await client.models.Item.list({
              filter: {
                questionId: {
                  eq: quest[Math.floor(Math.random() * quest.length)]
                }
              }
            }).catch((error)=>console.log('GET call failed: ',error)).finally(()=>console.log(data))
            })() 
        },
        error: (error) => console.warn(error),
      });
      //return () => sub.unsubscribe();
    }
    }, [pageItems]);


  // const checkForPointer = pageItems && Object.keys(pageItems).length > 0 ? 
  //   Object.keys(pageItems)
  //   .filter(pageItem => pageItems[pageItem].lineType === "pointer")
  //   .map(pageItem => pageItems[pageItem]) : "";

  // const checkForStopPointer = pageItems && Object.keys(pageItems).length > 0 ? 
  //   Object.keys(pageItems)
  //   .filter(pageItem => pageItems[pageItem].lineType === "stopPointer")
  //   .map(pageItem => pageItems[pageItem].step) : "";
  
  return (
    <Authenticator components={components}>
      {({user }) => (
        <Flex direction={"column"} className="rotated"  width={width} height={height }>
          <AuthUtils email={user?.signInDetails?.loginId} user={user?.userId}/>
      </Flex>
      )}
    </Authenticator>
  );
}

export default QuestionScreen