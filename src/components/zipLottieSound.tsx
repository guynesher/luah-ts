import React,{ useEffect, useRef, useState}from 'react'
import lottie from 'lottie-web'
import { useDispatch } from 'react-redux'
import {unzipRaw} from 'unzipit';
import {flushSync} from 'react-dom';
import { getUrl } from 'aws-amplify/storage';
import { selectAudio, selectButtons, setButton } from '../reducers/misSlice';
import { useAppSelector } from '../store/hooks';
import { Howl, Howler } from 'howler';

interface ZipLottieBTNProps {
    loop: boolean;
    autoplay: boolean;
    data: string;
    name: string;
    isAudio: boolean[];
    segments: number[];
    audioData?: string;
}

const ZipLottieSound: React.FC<ZipLottieBTNProps> = ({ loop, autoplay, data, name, isAudio, segments, audioData = data }) => {
    const container = useRef<HTMLDivElement | null>(null);
    const [mount, setMount] = useState<boolean>(false);
    const [zip, setZip] = useState<boolean>(false);
    const [dt, setData] = useState<string | null>(null);
    const [play,setPlay] = useState<string>('');
    const [aud, setAud] = useState<boolean>(false);
    //const [timeSta,setTimeSta] = useState<number>(0);
    const dispatch = useDispatch();
        const buttons = useAppSelector(selectButtons)
    const audio = useAppSelector(selectAudio)
    const pos = buttons.map((button: { btnname: any; }) => button.btnname).indexOf(name)
    //const focus = buttons.map((button: { btnname: any; }) => button.btnname).indexOf(name)
    
    async function getURL(path: string) {
        const file = await getUrl({path:path})//, { download: true });
        const { entries } = await unzipRaw(file.url.toString())//.Body);
        await Promise.all(Object.values(entries).map(async (entry: any) => {
            const arrayBuffer = await entry.text();
            flushSync(() => {
                setData(arrayBuffer);
                setZip(true);
                setAud(true)
            });
        }));
    }

    async function setURLs(path: string) {
        const play = await getUrl({path:`${path}_play.mp3`})
        setPlay(play.url.toString());
    }

    useEffect(() => {
        if (!zip) {
            getURL(`public/media/json/${data}.zip`);
            setURLs(`public/media/audio/${audioData}`);
            //setTimeSta(new Date().getMilliseconds())
        }
    }, [data, zip, mount, audioData]); 
      
      useEffect(() => { 
        if(!mount && dt) { 
              let iconMenu = document.querySelector(`.${name}`);

              const anim = lottie.loadAnimation({
                container: container.current as Element,
                renderer: "svg",
                loop: loop,
                autoplay: autoplay,
                animationData: JSON.parse(dt),
                initialSegment: [segments[0],segments[1]],
            });  
            anim.addEventListener('DOMLoaded', function () { dispatch(setButton({btnname:name, condition:"on"})); });

            if(iconMenu){iconMenu.addEventListener('mouseenter', () => {
              dispatch(setButton({btnname:name, condition:"mouseenter"}))
              anim.playSegments([segments[2],segments[3]],true);
              
            })}
      
            if(iconMenu){iconMenu.addEventListener('mouseleave', () => {
              dispatch(setButton({btnname:name, condition:"mouseleave"}))
              anim.playSegments([segments[0],segments[1]] ,true);
            })}
            //For iOS system
            // if(iconMenu){iconMenu.addEventListener('mousedown', () => {
            //   dispatch(setButton({btnname:name, condition:"mouseenter"}))
            //   anim.playSegments([segments[2],segments[3]],true);
            // })}
      
            // if(iconMenu){iconMenu.addEventListener('mouseup', () => {
            //   dispatch(setButton({btnname:name, condition:"mouseleave"}))
            //   anim.playSegments([segments[0],segments[1]] ,true);
            // })}

            if(iconMenu){iconMenu.addEventListener('click', () => {
              dispatch(setButton({btnname:name, condition:"click"}))
              anim.playSegments([segments[4],segments[5]] ,true);
            })}

            Promise.resolve().then(() => 
              flushSync(() => {
                setMount(true)
              })
            );
            }
            //if(!buttons[data]) {dispatch(setButton(name,"on"))}
          }, [dispatch,mount,name,loop,autoplay,data,buttons,segments,dt]) 

          useEffect(() => {
            //For imidiate play at enter
            //console.log(buttons && buttons[pos] , isAudio[1] , audio, buttons[focus], buttons[pos]===buttons[focus])
            //console.log("Before",aud)
            if(buttons && buttons[pos] && isAudio[0] && audio && play!==''){
              var playSound = new Howl({
                  src: [play],
                  html5: true,
                  preload: true,
                  format: ['mp3'],
              });
              
              
              if(buttons[pos].condition!=="complete" && buttons[pos].condition!=="run" && aud) {
                //if(new Date().getMilliseconds()-timeSta>1000)
                setAud(false)
                //console.log("After",buttons[pos],aud)
                  playSound.play()
                playSound.on('play',function(){
                  dispatch(setButton({btnname:name, condition:"run"}))
                });
                playSound.on('end', function(){
                  Howler.unload()
                  dispatch(setButton({btnname:name, condition:"complete"}))
                });}
            }       
    }, [dispatch,name,isAudio,Howl,Howler,buttons,audio,audioData,play,aud]) 

    return (
        <div className={name} ref={container} />
    );
};

export default ZipLottieSound;
