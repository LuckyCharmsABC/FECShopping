import React from 'react';

const AdditionalInfo = ({ product }) => {
  const renderFeatures = () => {
    if (product.features) {
      return (
        <div className="AddInfo2">
          <div className="divider-2" />
          <div className="features">
            <ul>
              {product.features.map((feature) => (
                <li key={feature.feature}>{`${feature.feature}: ${feature.value}`}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
    return <div />;
  };

  return (
    <div className="additional-info">
      <div className="slogan-section">
        <b>{product.slogan}</b>
        <p>{product.description}</p>
      </div>
      { renderFeatures() }
    </div>
  );
};

export default AdditionalInfo;
