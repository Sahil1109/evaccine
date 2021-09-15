import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
// import { auth } from "./firebase";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Schedule from "./pages/Schedule";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(selectUser);
  // const user = null;
  console.log("user", user);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   //   auth.onAuthStateChanged((userAuth) => {
  //   if (token) {
  //     //logged in
  //     dispatch(
  //       login({
  //         token: token,
  //       })
  //     );
  //   } else {
  //     //logged out
  //     dispatch(logout());
  //   }
  //   //   });
  // }, [token]);
  return (
    <div className="App">
      {!user.token ? (
        <Router>
          <Switch>
            <Route path="/login">
              <Signin />
            </Route>
            <Route exact path="/">
              <Signin />
            </Route>
          </Switch>
        </Router>
      ) : (
        <>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
                <Main />
              </Route>
              <Route path="/profile">
                <Home />
                <Profile />
              </Route>
              <Route path="/register">
                <Home />
                <Register />
              </Route>
              <Route path="/schedule">
                <Home />
                <Schedule />
              </Route>
            </Switch>
          </Router>
        </>
      )}
    </div>
  );
};

export default App;
