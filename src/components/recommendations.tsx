import { useEffect, useState } from "react";
import { Button, Flex, Input, Label, Message, Text, TextAreaField } from "@aws-amplify/ui-react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { createNewRecommendation, getBestRecom, selectActiveStatus, setActiveStatus } from "../reducers/misSlice";
import { selectUser } from "../reducers/userSlice";
import DataLottieCard from "./dataLottieCard";
import { VscAdd } from 'react-icons/vsc';
import Rating from "./rating";

interface ScreenSize {
  width: number;
  height: number;
  items: any;
}

const Recommendations: React.FC<ScreenSize> = ({items}) => {
  const [text, setText] = useState<string>("");
  const [name, setName] = useState<string>();  
  const [rating, setRating] = useState<number>(5);  
  const [newRecom, setNewRecom] = useState<boolean>(false);
  const [reg, setReg] = useState<boolean>(false);
  const [add, setAdd] = useState<boolean>(false);
  const dispatch = useAppDispatch()
  const lsUser = useAppSelector(selectUser)
  const status = useAppSelector(selectActiveStatus)

  useEffect(() => {
    if(status==="recomDone") {
        dispatch(setActiveStatus("recom"))
        setNewRecom(true)
        dispatch(getBestRecom())
    }
  }, [status]);

  useEffect(() => {
    if(lsUser && lsUser.id==="") {
       setReg(false)
     }
     else {
        setReg(true)
     }
 }, [lsUser,reg]);

  const update= () => {
      if(reg) dispatch(createNewRecommendation([lsUser.id,name?name:"", text?text:"",rating?rating.toString():"5"]))
  }  

  const handleRatingChange = (rating: number) => { setRating(rating)}

  return (
    <><br></br>
    {reg && !add && <Button className="btn" style={{fontSize:"1.3rem"}} onClick={()=>setAdd(true)}>הוספת המלצה
      <VscAdd></VscAdd>
      </Button>}
    <Flex direction={'row'} gap="medium"  padding={"1.1rem"}
    width="100%" 
    wrap={"wrap"} 
    justifyContent="center"
    alignItems="center">
      {items && items.map((item:any,index:number) =>
                <DataLottieCard name={"recom5"+index} data="recom5" audioData="BtnAlynu" segments={[0,170,0,170,0,170]} 
                width="40%" height="40%" heading={item.name} key={index}
                mainText={item.text}/> )
      }
    </Flex>
    <Flex direction={"row"} gap="large" justifyContent="center" margin="10px 10px">
      <Flex direction={"column"} 
            alignContent={"center"}
            width={{large:"50%",base:"100%"}}
            justifyContent="center"
            backgroundColor="purple.40"
            color="purple.100"
            style={{boxShadow:"10px 5px 5px gray",   borderRadius: "25px"}}>
              
            {add && 
            <Text     variation="primary"
              as="p"
              lineHeight="1.5em"
              fontWeight={400}
              fontSize="40px"
              fontStyle="normal"
              textDecoration="none"
              color="purple.100"
              width="100%">
                     הוספת המלצה
            </Text>
            }
            {newRecom &&
              <Flex direction="row" justifyContent={"center"}>
              <Message
                variation="filled"
                colorTheme="success"
                heading="ההמלצה התקבלה">
                </Message>
              </Flex>   
                }
            {add && 
            <Flex direction={'column'} gap="large" justifyContent="center" margin="10px 10px">
              <Flex direction="row">
              <Label htmlFor="name1" color="purple.100" width={"50%"} fontSize={"20px"}> שם </Label>
              <Input id="name1" name="name" size="large" 
                    value={name?name:""} 
                    autoComplete="off"
                    onChange={(e)=>setName(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"/>
              </Flex>

                <Flex direction="row">
                <Label htmlFor="text1" color="purple.100" width={"50%"} fontSize={"20px"}>  טקסט </Label>
                <TextAreaField
                    descriptiveText="רציתי לומר ש"
                    labelHidden={true}
                    label="צור קשר"
                    id="text1" name="text" 
                    size="large"
                    placeholder=""
                    value={text?text:""} 
                    onChange={(e)=>setText(e.target.value)}
                    width={{ base: '100%', large: '100%' }} backgroundColor="purple.20" color="purple.80"
                    rows={3}/>
                </Flex>
                <Flex direction="row" justifyContent={"center"}>
                <Rating
                totalStars={5} onRatingChange={handleRatingChange} />
                </Flex>
                <Flex direction="row" justifyContent={"center"}>
                <Button width={"50%"} backgroundColor="purple.20" 
                    color="purple.80"
                    onClick={()=>update()}>שלח טופס</Button>
              </Flex>
            </Flex> 
            }
        </Flex>
      </Flex>
      </>
  );
}

export default Recommendations;
