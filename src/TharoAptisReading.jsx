import React, { useState, useCallback } from "react";
import styles from "./TharoAptisReading.module.css";

const DEFAULT_CHOICES = [
  "1.Now things have changed, actors and filmmakers can earn millions of dollars from film production.",
  "2.Old movies were very different from today's movies.",
  "3.Not only did these technological limitations exist, the movies were also low budget.",
  "4.Due to the lack of money, actors also had few opportunities to earn money through acting.",
  "5.That's because the movies were only in black and white, and sometimes without sound."
];
const DEFAULT_CORRECT_ORDER = [1, 4, 2, 3, 0];
const DEFAULT_TOPIC = "Delivery man";
const DEFAULT_TITLE = "";

function Choice({ text, index, isDropped, onClick }) {
  return (
    <div
      className={styles.choice}
      style={{ 
        background: isDropped ? "#e0e0e0" : "#fff", 
        cursor: isDropped ? "not-allowed" : "pointer",
        opacity: isDropped ? 0.6 : 1
      }}
      onClick={() => !isDropped && onClick(index)}
    >
      {text}
    </div>
  );
}

function DroppableSlot({ value, onRemove, index, isCorrect, isFilled, choices }) {
  let borderColor = "#bbb";
  let background = isFilled ? "#f0f7ff" : "#f5f5f5";
  if (isFilled) {
    borderColor = isCorrect ? "#2ecc40" : "#ff4136";
    background = isCorrect ? "#eaffea" : "#ffeaea";
  }
  return (
    <div
      className={styles["droppable-slot"]}
      style={{
        borderColor,
        background,
      }}
      onDoubleClick={() => value !== null && onRemove(index)}
      title={value !== null ? "Double click to remove" : ""}
    >
      {value !== null ? choices[value] : ""}
    </div>
  );
}

const TharoAptisReading = ({ topic = DEFAULT_TOPIC,title = DEFAULT_TITLE , choices = DEFAULT_CHOICES, correctOrder = DEFAULT_CORRECT_ORDER }) => {
  const [slotValues, setSlotValues] = useState([null, null, null, null, null]);
  const used = slotValues.filter((v) => v !== null);
  const availableChoices = choices.map((c, i) => ({
    text: c,
    index: i,
    isDropped: used.includes(i),
  }));

  const handleChoiceClick = useCallback((choiceIndex) => {
    setSlotValues((prev) => {
      const newArr = [...prev];
      // Tìm vị trí trống đầu tiên
      const emptySlotIndex = newArr.findIndex(val => val === null);
      if (emptySlotIndex !== -1) {
        newArr[emptySlotIndex] = choiceIndex;
      }
      return newArr;
    });
  }, []);

  const handleRemove = useCallback((slotIndex) => {
    setSlotValues((prev) => {
      const newArr = [...prev];
      newArr[slotIndex] = null;
      return newArr;
    });
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{topic}</h2>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles["question-box"]}>
        <div className={styles["droppable-list"]}>
          {slotValues.map((val, idx) => (
            <DroppableSlot
              key={idx}
              value={val}
              index={idx}
              onRemove={handleRemove}
              isFilled={val !== null}
              isCorrect={val !== null && val === correctOrder[idx]}
              choices={choices}
            />
          ))}
        </div>
        <div className={styles["choices-list"]}>
          {availableChoices.map(({ text, index, isDropped }) =>
            !isDropped ? (
              <Choice key={index} text={text} index={index} isDropped={isDropped} onClick={handleChoiceClick} />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default TharoAptisReading; 