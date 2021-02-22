import React , { Component } from 'react';
import { BrowserRouter , Route  , Switch} from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Index from './Components/Index/Index';
import Work from './Components/Work/Work';
import Portfolie from './Components/Portfolie/Portfolie';
import Profile from './Components/Profile/Profile';
import About from './Components/About/About';
import Website from './Components/Websites/Website';


class App extends Component { 
    render() { 
        return (
            <BrowserRouter>
                <Navbar/>
                <Switch>
                <Route exact path ='/' component ={Index}/>
                <Route path ='/Contact' component ={Contact}/>
                <Route path ='/Work' component ={Work}/>
                <Route path ='/Portfolio' component ={Portfolie}/>
                <Route path ='/Profile' component ={Profile}/>
                <Route path ='/About' component ={About}/>
                <Route path ='/Website' component ={Website}/>
                <Route path = '/:test_params' component = {Index} />
                </Switch>
            </BrowserRouter>
        )                  
    }
}



export default App;
