// HomeBody.js
import React from 'react';
import BodyIntro from './BodyIntro';
import BodyShop from './BodyShop';
import BodyAbout from './BodyAbout';
import BodyEvent from './BodyEvent';

const HomeBody = () => {
  return (
    <>
      <BodyIntro />
      <BodyShop />
      <BodyAbout />
      <BodyEvent />
    </>
  );
}

export default HomeBody;