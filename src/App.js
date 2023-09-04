import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Navbarr from './components/navbar';
import BannerCorosil from './components/bannercorosil';
import Mainsec from './components/main';
import Heading from './components/headinges';


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
function App() {
  return (
    <>
    <Navbarr />
    {/* <BannerCorosil /> */}
    <Mainsec />
    </>
  );
}

export default App;