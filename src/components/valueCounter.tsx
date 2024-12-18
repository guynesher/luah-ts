import { Text } from '@aws-amplify/ui-react';
import React, { useEffect, useRef, useState } from 'react';

interface CounterProps {
    start?: number;
    end: number;
}

const ValueCounter: React.FC<CounterProps> = ({ start = 0, end}) => {
    const [value, setValue] = useState<number | null>(null);
    const [runValue, setRunValue] = useState<boolean>(true);
    const ref = useRef<number>(start);

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
        if (runValue) {
            setRunValue(false)
            Count();
        }
    }, [end]);

    return (
        <Text
        fontFamily="sans-serif"
        fontSize="40px"
        fontWeight="700"
        color="blue.60"
        lineHeight="25px"
        textAlign="center"
        display="block"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        whiteSpace="pre-wrap"
      >
            {value}
        </Text>
    );
};

export default ValueCounter;