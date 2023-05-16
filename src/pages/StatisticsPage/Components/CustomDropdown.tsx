import { useEffect, useRef, useState } from "react";
import styles from "../styles/CustomDropdown.module.scss";
import useApp from "../../../hooks/useApp";

type CustomDropdownProps = {
  defaultSelection: string;
  possibleOptions: string[];
  customOnChange: React.Dispatch<React.SetStateAction<string>>;
};

const CustomDropdown = ({
  defaultSelection,
  possibleOptions,
  customOnChange,
}: CustomDropdownProps) => {
  const { darkMode } = useApp();

  const [openOptions, setOpenOptions] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(defaultSelection);
  let selectionRef = useRef<HTMLDivElement>(null);
  let optionRef = useRef<HTMLDivElement>(null);

  const Options_Style = {
    background: darkMode ? "#001530" : "#fbfbfb",
  };

  const updateSelection = (choice: string) => {
    setSelectedChoice(choice);
    customOnChange(choice);
    setOpenOptions(false);
  };

  useEffect(() => {
    const handleClick = (e: Event) => {
      if (openOptions) {
        if (!selectionRef?.current?.contains(e.target as HTMLDivElement)) {
          setOpenOptions(false);
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  // useEffect(() => {
  //   const handleKeyPress = (event: KeyboardEvent) => {
  //     if (event.key === "Enter") {
  //       selectionRef?.current?.click();
  //     }
  //   };

  //   document.addEventListener("keydown", handleKeyPress);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyPress);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleKeyPress = (event: KeyboardEvent) => {
  //     if (event.key === "Enter") {
  //       optionRef?.current?.click();
  //     }
  //   };

  //   document.addEventListener("keydown", handleKeyPress);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyPress);
  //   };
  // }, []);

  return (
    <>
      <div className={styles.CustomDropdown}>
        <div
          className={styles.Selection}
          tabIndex={0}
          onClick={() => setOpenOptions(!openOptions)}
          ref={selectionRef}
        >
          <p>{selectedChoice}</p>
        </div>
        {openOptions ? (
          <div className={styles.Options} style={Options_Style}>
            {possibleOptions.map((possibleOption) => {
              return (
                <p
                  tabIndex={0}
                  onClick={() => updateSelection(possibleOption)}
                  key={possibleOption}
                  ref={optionRef}
                >
                  {possibleOption}
                </p>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default CustomDropdown;
