import { StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { RangeSlider, RangeSliderProps } from "./RangeSlider";

const defaultArgs = {
  min: 0,
  max: 100,
  step: 5,
  variant: "default",
  onChange: (val: { min: number; max: number } | number) =>
    console.log("hello"),
};

const RangeSliderStory = ({ min, max, step, variant }: RangeSliderProps) => {
  const [value, setValue] = useState<number>(0);
  const [doubleValue, setDoubleValue] = useState<{ min: number; max: number }>({
    min: min,
    max: max,
  });

  const handleChange = (val: { min: number; max: number } | number) => {
    console.log("handle change called");
    if (variant === "double" && typeof val === "object") {
      setDoubleValue(val);
    } else if (typeof val === "number") {
      setValue(val);
    }
  };

  return (
    <RangeSlider
      handleChange={handleChange}
      value={variant === "double" ? doubleValue : value}
      min={min}
      max={max}
      step={step}
      variant={variant}
    />
  );
};

export default {
  title: "Components/RangeSlider",
  component: RangeSlider,
  render: RangeSliderStory,
};
type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {
  args: {
    ...defaultArgs,
  },
};
export const Double: Story = {
  args: {
    ...defaultArgs,
    variant: "double",
  },
};
