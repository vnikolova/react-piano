import { InstrumentContextProvider } from "../../state/Instrument";
import { InstrumentSelector } from "../InstrumentSelector";
import { KeyboardWithInstrument } from "../Keyboard";
import {
  Alert,
  AlertIcon
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export const Playground = () => {

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const minSize = 380;
  const tiltScreenMessage = "We notice your screen is a bit too small. Please tilt your device in landscape mode for a better user experience.";
  const unsupportedMessage = "React Piano is not supported on screen sizes smaller than 380px. Please try tilting your device in landscape mode or use another device."

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
      {windowSize[0] < 540 && <div>
          <Alert width='80%' alignItems='center' ml='10%' mb={10} color={'black'} status='info' variant='subtle'>
            <AlertIcon />
            {windowSize[0] < minSize ? unsupportedMessage : tiltScreenMessage }
          </Alert>
        </div>}
      {windowSize[0] > minSize && <div className="playground">
        <KeyboardWithInstrument />
        <InstrumentSelector />
      </div>}
    </InstrumentContextProvider>
  );
};
