import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/dashboard/Layout';
import Sidebar from './components/dashboard/Sidebar';
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AboutUs, OurAim, OurVision } from "./pages/AboutUs";
import {
  Services,
  ServicesThree,
} from "./pages/Services";
import { Events, EventsOne, EventsTwo } from "./pages/Events";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";
import CreateBanner from './components/banner/CreateBanner';
import UpdateBanner from './components/banner/UpdateBanner';

function App({ userInfo }) {
  return (
    <Router>
      <Home>
        <Sidebar />
        <Switch>
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/about-us/aim" exact component={OurAim} />
          <Route path="/about-us/vision" exact component={OurVision} />
          <Route path="/services" exact component={Services} />
          <Route path="/banner/create" exact component={CreateBanner} />
          <Route path="/banner/update" exact component={UpdateBanner} />
          <Route path="/banner/delete" exact component={CreateBanner} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/events" exact component={Events} />
          <Route path="/events/events1" exact component={EventsOne} />
          <Route path="/events/events2" exact component={EventsTwo} />
          <Route path="/support" exact component={Support} />
        </Switch>
      </Home>
    </Router>
  );
}
export const Home = styled.div`
  display: flex;
`;

export default App;


