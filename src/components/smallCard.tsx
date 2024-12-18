
//import ZipLottieBTN from './zipLottieBtn';
//import LocalLottie from './localLottie';
import GlobalLottie from './globalLottie';

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
    <GlobalLottie loop={false} autoplay={true} data={data} 
        isAudio={[false,true,false]} 
        segments={segments} name={name} 
        audioData={audioData}></GlobalLottie>
        </div>
    </div>
  </>
  )
}
export default  SmallCard