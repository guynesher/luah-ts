
import { Flex, Heading, Text } from '@aws-amplify/ui-react';
import GlobalLottie from './globalLottie';

interface LottieCardProps {
    mainText?: string;
    heading?: string;
    data: string;
    name: string;
    segments: number[];
    audioData?: string;
    width?: string;
    height?: string;
    cardWidth?: string;
    cardHeight?: string;
}

const DataLottieCard: React.FC<LottieCardProps> = ({ name, data, audioData, segments, width, height,heading, mainText,
  cardWidth="350px", cardHeight="320px"}) => {
  return (
  <Flex
    gap="0"
    direction="column"
    width={cardWidth}
    height={cardHeight}
    justifyContent="flex-start"
    alignItems="center"
    position="relative"
    backgroundColor="white"
    style={{boxShadow:"10px 5px 5px gray",   borderRadius: "25px"}}
  >
    <div  style={{width: width, height: height, alignSelf: "center", padding:"10px"}}>
      <div>
      <GlobalLottie loop={false} autoplay={true} data={data} 
          isAudio={[false,false,false]} 
          segments={segments} name={name} 
          audioData={audioData}>
        </GlobalLottie>
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
        height="50px"
      >         
        <Heading level={3}
          fontFamily="sans-serif"
          fontSize="26px"
          fontStyle={"italic"}
          fontWeight="700"
          color="blue.80"
          lineHeight="30px"
          textAlign="center"
          display="block"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          whiteSpace="pre-wrap"
          padding={"10px"}
        >
          {heading}
        </Heading>
      </Flex>
      <Text
        fontFamily="sans-serif"
        fontSize="23px"
        fontWeight="700"
        color="blue.60"
        lineHeight="25px"
        textAlign="center"
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