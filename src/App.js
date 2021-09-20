import React from 'react';
import Navbar from './navbar';
import Header from './Header';
import HowitWorks from "./HowitWorks";
import Useapp from "./Useapp";
import Support from "./Support";
import Sendmoney from "./Sendmoney";
import Contact from "./Contact";
 import Footer from "./Footer";
import {Route} from "react-router-dom"


const App = ()=>{
  return(
    <>
       <Navbar/>
       
       <Route exact path="/">
       <Header/>
       <Support/>
       <Useapp/>
       <HowitWorks/>
       <Sendmoney/>
       <Contact/>
       </Route>
       
       <Route exact path="/about">
       <HowitWorks/>
      
       </Route>

     

      <Route exact path="/services">
      <Sendmoney/>
      </Route>
      

       <Route exact path="/contact">
       <Contact/>
       </Route>

       <Footer/>
       
    </>
  );
};
export default App;