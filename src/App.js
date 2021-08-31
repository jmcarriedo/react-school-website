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
                <Route path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/programs' component={Programs} />
                <Route path='/educators' component={Educators} />
                <Route path='/admissions' component={Admissions} />
                <Route path='/shop' component={Shop} />
                <Route path='/contact' component={Contact} />
                <Route path='/login' component={Login} />
            </Switch>
        </Router>
        </>
    )
}

export default App
