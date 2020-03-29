import React from 'react';
import { Link, Route } from 'react-router-dom'
import Main from './Main'

const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <div className="navigation-container">
                    <Link to="/" className="navigation-container__item"><i className="fas fa-crop-alt"></i></Link>
                    <Link to="/1" className="navigation-container__item"><i className="fas fa-th-large"></i></Link>
                    <Link to="/2" className="navigation-container__item"><i className="fas fa-map-marker-alt"></i></Link>
                    <Link to="/3" className="navigation-container__item"><i className="far fa-comment"></i></Link>
                    <Link to="/4" className="navigation-container__item"><i className="far fa-square"></i></Link>
                    <Link to="/5" className="navigation-container__item"><i className="far fa-flag"></i></Link>
                </div>
                <p className="navigation-text">Welcome ...</p>
            </div>

            <Route exact path="/">
                <Main />
            </Route>
            <Route path="/1">
                <Main />
            </Route>
            <Route path="/2">
                <Main />
            </Route>
            <Route path="/3">
                <Main />
            </Route>
            <Route path="/4">
                <Main />
            </Route>
            <Route path="/5">
                <Main />
            </Route>
        </>
    )
}

export default Navigation;