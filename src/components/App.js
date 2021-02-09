import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import ProfileInfo from "./ProfileInfo";
import MyNetwork from "./MyNetwork";
import Jobs from "./Jobs";
import Messaging from "./Messaging";
import Notifications from "./Notifications";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/ProfileInfo" component={ProfileInfo} />
          <Route path="/MyNetwork" component={MyNetwork} />
          <Route path="/Jobs" component={Jobs} />
          <Route path="/Messaging" component={Messaging} />
          <Route path="/Notifications" component={Notifications} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
