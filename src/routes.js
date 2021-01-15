import react from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './component/home';

const Routes = () => {
    return(
        <BrowserRouter basename={'/'} >
            <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;