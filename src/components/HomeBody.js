// HomeBody.js
import React from 'react';
import BodyIntro from './BodyIntro';
import BodyShop from './BodyShop';
import BodyBuild from './BodyBuild';
import BodyEvent from './BodyEvent';

const HomeBody = () => {
  return (
    <>
      <BodyIntro />
      <BodyBuild />
      <BodyShop />
      <BodyEvent />
    </>
  );
}

export default HomeBody;