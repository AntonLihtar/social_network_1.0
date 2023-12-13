import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
          <Component
            {...props}
            router={{location, navigate, params}}
          />
        );
    }

    return ComponentWithRouterProp;
}

class App extends Component {

    componentDidMount() {
        //thunk f()
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }


        return (
          <div className="app-wrapper">
              <HeaderContainer/>
              <Navbar/>
              <div className="app-wrapper-content">
                  <Routes>
                      <Route
                        path="/profile/:userId?"
                        element={<ProfileContainer/>}
                      />
                      <Route
                        path="/dialogs/*"
                        element={<DialogsContainer/>}
                      />
                      <Route
                        path="/users"
                        element={<UsersContainer/>}
                      />
                      <Route
                        path="/login"
                        element={<Login/>}
                      />
                  </Routes>
              </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);
