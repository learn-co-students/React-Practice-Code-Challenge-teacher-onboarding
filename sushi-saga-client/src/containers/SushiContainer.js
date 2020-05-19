import React, { Fragment, useState } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const NUM_ITEMS = 4;

const SushiContainer = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function showNext() {
    setCurrentIndex(currentIndex + NUM_ITEMS);
  }

  function eatSushi(item) {
    props.eatSushi(item);
  }

  return (
    <Fragment>
      <div className="belt">
        {props.sushi
          .slice(currentIndex, NUM_ITEMS + currentIndex)
          .map((item) => (
            <Sushi item={item} key={item.id} handleClick={eatSushi}></Sushi>
          ))}
        <MoreButton handleClick={showNext} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
