
import { Flex, Heading, Text } from '@aws-amplify/ui-react';
//import ZipLottieBTN from './zipLottieBtn';
//import LocalLottie from './localLottie';
import ZipLottieBTN from './zipLottieBtn';

interface LottieCardProps {
    mainText?: string;
    heading?: string;
    data: string;
    name: string;
    segments: number[];
    audioData?: string;
    width?: string;
    height?: string;
}

const DataLottieCard: React.FC<LottieCardProps> = ({ name, data, audioData, segments, width, height,heading, mainText}) => {
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
        <Heading level={1}
          fontFamily="Inter"
          fontSize="30px"
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
          {heading}
        </Heading>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="25px"
        fontWeight="700"
        color="purple.90"
        lineHeight="25px"
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
  </Flex>
  )
}
export default  DataLottieCard