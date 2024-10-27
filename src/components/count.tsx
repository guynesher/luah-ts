import React, { useEffect, useState, useRef } from 'react';

interface CounterProps {
    start?: number;
    end: number;
}

const Count: React.FC<CounterProps> = ({ start = 0, end }) => {
    const [value, setValue] = useState<number | null>(null);
    const [isMounted, setIsMounted] = useState<boolean>(true);
    const ref = useRef<number>(start);
    var w=((window.innerWidth > 0) ? window.innerWidth : window.screen.width)

    useEffect(() => {
        const Count = () => {
            if (ref.current < end) {
                const result = Math.ceil(ref.current + 1);
                if (result > end) return setValue(end);
                setValue(result);
                ref.current = result;
            }
            setTimeout(Count, 100);
        };
         if (isMounted) {
             Count();
         }
         return () => (setIsMounted(false));
    }, [end]);

    return (
        <div className='counter'>
            <h1 style={{fontSize: w/20, fontWeight: w/3}}>{end>0?value:"0"}</h1>
        </div>
    );
};

export default Count;