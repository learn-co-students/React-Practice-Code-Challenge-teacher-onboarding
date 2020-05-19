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

  function getSushi() {
    return props.sushi
      .slice(currentIndex, NUM_ITEMS + currentIndex)
      .map((item) => (
        <Sushi item={item} key={item.id} handleClick={eatSushi}></Sushi>
      ));
  }

  return (
    <Fragment>
      <div className="belt">
        {getSushi()}
        <MoreButton handleClick={showNext} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
