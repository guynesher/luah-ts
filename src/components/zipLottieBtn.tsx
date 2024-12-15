import React,{ useEffect, useRef, useState}from 'react'
import lottie from 'lottie-web'
import { useDispatch } from 'react-redux'
import {unzipRaw} from 'unzipit';
import {flushSync} from 'react-dom';
import { getUrl } from 'aws-amplify/storage';
import { clearPlay, selectAudio, selectButtons, setButton } from '../reducers/misSlice';
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

const ZipLottieBTN: React.FC<ZipLottieBTNProps> = ({ loop, autoplay, data, name, isAudio, segments, audioData = data }) => {
    const container = useRef<HTMLDivElement | null>(null);
    const [mount, setMount] = useState<boolean>(false);
    const [aud, setAud] = useState<boolean>(false);
    const [zip, setZip] = useState<boolean>(false);
    const [dt, setData] = useState<string | null>(null);
    const [hoover, setHoover] = useState<string>('');
    const [click, setClick] = useState<string>('');
    const [timeSta,setTimeSta] = useState<number>(0);

    const dispatch = useDispatch();
        const buttons = useAppSelector(selectButtons)
    const audio = useAppSelector(selectAudio)
    const pos = buttons.map((button: { btnname: any; }) => button.btnname).indexOf(name)
    const focus = buttons.map((button: { btnname: any; }) => button.btnname).indexOf("focus")
    
    async function getURL(path: string) {
        const file = await getUrl({path:path})//, { download: true });
        const { entries } = await unzipRaw(file.url.toString())//.Body);
        await Promise.all(Object.values(entries).map(async (entry: any) => {
            const arrayBuffer = await entry.text();
            flushSync(() => {
                setData(arrayBuffer);
                setZip(true);
            });
        }));
    }

    async function setURLs(path: string) {
        const hoover = await getUrl({path:`${path}_hoover.mp3`})
        setHoover(hoover.url.toString());
        const click = await getUrl({path:`${path}_click.mp3`})
        setClick(click.url.toString());
    }

    useEffect(() => {
        if (!zip) {
            getURL(`public/media/json/${data}.zip`);
            setURLs(`public/media/audio/${audioData}`);
            setTimeSta(new Date().getMilliseconds())
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
            if(iconMenu){iconMenu.addEventListener('mousedown', () => {
              dispatch(setButton({btnname:name, condition:"mouseenter"}))
              anim.playSegments([segments[2],segments[3]],true);
            })}
      
            if(iconMenu){iconMenu.addEventListener('mouseup', () => {
              dispatch(setButton({btnname:name, condition:"mouseleave"}))
              anim.playSegments([segments[0],segments[1]] ,true);
            })}

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
          }, [dispatch,mount,name,loop,autoplay,data,buttons,segments,dt]) 

          useEffect(() => {
            //For hoover sound
            //console.log(buttons && buttons[pos] , isAudio[1] , audio, buttons[focus].condition===name)
            if(buttons && buttons[pos] && isAudio[1] && audio && buttons[focus].condition===name){
              var hoverSound = new Howl({
                  src: [hoover],
                  html5: true,
                  preload: true,
                  format: ['mp3'],
              });
              //console.log(!aud , buttons[pos].condition==="mouseenter")
              if(buttons[pos].condition==="mouseenter"){
                if(!aud ) {
                  hoverSound.play()
                  dispatch(setButton({btnname:name, condition:"complete"}))
                  setAud(true)
                } 
                hoverSound.on('end', function(){
                  Howler.unload()
                  dispatch(clearPlay())
                  setAud(false)
                });
              }     
              if(buttons[pos].condition==="mouseleave"){
              Howler.unload()
              setAud(false)
              dispatch(setButton({btnname:name, condition:"off"}))
              //dispatch(clearPlay())
            }   
            } 

            //For play at click
            if(buttons && buttons[pos]?.condition==="click" && isAudio[2] && audio && buttons[focus].condition===name){
              Howler.unload()
              dispatch(clearPlay())
              var clickSound = new Howl({
                  src: [click],
                  html5: true,
                  preload: true,
                  format: ['mp3']
              });
              //console.log(timeSta-new Date().getMilliseconds())
              clickSound.play()
              setAud(true)
              clickSound.on('end', function(){
                Howler.unload()
                setAud(false)
                dispatch(setButton({btnname:name, condition:"complete"}))
                dispatch(clearPlay())
              });
            }            

    }, [dispatch,name,isAudio,Howl,Howler,buttons,aud,audio,audioData,hoover,click,timeSta]) 

    return (
        <div className={name} ref={container} />
    );
};

export default ZipLottieBTN;
