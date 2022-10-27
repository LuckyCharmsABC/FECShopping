import React, { useState } from 'react';
import _ from 'underscore';

const Characteristic = ({
  i,
  characteristics,
  setCharacteristics,
  qualities,
  data,
  char,
}) => {
  const [selected, setSelected] = useState('None Selected');
  return (
    <div className="review-radio-select-bordered">
      {`${i} - ${selected}`}
      <fieldset className="review-radio-select">
        {_.map([1, 2, 3, 4, 5], (num) => (
          <div key={num}>
            <input
              type="radio"
              name={i}
              className="char-btn"
              id={num}
              value={num}
              onChange={() => {
                const characteristic = {};
                characteristic[char.id] = num;
                setCharacteristics(_.extend(characteristics, characteristic));
                setSelected(qualities[i][num - 1]);
                if (_.size(characteristics) === _.size(data.characteristics)) {
                  document.getElementById('empty-characteristics').style.display = 'none';
                }
              }}
            />
            <label htmlFor={num}>{num}</label>
          </div>
        ))}
      </fieldset>
      <div className="char-desc">
        {`1 - ${qualities[i][0]} `}
      </div>
      <div className="char-desc">
        {`5 - ${qualities[i][4]}`}
      </div>
    </div>
  );
};

export default Characteristic;
