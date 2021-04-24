import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import ListContainer from './containers/ListContainer';
import Layout from './hoc/layout/Layout';


const App: React.FC = () => {
    return (
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/list"} component={ListContainer}/>
            <Redirect from="*" to={"/list"}/>
          </Switch>
        </BrowserRouter>
      </Layout>
    );
}

export default App;