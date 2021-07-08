import React from 'react';

const Sushi = (props) => {
  const { name, price, img_url, eaten } = props.item;

  return (
    <div className="sushi">
      <div
        className="plate"
        onClick={() => !eaten && props.handleClick(props.item)}
      >
        {eaten ? null : <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;
