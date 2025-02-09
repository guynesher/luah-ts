//import GlobalLottie from './globalLottie';
import { Loader } from '@aws-amplify/ui-react';
import { lazy, Suspense } from 'react';
const GlobalLottie = lazy(() => import('./globalLottie.tsx'));

interface LottieCardProps {
    setValue: (value: string) => void;
    data: string;
    name: string;
    segments: number[];
    audioData?: string;
    width?: string;
    height?: string;
}

const SmallCard: React.FC<LottieCardProps> = ({ name, data, audioData, segments, width, height, setValue}) => {
  return (
  <>
    <div  style={{width: width, height: height, alignSelf: "center"}}>
    <div onClick={()=>{setValue(name)}}>
    <Suspense fallback={<Loader  />}>
    <GlobalLottie loop={false} autoplay={true} data={data} 
        isAudio={[false,true,false]} 
        segments={segments} name={name} 
        audioData={audioData}>
    </GlobalLottie>
    </Suspense>
        </div>
    </div>
  </>
  )
}
export default  SmallCard