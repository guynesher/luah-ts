import { useEffect, useState } from 'react';
import ZipLottieSound from './zipLottieSound';
import { useAppSelector } from '../store/hooks';
import { selectItems } from '../reducers/misSlice';

interface CursorProps {
    pageItem: {
        id: string;
        picWidth: string;
        picLength: string;
        loop: boolean;
        autoplay: boolean;
        animationName: string;
        isAudioPlay: boolean;
        isAudioHoover: boolean;
        isAudioClick: boolean;
        segments: number[];
        audioData: string;
        lineNumber: string;
    };
    w: number;
    onClick: (continueTo: string, className: string) => void;
}

interface Coords {
    x: number;
    y: number;
}

function Cursor({ pageItem, onClick }: CursorProps) {
    const [coords, setCoords] = useState<Coords>({ x: -100, y: -100 });
    let itemsList = useAppSelector(selectItems)
    const pageItems = itemsList && Object.keys(itemsList).length > 0 ? itemsList : null;

    useEffect(() => {
        const handleWindowMouseMove = (event: MouseEvent) => {
            setCoords({
                x: event.clientX,
                y: event.clientY,
            });
        };
        window.addEventListener('mousemove', handleWindowMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleWindowMouseMove);
        };
    }, []);

    const clickHandler = () => {
        const element = document.elementsFromPoint(coords.x, coords.y);
        for (let index = 0; index < element.length; index++) {
            if (element[index].className.toString().split("-")[0] === "Q0101") {
                const itemInstructions = pageItems && Object.keys(pageItems).length > 0 ?
                    pageItems
                        .filter(item => item.animationName === element[index].className)
                        .map(item => item)[0] : "";

                if (itemInstructions.continueTo !== "appear") {
                    onClick(itemInstructions.continueTo, element[index].className);
                } else {
                    onClick("find_" + itemInstructions.lineNumber, element[index].className);
                }
            }
        }
    };

    return (
        <div id={pageItem.id} className='hp-button' style={{
            width: pageItem.picWidth + "%",
            height: pageItem.picLength + "%",
            left: coords.x + 5,
            top: coords.y + 5,
        }}>
            <div className='lottieButton' onClick={() => clickHandler()}>
                <ZipLottieSound
                    loop={pageItem.loop}
                    autoplay={pageItem.autoplay}
                    data={pageItem.animationName}
                    isAudio={[pageItem.isAudioPlay, pageItem.isAudioHoover, pageItem.isAudioClick]}
                    segments={pageItem.segments.map((value:any)=>(value.map((value:any)=>Number(value))))} 
                    name={pageItem.animationName}
                    audioData={pageItem.audioData !== "" ? pageItem.audioData : pageItem.animationName}
                />
            </div>
        </div>
    );
}

export default Cursor;