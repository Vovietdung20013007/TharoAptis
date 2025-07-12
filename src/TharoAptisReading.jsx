import React, { useState, useCallback } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from "./TharoAptisReading.module.css";

const DEFAULT_CHOICES = [
  "1.You must return your keys to the office manager after you get back.",
  "2.You should arrive at the main office by 6.30am and collect your keys.",
  "3.You must follow the route on the map to deliver packages	.",
  "4.When you have completed all deliveries, return to your office.",
  "5.In the office, you can also collect a map of your route."
];
const DEFAULT_CORRECT_ORDER = [1, 4, 2, 3, 0];
const DEFAULT_TOPIC = "Delivery man";
const ItemTypes = { CHOICE: "choice" };

function Choice({ text, index, isDropped }) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CHOICE,
    item: { index },
    canDrag: !isDropped,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <div
      ref={drag}
      className={styles.choice}
      style={{ opacity: isDragging ? 0.5 : 1, background: isDropped ? "#e0e0e0" : "#fff", cursor: isDropped ? "not-allowed" : "grab" }}
    >
      {text}
    </div>
  );
}

function DroppableSlot({ value, onDrop, index, isCorrect, isFilled, choices }) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.CHOICE,
    drop: (item) => onDrop(item.index, index),
    canDrop: (item) => value === null,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  let borderColor = "#bbb";
  let background = isFilled ? "#f0f7ff" : isOver && canDrop ? "#e6f7ff" : "#f5f5f5";
  if (isFilled) {
    borderColor = isCorrect ? "#2ecc40" : "#ff4136";
    background = isCorrect ? "#eaffea" : "#ffeaea";
  }
  return (
    <div
      ref={drop}
      className={styles["droppable-slot"]}
      style={{
        borderColor,
        background,
      }}
      onDoubleClick={() => value !== null && onDrop(null, index)}
      title={value !== null ? "Double click to remove" : ""}
    >
      {value !== null ? choices[value] : ""}
    </div>
  );
}

const TharoAptisReading = ({ topic = DEFAULT_TOPIC, choices = DEFAULT_CHOICES, correctOrder = DEFAULT_CORRECT_ORDER }) => {
  const [slotValues, setSlotValues] = useState([null, null, null, null, null]);
  const used = slotValues.filter((v) => v !== null);
  const availableChoices = choices.map((c, i) => ({
    text: c,
    index: i,
    isDropped: used.includes(i),
  }));

  const handleDrop = useCallback((choiceIndex, slotIndex) => {
    setSlotValues((prev) => {
      const newArr = [...prev];
      if (choiceIndex === null) {
        newArr[slotIndex] = null;
      } else {
        if (newArr[slotIndex] !== null) return prev;
        if (prev.includes(choiceIndex)) return prev;
        newArr[slotIndex] = choiceIndex;
      }
      return newArr;
    });
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{topic}</h2>
        <div className={styles["question-box"]}>
          <div className={styles["droppable-list"]}>
            {slotValues.map((val, idx) => (
              <DroppableSlot
                key={idx}
                value={val}
                index={idx}
                onDrop={handleDrop}
                isFilled={val !== null}
                isCorrect={val !== null && val === correctOrder[idx]}
                choices={choices}
              />
            ))}
          </div>
          <div className={styles["choices-list"]}>
            {availableChoices.map(({ text, index, isDropped }) =>
              !isDropped ? (
                <Choice key={index} text={text} index={index} isDropped={isDropped} />
              ) : null
            )}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default TharoAptisReading; 