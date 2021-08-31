import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Programs from './pages/programs';
import Educators from './pages/educators';
import Admissions from './pages/admissions';
import Contact from './pages/contact';
import Login from './pages/login';
import Shop from './pages/shop';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/index';

const App = () => {
    return (
        <>
        <Router>
            <Sidebar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/react-school-website/about' exact component={About} />
                <Route path='/react-school-website/programs' component={Programs} />
                <Route path='/react-school-website/educators' component={Educators} />
                <Route path='/react-school-website/admissions' component={Admissions} />
                <Route path='/react-school-website/shop' component={Shop} />
                <Route path='/react-school-website/contact' component={Contact} />
                <Route path='/react-school-website/login' component={Login} />
            </Switch>
        </Router>
        </>
    )
}

export default App
