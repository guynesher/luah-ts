import React, { useEffect, useState } from 'react';
import { Loader } from '@aws-amplify/ui-react';
import ReactPlayer from 'react-player';
import { useDispatch } from 'react-redux';
import { getUrl } from 'aws-amplify/storage';
import { setButton } from '../reducers/misSlice';

interface VideoPlayerProps {
    videoData: string;
    w: string | number;
    h: string | number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoData, w, h }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [fileURL, setFileURL] = useState<string>("");
    const dispatch = useDispatch();

    const endedHandler = () => {
        dispatch(setButton({btnname:videoData, condition:"complete"}))
    };

    useEffect(() => {
        const setURLs = async (path: string) => {
            const dt = await getUrl({path:`${path}.mp4`});
            setFileURL(dt.url.toString());
            setLoading(false);
            dispatch(setButton({btnname:videoData, condition:"on"}))
        };
        setURLs(`public/media/video/${videoData}`);
    }, [dispatch, videoData]);

    return (
        loading ? (<Loader />) : 
            <ReactPlayer url={fileURL} playing={true}
                width={w} height={h} onEnded={endedHandler} />
    );
};

export default VideoPlayer;