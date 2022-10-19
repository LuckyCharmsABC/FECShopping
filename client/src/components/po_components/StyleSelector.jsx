import React from 'react';

const StyleSelector = ({ productStyles, selectStyle }) => {
  // const [isSelected, setIsSelected] = useState(false);
  const highlight = (id) => {
    document.getElementById(id).style.border = 'solid yellow';
  };

  return (
    <div>
      <p>
        <b>STYLE</b>
      </p>
      <div className="styleList">
        {productStyles.map((style) => (
          <div
            key={style.style_id}
            id={style.style_id}
            role="button"
            onClick={() => { selectStyle(style); highlight(style.style_id); }}
            onKeyPress={() => {}}
            tabIndex={0}
          >
            <img width="50" height="70" alt="x" src={style.photos[0].thumbnail_url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;
