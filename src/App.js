import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./components/redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./HOC/withSuspense";

const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import ('./components/Profile/ProfileContainer'))

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
    return <Preloader />
    }
    return (
        <div className='app-wrapper'>
          <HeaderContainer/>
          <Navbar/>
          <div className='app-wrapper-content'>
            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
            <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/login' render={() => <LoginPage/>}/>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose (
    withRouter,
    connect(mapStateToProps, {initializeApp})) (App);
