import { FunctionComponent } from "react";
import clsx from "clsx";
import { NoteType } from "../../domain/note";
import styles from "./Key.module.css";
import { usePressObserver } from "../PressObserver";

type KeyProps = {
  type: NoteType;
  pitch: string;
  label: string;
  disabled: boolean;
  onUp: PressCallback;
  onDown: PressCallback;
};

type PressCallback = () => void;

export const Key: FunctionComponent<KeyProps> = ({
  type,
  label,
  pitch,
  onDown,
  onUp,
  ...rest
}) => {
  const pressed = usePressObserver({
    watchKey: label,
    onStartPress: onDown,
    onFinishPress: onUp,
  });

  return (
    <button
      className={clsx(
        styles.key,
        styles[type],
        pressed && styles["is-pressed"]
      )}
      type="button"
      onMouseDown={onDown}
      onTouchStart={onDown}
      onTouchEnd={onUp}
      onMouseUp={onUp}
      {...rest}
    >
      <div className={styles.label}>
        <span>{pitch}</span>
        <span className={styles.labelKeyboard}>{label}</span>
      </div>
    </button>
  );
};
