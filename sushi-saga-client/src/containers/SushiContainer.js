import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const NUM_ITEMS = 4;

const SushiContainer = (props) => {
  let currentIndex = 0;

  return (
    <Fragment>
      <div className="belt">
        {props.sushi.slice(currentIndex, NUM_ITEMS).map((item) => (
          <Sushi item={item} key={item.id}></Sushi>
        ))}
        <MoreButton />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
