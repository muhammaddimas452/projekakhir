import React, { Component } from 'react';
import Nav from '../Nav';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import Content from '../Content';

import { BrowserRouter, Route } from 'react-router-dom';
import Switch from 'react-switch';
import Dashboard from '../Content/Dashboard';
import { Fragment } from 'react/cjs/react.production.min';

class Index extends Component {
    render() {
        return (
         
                <div>
        
                        <Nav />
                        <Sidebar />
                        {/* <Route exact path="/dashboard"><Content /></Route> */}
                        <Content />
                        <Footer />
            
                </div>

        );
    }
}

export default Index;