
import { Flex, Text, Button } from '@aws-amplify/ui-react';
//import ZipLottieBTN from './zipLottieBtn';
//import LocalLottie from './localLottie';
import ZipLottieBTN from './zipLottieBtn';

interface LottieCardProps {
    setValue: (value: string) => void;
    price: string;
    isOpen?: string;
    mainText?: string;
    data: string;
    name: string;
    segments: number[];
    audioData?: string;
    width?: string;
    height?: string;
}

const LottieCard: React.FC<LottieCardProps> = ({ name, data, audioData, segments, width, height, price, isOpen, mainText, setValue}) => {
  return (
  <Flex
    gap="0"
    direction="column"
    width="320px"
    justifyContent="center"
    alignItems="flex-start"
    position="relative"
    backgroundColor="purple.10"
  >
    <div  style={{width: width, height: height, alignSelf: "center"}}>
    <div >
    {/* <ZipLottieBTN loop={false} autoplay={true} data={data} 
        isAudio={[false,true,false]} 
        segments={segments} name={name} 
        audioData={audioData}/> */}
    <ZipLottieBTN loop={false} autoplay={true} data={data} 
        isAudio={[false,true,false]} 
        segments={segments} name={name} 
        audioData={audioData}></ZipLottieBTN>
        </div>
    </div>
    <Flex
      gap="25px"
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      shrink="0"
      alignSelf="stretch"
      position="relative"
      padding="16px 16px 16px 16px"
    >
      <Flex
        gap="8px"
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
      >
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="700"
          color="purple.80"
          lineHeight="30px"
          textAlign="right"
          display="block"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          whiteSpace="pre-wrap"
        >
          {mainText}
        </Text>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="30px"
        fontWeight="700"
        color="purple.90"
        lineHeight="25px"
        textAlign="left"
        display="block"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        whiteSpace="pre-wrap"
      >
        {isOpen?"":price}
      </Text>
      <Button className={isOpen?"openbtn":"btn"}
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        onClick={()=>setValue(name)}
      >
        {isOpen?"פתוח":"לרכישה עכשיו"}
      </Button>
    </Flex>
  </Flex>
  )
}
export default  LottieCard