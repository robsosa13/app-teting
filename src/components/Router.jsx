import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';

const StaticSite = () => (
    <Router>
        <div>
        <h1>Hello Router </h1>
        <nav>
            <ul>
                <li>
                    <Link to="/" >
                        Home
                    </Link>

                </li>
                <li>   
                       <Link to="/About">About 
            
                </Link>
                </li>
                <li>  
                        <Link to="/Services">Service
                </Link>
                </li>
                <li>  
                        <Link to="/Contact">Contact
                </Link>
                </li>
            </ul>
        </nav>
        <hr/>
        <Route path ="/" component={Home}></Route>
        <Route path ="/About" component={About}></Route>
        <Route path ="/Services" component={Services}></Route>
        <Route path ="/Contact" component={Contact}></Route>

        </div>
        
    </Router>

)
const Home = () => (
    <div>
        <h2>This is Home</h2>
    </div>
)
const About = () => (
    <div>
        <h2>This is About</h2>
    </div>
)
const Services = () => (
    <div>
        <h2>This is Services</h2>
    </div>
)
const Contact = () => (
    <div>
        <h2>This is Contact</h2>
    </div>
)
export default StaticSite