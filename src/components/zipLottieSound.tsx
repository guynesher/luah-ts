import React, { useEffect, useRef, useState } from 'react'
import lottie from 'lottie-web'
import { useDispatch } from 'react-redux'
import { unzipRaw } from 'unzipit';
import { flushSync } from 'react-dom';
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

const ZipLottieSound: React.FC<ZipLottieBTNProps> = ({ 
    loop, 
    autoplay, 
    data, 
    name, 
    isAudio, 
    segments, 
    audioData = data 
}) => {
    const container = useRef<HTMLDivElement | null>(null);
    const animRef = useRef<any>(null);
    const soundRef = useRef<Howl | null>(null);
    const isPlayingRef = useRef<boolean>(false);

    const [mount, setMount] = useState<boolean>(false);
    const [zip, setZip] = useState<boolean>(false);
    const [dt, setData] = useState<string | null>(null);
    const [play, setPlay] = useState<string>('');
    const [aud, setAud] = useState<boolean>(false);
    const [dur, setDur] = useState<number>(0);
    const [tm, setTime] = useState<number>(0);

    const dispatch = useDispatch();
    const buttons = useAppSelector(selectButtons)
    const audio = useAppSelector(selectAudio)
    const pos = buttons.map((button: { btnname: any; }) => button.btnname).indexOf(name)
    const ply = buttons.map((button: { btnname: any; }) => button.btnname).indexOf("play")

    async function getURL(path: string) {
        const file = await getUrl({path:path})
        const { entries } = await unzipRaw(file.url.toString())
        await Promise.all(Object.values(entries).map(async (entry: any) => {
            const arrayBuffer = await entry.text();
            flushSync(() => {
                setData(arrayBuffer);
                setZip(true);
                setAud(true)
            });
        }));
    }

    // Prevent multiple audio initializations
    const initializeSound = () => {
        // Unload any existing sound
        if (soundRef.current) {
            soundRef.current.unload();
        }

        // Create new Howl instance
        soundRef.current = new Howl({
            src: [play],
            html5: true,
            preload: true,
            format: ['mp3'],
            onloaderror: () => {
                dispatch(setButton({btnname: name, condition: "complete"}));
                isPlayingRef.current = false;
            },
            onplayerror: () => {
                dispatch(setButton({btnname: name, condition: "complete"}));
                isPlayingRef.current = false;
            },
            onplay: () => {
                setDur(soundRef.current?.duration() || 0);
                setTime(Date.now());
                dispatch(setButton({btnname: name, condition: "run"}));
                isPlayingRef.current = true;
            },
            onend: () => {
                Howler.unload();
                setDur(0);
                dispatch(setButton({btnname: name, condition: "complete"}));
                isPlayingRef.current = false;
            }
        });
    }

    const plySound = () => {
        // Prevent multiple plays
        if (isPlayingRef.current) {
            return;
        }

        // Ensure sound is initialized
        if (!soundRef.current) {
            initializeSound();
        }

        // Play sound with a small delay
        setTimeout(() => {
            if (soundRef.current && !isPlayingRef.current) {
                soundRef.current.play();
            }
        }, 20);
    }

    // Existing getURL and setURLs functions remain the same
    async function setURLs(path: string) {
        const play = await getUrl({path:`${path}_play.mp3`})
        setPlay(play.url.toString());
    }

    useEffect(() => {
        if (!zip) {
            getURL(`public/media/json/${data}.zip`);
            setURLs(`public/media/audio/${audioData}`);
        }
    }, [data, zip, mount, audioData]); 
      
    useEffect(() => { 
        if(!mount && dt) { 
            let iconMenu = document.querySelector(`.${name}`);
            
            // Destroy existing animation if exists
            if (animRef.current) {
                animRef.current.destroy();
            }

            // Create new animation
            animRef.current = lottie.loadAnimation({
                container: container.current as Element,
                renderer: "svg",
                loop: loop,
                autoplay: autoplay,
                animationData: JSON.parse(dt),
                initialSegment: [segments[0], segments[1]],
            });  

            animRef.current.addEventListener('DOMLoaded', () => {
                dispatch(setButton({btnname: name, condition: "on"}));
            });

            if(iconMenu){
                iconMenu.addEventListener('mouseenter', () => {
                    animRef.current?.playSegments([segments[2], segments[3]], true);
                });
        
                iconMenu.addEventListener('mouseleave', () => {
                    animRef.current?.playSegments([segments[0], segments[1]], true);
                });
        
                iconMenu.addEventListener('click', () => {
                    animRef.current?.playSegments([segments[4], segments[5]], true);
                });
            }

            Promise.resolve().then(() => 
                flushSync(() => {
                    setMount(true)
                })
            );
        }
    }, [dispatch, mount, name, loop, autoplay, data, buttons, segments, dt]); 

    useEffect(() => {
        if(buttons && buttons[pos] && isAudio[0] && audio && play!==''){
            dispatch(setButton({btnname: name, condition: "play"}))
        }             

        if(buttons[ply].condition === name && aud) {
            setAud(false)
            setTime(Date.now())
            
            setTimeout(plySound, 20);
        }  

        if(buttons && buttons[pos] && buttons[pos].condition === "run") {
            if(dur !== 0 && dur * 1000 < Date.now() - tm) 
                dispatch(setButton({btnname: name, condition: "complete"}))
        }       
    }, [isAudio, audio, aud, ply, dur]); 

    // Cleanup effect
    useEffect(() => {
        return () => {
            // Cleanup animation
            if (animRef.current) {
                animRef.current.destroy();
            }

            // Cleanup sound
            if (soundRef.current) {
                soundRef.current.unload();
            }
        };
    }, []);

    return (
        <div className={name} ref={container} />
    );
};

export default ZipLottieSound;