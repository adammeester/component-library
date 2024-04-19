import React from "react";
import { inputVariants, styles } from "./RangeSlider.css";

export type RangeValueType = { min: number; max: number } | number;

type RangeSliderOnChange =
  | ((value: number) => void)
  | ((value: { min: number; max: number }) => void);

export type RangeSliderProps = {
  min?: number;
  max: number;
  step: number;
  value: RangeValueType;
  handleChange: RangeSliderOnChange;
  variant?: "default" | "double";
};

export const RangeSlider = ({
  step,
  min = 0,
  max,
  handleChange,
  value,
  variant = "default",
}: RangeSliderProps) => {
  const isDoubleVariant = variant === "double";

  if (isDoubleVariant && typeof value !== "object")
    throw new Error("Value must be in the format { min: number, max: number }");

  if (!isDoubleVariant && typeof value === "object")
    throw new Error("Value must be a number");

  const minValue = typeof value === "object" ? value.min : value;
  const maxValue = typeof value === "object" ? value.max : value;

  const handleMinChange = (e: any) => {
    e.preventDefault();
    if (typeof value === "object" && "min" in value && isDoubleVariant) {
      const newMinVal = Math.min(+e.target.value, maxValue - step);
      if (newMinVal > value.max || newMinVal < 0) return;
      handleChange({ min: newMinVal, max: value.max });
    } else if (typeof value === "number") {
      handleChange(+e.target.value);
    }
  };
  const handleMaxChange = (e: any) => {
    e.preventDefault();
    const newMaxVal = Math.max(+e.target.value, minValue + step);
    if (typeof value === "object" && "max" in value && isDoubleVariant) {
      if (newMaxVal < value.min) return;
      handleChange({ min: value.min, max: newMaxVal });
    }
  };

  let minPos, maxPos;
  if (minValue <= maxValue || minValue < min) {
    minPos = ((minValue - min) / (max - min)) * 100;
  }
  if (maxValue >= minValue || maxValue > max) {
    maxPos = ((maxValue - min) / (max - min)) * 100;
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputsContainer}>
        <input
          className={inputVariants({ type: variant })}
          type="range"
          value={minValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMinChange}
        />
        {isDoubleVariant ? (
          <input
            className={inputVariants({ type: variant })}
            type="range"
            value={maxValue}
            min={min}
            max={max}
            step={step}
            onChange={handleMaxChange}
          />
        ) : null}
      </div>
      <div className={styles.controlWrapper}>
        <div className={styles.control} style={{ left: `${minPos}%` }} />
        <div className={styles.rail}>
          <div
            className={styles.innerRail}
            style={
              isDoubleVariant
                ? { left: `${minPos}%`, right: `${100 - maxPos}%` }
                : { left: `${0}%`, right: `${max - minPos}%` }
            }
          />
        </div>
        {isDoubleVariant ? (
          <div className={styles.control} style={{ left: `${maxPos}%` }} />
        ) : null}
      </div>
    </div>
  );
};
