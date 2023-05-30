import { useEffect, useRef, useState } from "react";
import styles from "./CustomDropdown.module.scss";
import dropdown_icon_opened from "./images/dropdown_icon_opened.png";
import dropdown_icon_closed from "./images/dropdown_icon_closed.png";
import useApp from "../../hooks/useApp";

type CustomDropdownProps = {
  defaultSelection: string;
  possibleOptions: any[];
  customOnChange: React.Dispatch<React.SetStateAction<any>>;
  customDropdownTitle?: string;
};

const CustomDropdown = ({
  defaultSelection,
  possibleOptions,
  customOnChange,
  customDropdownTitle = "",
}: CustomDropdownProps) => {
  const { darkMode } = useApp();

  const [openOptions, setOpenOptions] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(defaultSelection);
  let selectionRef = useRef<HTMLDivElement>(null);
  let optionRef = useRef<HTMLDivElement>(null);

  const Options_Style = {
    background: darkMode ? "#001128" : "#efefef",
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
          <div className={styles.text_header}>
            {customDropdownTitle?.length > 0 ? (
              <p className={styles.season_text}>{customDropdownTitle}</p>
            ) : (
              <></>
            )}
            <p className={styles.selected_option}>{selectedChoice}</p>
          </div>
          <img
            src={openOptions ? dropdown_icon_opened : dropdown_icon_closed}
            alt="dropdown icon"
          />
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
