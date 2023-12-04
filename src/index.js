import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './index.css';
import Home from './Home';
import About from './About';
import OurWork from './OurWork';
import Insights from './Insights';
import ShopIntro from './ShopIntro';
import Error404 from './error/404';
import Anim from './anim/Anim';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' Component={ (props)=><Home selectedMenu={1}/> } />
      <Route path='/about' Component={ (props)=><About  selectedMenu={1}/> } />
      <Route path="/our-work" Component={ (props)=><OurWork selectedMenu={2}/> } />
      <Route path='/insights' Component={ (props)=><Insights selectedMenu={3}/> } />
      <Route path='/shop' Component={ (props)=><ShopIntro selectedMenu={4}/> } />
      <Route path='/error-404' Component={ Error404} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

