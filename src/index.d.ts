
declare module 'react-range-slider-input' {
  import React from 'react';

  export interface RangeSliderInputProps {
    id?: string;
    className?: string;
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: number[];
    value?: number[];
    onInput?: (value: number[]) => void;
    onThumbDragStart?: () => void;
    onThumbDragEnd?: () => void;
    onRangeDragStart?: () => void;
    onRangeDragEnd?: () => void;
    disabled?: boolean;
    rangeSlideDisabled?: boolean;
    thumbsDisabled?: boolean;
    orientation?: 'horizontal' | 'vertical';
  }

  export default function RangeSliderInput(props: RangeSliderInputProps): JSX.Element;
}