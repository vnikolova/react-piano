import { useInstrument } from "../../state/Instrument";
import { SoundfontProvider } from "../adapters/Soundfont";
import { useAudioContext } from "../AudioContextProvider";
import { Keyboard } from "../Keyboard";

export const KeyboardWithInstrument = () => {
  const AudioContext = useAudioContext();
  const { instrument } = useInstrument();

  return (
    <SoundfontProvider
      // @ts-ignore: Object is possibly 'null'.
      AudioContext={AudioContext}
      instrument={instrument}
      render={(props) => <Keyboard {...props} />}
    />
  );
};
