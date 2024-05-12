
declare module 'react-range-slider-input' {
  import React from 'react';

  export interface RangeSliderInputProps {
    min: number;
    max: number;
    step?: number;
    value: number;
    onChange: (value: number) => void;
    label: string;
    className?: string;
  }

  export default function RangeSliderInput(props: RangeSliderInputProps): JSX.Element;
}