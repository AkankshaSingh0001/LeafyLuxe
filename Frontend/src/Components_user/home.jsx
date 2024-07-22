import React, { useState } from 'react';
import Nav1 from './Nav1';
import Nav2 from './Nav2';
import Nav3 from './Nav3';
import Main from './Main';

const Home = () => {
  return (
    <div>
      <div className='Nav'>
        <Nav1></Nav1>
        <Nav2></Nav2>
        <Nav3></Nav3>
        <Main></Main>
      </div>
    </div>
  );
};

export default Home;