import { Button } from '@aws-amplify/ui-react';
import React, { useEffect, useState } from 'react';
import ZipLottieBTN from './zipLottieBtn';

interface PageItem {
    id: string;
    picWidth: string;
    picLength: string;
    picPositionX: string;
    picPositionY: string;
    continueTo: string;
    animationName: string;
    loop: boolean;
    autoplay: boolean;
    isAudioPlay: boolean;
    isAudioHoover: boolean;
    isAudioClick: boolean;
    segments: number[];
    audioData: string;
}

interface MovingBtnProps {
    pageItem: PageItem;
    w: number;
    onClick: (continueTo: string, animationName: string) => void;
}

const MovingBtn: React.FC<MovingBtnProps> = ({ pageItem, w, onClick }) => {
    const [section, setSection] = useState<number>(0);
    const dur = 15000;
    //console.log(JSON.parse(pageItem.segments.toString()))
    useEffect(() => {
        const intervalId = setInterval(myTimer, dur);
        return () => clearInterval(intervalId);
        
        function myTimer() {
            setSection(prevSection => (prevSection === 0 ? 1 : 0));
        }
    }, [dur]);

    useEffect(() => {
        const posX = 500;
        const moveSection: [Keyframe[], Keyframe[]] = [
            [
                { transform: `translate(${posX - 1500}px, 0px)` },
                { transform: `translate(${posX + 500}px, 0px)` }
            ],
            [
                { transform: `translate(${posX - 1500}px, 0px)` },
                { transform: `translate(${posX + 500}px, 0px)` }
            ]
        ];

        const move = document.getElementById(pageItem.id);
        move?.animate(moveSection[section], {
            duration: dur + 100,
            iterations: 1,
        });

    }, [w, section, pageItem, dur]);

    return (
        <div
            key={pageItem.id}
            id={pageItem.id}
            className='hp-button'
            style={{
                width: `${pageItem.picWidth}%`,
                height: `${pageItem.picLength}%`,
                right: `${pageItem.picPositionX}%`,
                top: `${pageItem.picPositionY}%`
            }}
        >
            <Button
                backgroundColor="transparent"
                className='lottieButton'
                onClick={() => onClick(pageItem.continueTo, pageItem.animationName)}
            >
                <ZipLottieBTN
                    loop={pageItem.loop}
                    autoplay={pageItem.autoplay}
                    data={pageItem.animationName}
                    isAudio={[pageItem.isAudioPlay, pageItem.isAudioHoover, pageItem.isAudioClick]}
                    segments={JSON.parse(pageItem.segments.toString())}//pageItem.segments.map((value:any)=>(value.map((value:any)=>Number(value))))} 
                    name={pageItem.animationName}
                    audioData={pageItem.audioData !== "" ? pageItem.audioData : pageItem.animationName}
                />
            </Button>
        </div>
    );
};

export default MovingBtn;