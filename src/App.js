import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Programs from './pages/programs';
import Educators from './pages/educators';
import Admissions from './pages/admissions';
import Contact from './pages/contact';
import Login from './pages/login';
import Shop from './pages/shop';
import Home from './pages/index';


import Sidebar from './components/Sidebar/Sidebar';
import HomePage from './components/Home';
import AboutPage from './components/About';
import ProgramsPage from './components/Programs';
import EducatorsPage from './components/Educators';
import AdmissionsPage from './components/Admissions';
import ShopPage from './components/Shop';
import ContactPage from './components/Contact';
import Loginform from './components/Loginform';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
        <Router>
            <Sidebar />
            <Switch>
                <Route path='/' exact component={Home} />
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
