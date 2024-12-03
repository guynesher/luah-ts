import { useEffect, useState } from "react";
import { Authenticator, Card, Flex, Grid, Input, Label, SwitchField, Text } from "@aws-amplify/ui-react";
import {components} from '../services/components'
import { useAppDispatch } from "../store/hooks";
import { getAllChapters, getAllLevels, getAllPrograms, getAllQuestions, setItemsAsync, updateChapter, updateItem, updateLevel, updateProgram, updateQuestion } from "../reducers/misSlice";

interface UpdateProps {
  setMode: (value: string) => void;
  itm: any;
  mode: string;
}

const UpdateAllScreen: React.FC<UpdateProps>=({itm, mode, setMode}) =>{
  const [text, setText] = useState<string>("");
  const [data] = useState<any>(JSON.parse(itm)); 
  const [id, setId] = useState<string>(); 
  const [name, setName] = useState<string>();  
  const [number, setNumber] = useState<string>();
  const [bundle, setBundle] = useState<string>();
  const [subject, setSubject] = useState<string>();  
  const [description, setDescription] = useState<string>();
  const [nav, setNav] = useState<boolean>(false);
  const dispatch = useAppDispatch()

  const [step, setStep] = useState<number>();  
  const [itemType, setItemType] = useState<string>("");
  const [animationName, setAnimationName] = useState<string>("");
  const [audioData, setAudioData] = useState<string>("");
  const [itemCondition, setItemCondition] = useState<string[]>(["",""]);  
  const [itemPosition, setItemPosition] = useState<number[]>([0,0]);
  const [itemSize, setItemSize] = useState<number[]>([0,0]);
  const [segments, setSegments] = useState<number[]>([0,0,0,0,0,0]);
  const [loop, setLoop] = useState<boolean>(false);
  const [autoplay, setAutoplay] = useState<boolean>(false);
  const [isAudioClick, setIsAudioClick] = useState<boolean>(false);
  const [isAudioHoover, setIsAudioHoover] = useState<boolean>(false);
  const [isAudioPlay, setIsAudioPlay] = useState<boolean>(false);

  useEffect(() => {
    if(data && mode==="program") { setText("תוכנית"); setId(data.programId); setName(data.programName);
            setNumber(data.programNumber); setSubject(data.programSubject); setDescription(data.programDescription);}
    if(data && mode==="level") { setText("שלב"); setId(data.levelId); setName(data.levelName);
            setNumber(data.levelNumber); setSubject(data.levelSubject); setDescription(data.levelDescription);}
    if(data && mode==="chapter") { setText("פרק"); setId(data.chapterId); setName(data.chapterName); setBundle(data.bundleNumber.toString())
            setNumber(data.chapterNumber); setSubject(data.chapterSubject); setDescription(data.chapterDescription);}
    if(data && mode==="question") { setText("שאלה"); setId(data.questionId); setName(data.questionName);
            setNumber(data.questionNumber); setSubject(data.questionSubject); setDescription(data.questionDescription);}
    if(data && mode==="item") { setText("פריט"); setId(data.itemId); setStep(data.step); setNumber(data.itemNumber)
            setItemType(data.itemType); setAnimationName(data.animationName); setItemCondition(data.itemCondition);
            setItemPosition(data.itemPosition); setItemSize(data.itemSize); setSegments(data.segments);
            setLoop(data.loop); setAutoplay(data.autoplay); setAudioData(data.audioData);
            setIsAudioClick(data.isAudioClick); setIsAudioHoover(data.isAudioHoover); setIsAudioPlay(data.isAudioPlay); 
          }    
    //console.log(data)
  }, [mode,data]);

  useEffect(() => {
    if(nav) {
      setTimeout(function () {
        setNav(false)
        if(mode==="program") {dispatch(getAllPrograms([])); setMode("programs");}
        if(mode==="level") {dispatch(getAllLevels(data.programName)); setMode("levels");}
        if(mode==="chapter") {dispatch(getAllChapters([data.levelId,data.levelNumber])); setMode("chapters");}
        if(mode==="question") {dispatch(getAllQuestions([data.questionSubject,data.questionDescription])); setMode("questions");}
        if(mode==="item") {dispatch(setItemsAsync(data.questionId)); setMode("items");}
      }, 1000);
    }
  }, [nav,mode]);

  const update= () => {
    if(mode==="program") {dispatch(updateProgram([id?id:"",name?name:"",number?number:"",
                                                subject?subject:"",description?description:""]));setNav(true);}
    if(mode==="level") {dispatch(updateLevel([id?id:"",name?name:"",number?number:"",
                                                subject?subject:"",description?description:""]));setNav(true);}
    if(mode==="chapter") {dispatch(updateChapter([id?id:"",name?name:"",number?number:"", bundle?bundle:"",
                                                subject?subject:"",description?description:""]));setNav(true);}
    if(mode==="question") {dispatch(updateQuestion([id?id:"",name?name:"",number?number:"",
                                                subject?subject:"",description?description:""]));setNav(true);}
    if(mode==="item") {dispatch(updateItem([id?id:"",number?number:"1",itemType?itemType:"",step?step.toString():"1", 
      animationName?animationName:"",itemCondition?itemCondition[0]?itemCondition[0]:"":"",
      itemCondition?itemCondition[1]?itemCondition[1]:"":"",
      itemPosition?itemPosition[0]?itemPosition[0].toString():"50":"50",itemPosition?itemPosition[1]?itemPosition[1].toString():"50":"50",
      itemSize?itemSize[0]?itemSize[0].toString():"10":"10",itemSize?itemSize[1]?itemSize[1].toString():"10":"10", 
      segments?segments[0]?segments[0].toString():"0":"0",segments?segments[1]?segments[1].toString():"0":"0",
      segments?segments[2]?segments[2].toString():"0":"0",segments?segments[3]?segments[3].toString():"0":"0",
      segments?segments[4]?segments[4].toString():"0":"0",segments?segments[5]?segments[5].toString():"0":"0",
      audioData?audioData:"", loop===true?"true":"false",
      autoplay===true?"true":"false", isAudioClick===true?"true":"false", isAudioHoover===true?"true":"false",
      isAudioPlay===true?"true":"false",
    ]));setNav(true);}
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
            backgroundColor="purple.40"
          >
            <Text     variation="primary"
              as="p"
              lineHeight="1.5em"
              fontWeight={400}
              fontSize="2em"
              fontStyle="normal"
              textDecoration="none"
              width="30vw">
                   {text}
            </Text>
            <Flex direction="row" gap="medium" margin="40px">
              <Label htmlFor="IdNumber" color="purple.100">מספר {text}</Label>
              <Input id="IdNumber" name="IdNumber" isDisabled value={id?id:""} size="small" 
                    width={{ base: '100%', large: '40%' }} backgroundColor="purple.20" color="purple.80"/>
            </Flex>
            {mode!=="item" && 
            <Flex direction={{ base: 'column', large: 'column' }} gap="large" justifyContent="center" margin="10px 10px">
              <Flex direction="row">
              <Label htmlFor="name" color="purple.100" width={"50%"}> שם {text}</Label>
              <Input id="name" name="name" size="large" 
                    value={name?name:""} 
                    onChange={(e)=>setName(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="number" color="purple.100" width={"50%"}>  מספר {text} </Label>
              <Input id="number" name="number" size="large"
                    value={number?number:""} 
                    onChange={(e)=>setNumber(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              {mode==="chapter" && 
                <Flex direction="row">
                <Label htmlFor="bundle" color="purple.100" width={"50%"}>  חלק {text}</Label>
                <Input id="bundle" name="bundle" size="large" 
                      value={bundle?bundle:""} 
                      onChange={(e)=>setBundle(e.target.value)}
                      width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
                </Flex> 
              }
              <Flex direction="row">
              <Label htmlFor="subject" color="purple.100" width={"50%"}>  נושא {text}</Label>
              <Input id="subject" name="subject" size="large" 
                    value={subject?subject:""} 
                    onChange={(e)=>setSubject(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="description" color="purple.100" width={"50%"}>  תיאור {text} </Label>
              <Input id="description" name="v" size="large" 
                    value={description?description:""} 
                    onChange={(e)=>setDescription(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <button onClick={()=>update()}>עדכן {text}</button>
            </Flex>
            }
            {mode==="item" && 
            <>
            <Flex direction={{ base: 'column', large: 'row' }} gap="large" justifyContent="center" margin="10px 10px">
              <Flex direction="row">
              <Label htmlFor="number" color="purple.100" width={"50%"}>  מספר {text} </Label>
              <Input id="number" name="number" size="large"
                    value={number?number:""} 
                    onChange={(e)=>setNumber(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="step" color="purple.100" width={"50%"}>  צעד {text}</Label>
              <Input id="step" name="step" size="large" 
                    value={step?step:""} 
                    onChange={(e)=>setStep(Number(e.target.value))}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="itemType" color="purple.100" width={"50%"}>  סוג {text} </Label>
              <Input id="itemType" name="v" size="large" 
                    value={itemType?itemType:""} 
                    onChange={(e)=>setItemType(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <SwitchField
                id="loop"
                isDisabled={false}
                label="loop"
                labelPosition="end"
                dir="ltr"
                isChecked={loop}
                onChange={(e)=>setLoop(e.target.checked)}
              />
              </Flex>
            </Flex>

            <Flex direction={{ base: 'column', large: 'row' }} gap="large" justifyContent="center" margin="10px 10px">
              <Flex direction="row">
              <Label htmlFor="animationName" color="purple.100" width={"50%"}>  שם אנימציה </Label>
              <Input id="animationName" name="animationName" size="large"
                    value={animationName?animationName:""} 
                    onChange={(e)=>setAnimationName(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="condition" color="purple.100" width={"50%"}> תנאי</Label>
              <Input id="condition" name="condition" size="large" 
                    value={itemCondition?itemCondition[0]:""} 
                    onChange={(e)=>setItemCondition([e.target.value,itemCondition[1]])}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="continueTo" color="purple.100" width={"50%"}>  המשך ל </Label>
              <Input id="continueTo" name="continueTo" size="large" 
                    value={itemCondition?itemCondition[1]:""}  
                    onChange={(e)=>setItemCondition([itemCondition[0],e.target.value])}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <SwitchField
                id="autoplay"
                isDisabled={false}
                label="autoplay"
                labelPosition="end"
                dir="ltr"
                isChecked={autoplay}
                onChange={(e)=>setAutoplay(e.target.checked)}
              />
              </Flex>
            </Flex>

            <Flex direction={{ base: 'column', large: 'row' }} gap="large" justifyContent="center" margin="10px 10px">
              <Flex direction="row">
              <Label htmlFor="itemPositionX" color="purple.100" width={"50%"}>  מיקום X  </Label>
              <Input id="itemPositionX" name="itemPositionX" size="large"
                    value={itemPosition?itemPosition[0]:""} 
                    onChange={(e)=>setItemPosition([Number(e.target.value),itemPosition[1]])}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="itemPositionY" color="purple.100" width={"50%"}>  מיקום Y  </Label>
              <Input id="itemPositionY" name="itemPositionY" size="large"
                    value={itemPosition?itemPosition[1]:""}
                    onChange={(e)=>setItemPosition([itemPosition[0],Number(e.target.value)])}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="itemSizeX" color="purple.100" width={"50%"}> תנאי</Label>
              <Input id="itemSizeX" name="itemSizeX" size="large" 
                    value={itemSize?itemSize[0]:""} 
                    onChange={(e)=>setItemSize([Number(e.target.value),itemSize[1]])}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="itemSizeY" color="purple.100" width={"50%"}>  המשך ל </Label>
              <Input id="itemSizeY" name="itemSizeY" size="large" 
                    value={itemSize?itemSize[1]:""}  
                    onChange={(e)=>setItemSize([itemSize[0],Number(e.target.value)])}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
            </Flex>
            
            <Flex direction={{ base: 'column', large: 'row' }} gap="large" justifyContent="center" margin="10px 10px">
              <Flex direction="row">
              <Label htmlFor="segments1" color="purple.100" width={"50%"}>  כללי  </Label>
              <Input id="segments1" name="segments1" size="large"
                    value={segments?segments[0]:""} 
                    onChange={(e)=>setSegments([Number(e.target.value),segments[1],segments[2],segments[3],segments[4],segments[5]])}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Input id="segments2" name="segments2" size="large"
                    value={segments?segments[1]:""} 
                    onChange={(e)=>setSegments([segments[0],Number(e.target.value),segments[2],segments[3],segments[4],segments[5]])}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="segments3" color="purple.100" width={"50%"}>  מעבר  </Label>
              <Input id="segments3" name="segments3" size="large"
                    value={segments?segments[2]:""} 
                    onChange={(e)=>setSegments([segments[0],segments[1],Number(e.target.value),segments[3],segments[4],segments[5]])}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Input id="segments4" name="segments4" size="large"
                    value={segments?segments[3]:""} 
                    onChange={(e)=>setSegments([segments[0],segments[1],segments[2],Number(e.target.value),segments[4],segments[5]])}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Label htmlFor="segments5" color="purple.100" width={"50%"}>  לחיצה  </Label>
              <Input id="segments5" name="segments5" size="large"
                    value={segments?segments[4]:""} 
                    onChange={(e)=>setSegments([segments[0],segments[1],segments[2],segments[3],Number(e.target.value),segments[5]])}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <Input id="segments6" name="segments6" size="large"
                    value={segments?segments[5]:""} 
                    onChange={(e)=>setSegments([segments[0],segments[1],segments[2],segments[3],segments[4],Number(e.target.value)])}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
            </Flex>

            
            <Flex direction={{ base: 'column', large: 'row' }} gap="large" justifyContent="center" margin="10px 10px">
              <Flex direction="row">
              <Label htmlFor="audioData" color="purple.100" width={"50%"}>  שם קובץ שמע </Label>
              <Input id="audioData" name="audioData" size="large"
                    value={audioData?audioData:""} 
                    onChange={(e)=>setAudioData(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>
              <Flex direction="row">
              <SwitchField
                id="isAudioPlay"
                isDisabled={false}
                label="isAudioPlay"
                labelPosition="end"
                dir="ltr"
                isChecked={isAudioPlay}
                onChange={(e)=>setIsAudioPlay(e.target.checked)}
              />
              </Flex>
              <Flex direction="row">
              <SwitchField
                id="isAudioHoover"
                isDisabled={false}
                label="isAudioHoover"
                labelPosition="end"
                dir="ltr"
                isChecked={isAudioHoover}
                onChange={(e)=>setIsAudioHoover(e.target.checked)}
              />
              </Flex>
              <Flex direction="row">
              <SwitchField
                id="isAudioClick"
                isDisabled={false}
                label="isAudioClick"
                labelPosition="end"
                dir="ltr"
                isChecked={isAudioClick}
                onChange={(e)=>setIsAudioClick(e.target.checked)}
              />
              </Flex>
              <button onClick={()=>update()}>עדכן {text}</button>
            </Flex>
            </>
            }
          </Card>
        </Grid>
      </Flex>
        )}
      </Authenticator>
  );
}

export default UpdateAllScreen;