import { ChangeEvent } from "react";
import { InstrumentName } from "soundfont-player";
import { Select, FormControl, FormLabel } from '@chakra-ui/react'
import { useInstrument } from "../../state/Instrument";
import { options } from "./options";
import styles from "./InstrumentSelector.module.css";

export const InstrumentSelector = () => {
  const { instrument, setInstrument } = useInstrument();
  const updateValue = ({ target }: ChangeEvent<HTMLSelectElement>) =>
    setInstrument(target.value as InstrumentName);
  return (
    <FormControl className={styles.wrapper}>
      <FormLabel>Select your instrument</FormLabel>
      <Select
      variant='outline'
      bg={'white'}
      color={'black'}
      onChange={updateValue}
      value={instrument}
      className={styles.instruments}
    >
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Select>
    </FormControl>

  );
};
