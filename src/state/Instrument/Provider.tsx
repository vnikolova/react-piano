import { FC, useState, PropsWithChildren } from "react";
import { DEFAULT_INSTRUMENT } from "../../domain/sound";
import { InstrumentContext } from "./Context";

export const InstrumentContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [instrument, setInstrument] = useState(DEFAULT_INSTRUMENT);

  return (
    <InstrumentContext.Provider value={{ instrument, setInstrument }}>
      {children}
    </InstrumentContext.Provider>
  );
};
