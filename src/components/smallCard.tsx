
//import ZipLottieBTN from './zipLottieBtn';
//import LocalLottie from './localLottie';
import ZipLottieBTN from './zipLottieBtn';

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
    <ZipLottieBTN loop={false} autoplay={true} data={data} 
        isAudio={[false,true,false]} 
        segments={segments} name={name} 
        audioData={audioData}></ZipLottieBTN>
        </div>
    </div>
  </>
  )
}
export default  SmallCard