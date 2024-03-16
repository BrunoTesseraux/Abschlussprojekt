import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames"; // Import classnames library
import "./MultiRangeSlider.scss";

const MultiRangeSlider = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);
  const prevMinVal = useRef(min);
  const prevMaxVal = useRef(max);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current && minValRef.current && range.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxVal);

      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [min, max, minVal, maxVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current && range.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxVal);

      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    if (minVal !== prevMinVal.current || maxVal !== prevMaxVal.current) {
      onChange({ min: minVal, max: maxVal });
      prevMinVal.current = minVal;
      prevMaxVal.current = maxVal;
    }
  }, [minVal, maxVal, onChange]);

  const handleMinChange = (event) => {
    const value = Math.min(+event.target.value, maxVal - 1);
    setMinVal(value);
  };

  const handleMaxChange = (event) => {
    const value = Math.max(+event.target.value, minVal + 1);
    setMaxVal(value);
  };

  return (
    <div className="container">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={handleMinChange}
        className={classnames("thumb thumb--zindex-3", {
          "thumb--zindex-5": minVal > max - 100
        })}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={handleMaxChange}
        className="thumb thumb--zindex-4"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{minVal}$</div>
        <div className="slider__right-value">{maxVal}$</div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MultiRangeSlider;
