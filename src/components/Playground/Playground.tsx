import { InstrumentContextProvider } from "../../state/Instrument";
import { InstrumentSelector } from "../InstrumentSelector";
import { KeyboardWithInstrument } from "../Keyboard";
import {
  Alert,
  AlertIcon,
  Stack,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export const Playground = () => {

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <InstrumentContextProvider>
      {windowSize[0] < 720 && <div>
          <Alert width='80%' alignItems='center' ml='10%' mb={10} color={'black'} status='info' variant='subtle'>
            <AlertIcon />
            We notice your screen is a bit too small. Please tilt your device in landscape mode for a better user experience.
          </Alert>
        </div>}
      <div className="playground">
        <KeyboardWithInstrument />
        <InstrumentSelector />
      </div>   
    </InstrumentContextProvider>
  );
};
