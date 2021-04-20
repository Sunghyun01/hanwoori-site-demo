import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import Section from './section';
import Footer from './footer';
import './css/default.css';

const Layout = props => {
  return (
    <>
        <div className={'app'}>
            <Header/>
            <Sidebar/>
            <Section/>
            <Footer/>
        </div>
    </>
  )
}
 
export default Layout;