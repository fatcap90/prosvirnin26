import React from 'react';
import {Link, NavLink} from "react-router-dom";


import './styles.css';

function Header() {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to='/'>
                <a className="navbar-brand" href="/">
                    MotoBase
                </a>
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/category1" className="nav-link">
                            Мотоциклы
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category2" className="nav-link">
                            Мопеды
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Link to='/lk'>
                <a href="/lk">
                    <button className="btn btn-dark my-2 my-sm-0" type="submit">
                        Личный кабинет
                    </button>
                </a>
            </Link>
        </div>
    );


}


export default Header;