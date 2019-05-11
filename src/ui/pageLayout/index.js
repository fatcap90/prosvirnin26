import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from 'ui/shared/pageHeader';
import MainPage from 'ui/mainPage';
import Lk from 'ui/lk';
import Add from 'ui/add';
import Redirect from "react-router-dom/es/Redirect";

const PageLayout = () => {
    return (
        <Fragment>
            <Header/>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/lk" component={Lk}/>
                <Route exact path="/add" component={Add}/>
                <Redirect from="*" to="/"/>
            </Switch>
        </Fragment>
    );
}

export default PageLayout;
