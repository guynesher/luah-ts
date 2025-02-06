
import { Flex, Heading } from '@aws-amplify/ui-react';
import ValueCounter from './valueCounter';

interface LottieCardProps {
    heading?: string;
    value: number;
    bigSize: boolean;
}

const CounterCard: React.FC<LottieCardProps> = ({ value ,heading,  bigSize=true}) => {

  return (
  <Flex
    gap="0"
    direction="column"
    width={bigSize?"150px":"70px"}
    height={bigSize?"100px":"80px"}
    justifyContent="flex-start"
    alignItems="center"
    position="relative"
    backgroundColor="white"
    style={{boxShadow:"10px 5px 5px gray",   borderRadius: bigSize?"25px":"5px"}}
  >
    <Flex
      gap="25px"
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      shrink="0"
      alignSelf="stretch"
      position="relative"
      padding={bigSize?"16px 16px 16px 16px":"7px 7px 7px 7px"}
    >
      <Flex
        gap="8px"
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        height="15px"
      >         
        <Heading level={2}
          fontFamily="sans-serif"
          fontSize={bigSize?"25px":"17px"}
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
          padding={"1px"}
        >
          {heading}
        </Heading>
      </Flex>
        <ValueCounter start={value-10} end={value} bigSize={bigSize}/>
    </Flex>
  </Flex>
  )
}
export default  CounterCard