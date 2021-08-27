import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Rooms from './pages/rooms';
import Programs from './pages/programs';
import Educators from './pages/educators';
import Admissions from './pages/admissions';
import Contact from './pages/contact';
import Login from './pages/login';
import Shop from './pages/shop';
import Home from './pages/index';

const App = () => {
    return (
        <Router basename="/react-school-website">
        <Switch>
            <Route path='/index' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/rooms' component={Rooms} />
            <Route path='/programs' component={Programs} />
            <Route path='/educators' component={Educators} />
            <Route path='/admissions' component={Admissions} />
            <Route path='/shop' component={Shop} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />
        </Switch>
    </Router>
    )
}

export default App
