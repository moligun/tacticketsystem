import { observer, inject } from 'mobx-react';
import React from 'react';
import './App.css';
import AdminToggle from './components/admintoggle'

function Login(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">
        <img className="brand-image" src="/static/images/lsc_brand.png" alt="Lafayette School Corporation logo" />
        TAC Shop Tickets
      </span>
      <AdminToggle />
      {!props.authStore.authorized &&
        <form className="form-inline ml-auto" action="/auth/login">
          <button className="btn btn-outline-success" type="submit">Login</button>
        </form>
      }
      {props.authStore.authorized && 
        <div className="ml-auto nav-item">
          <div className="d-flex align-items-baseline">
            <p className="mr-2"><em>Welcome, {props.authStore.userInfo.lastfirst}</em></p>
            <a className="btn btn-outline-danger" href="/auth/logout">Logout</a>
          </div>
        </div>
      }
    </nav>
  )
}
export default inject(stores => ({
  authStore: stores.rootStore.authStore
}))(observer(Login));
