import React, { useCallback, useEffect, useState, useRef } from "react";
import styles from "./MultiRangeSlider.module.css";
import { convertPriceVnd } from "../ProductDetail/ProductDetail";

interface MultiRangeSliderProps {
  min: number;
  max: number;
  onChange: (values: { min: number; max: number }) => void;
}

const MultiRangeSlider: React.FC<MultiRangeSliderProps> = ({
  min,
  max,
  onChange,
}) => {
  const step = 10000;
  const [minVal, setMinVal] = useState<number>(min);
  const [maxVal, setMaxVal] = useState<number>(max);
  const minValRef = useRef<number>(min);
  const maxValRef = useRef<number>(max);
  const range = useRef<HTMLDivElement | null>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal]);

  return (
    <div className={styles.container}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - step);
          setMinVal(value);
          minValRef.current = value;
        }}
        className={`${styles.thumb} ${styles["thumb--left"]}`}
        style={{ zIndex: minVal > max - step ? 5 : undefined }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + step);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className={`${styles.thumb} ${styles["thumb--right"]}`}
      />

      <div className={styles.slider}>
        <div className={styles["slider__track"]} />
        <div ref={range} className={styles["slider__range"]} />
        <div className={styles["slider__left-value"]}>
          {convertPriceVnd(minVal)} đ
        </div>
        <div className={styles["slider__right-value"]}>
          {convertPriceVnd(maxVal)} đ
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
