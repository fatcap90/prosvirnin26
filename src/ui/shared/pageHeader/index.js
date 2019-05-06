import React from 'react';

import './styles.css';

function Header() {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                MotoBase
            </a>

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
                        <a href="/category1" className="nav-link">
                            Мотоциклы
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/category2" className="nav-link">
                            Мопеды
                        </a>
                    </li>
                </ul>
            </div>

            <a href="/login">
                <button className="btn btn-dark my-2 my-sm-0" type="submit">
                    Личный кабинет
                </button>
            </a>
        </div>



    );


}


export default Header;