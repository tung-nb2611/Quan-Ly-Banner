import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import './index.css'

import Login from './components/login/Login';

function App({userInfo}) {
  return (
    <>
      {/* <Home>
        <Route exact path="/login">
          <Login/>
        </Route> */}
        {/* <Layout>
          <Switch>
            <Route exact path="/">
              <AboutUs/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
          </Switch>
        </Layout> */}
      {/* </Home> */}
      <Router>
          <div className="outer">
            <div className="inner">
              <Switch>
                <Route exact path='/' component={Login} />
                <Route path="/sign-in" component={Login} />
              </Switch>
            </div>
          </div>
      </Router>
    </>  
  );
}
export const Home = styled.div `
  display: flex;
`;

export default App;


