import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from "../containers/Layout";
import Login from "../Pages/Login";
import Checkout from "../Pages/Checkout";
import CreateAccount from "../Pages/CreateAccount";
import Home from "../Pages/Home";
import NewPassword from "../Pages/NewPassword";
import NotFound from "../Pages/NotFound";
import '../styles/global.scss'
import PasswordRecovery from "../Pages/PasswordRecovery";
import MyAccount from "../Pages/MyAccount";
import SendEmail from "../Pages/SendEmail";
import Orders from "../Pages/Orders";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

const App = () => {

    const initialState = useInitialState();

    return (
        <AppContext.Provider value = {initialState}>
            <BrowserRouter>
                <Layout>
                    <Switch>

                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/password-recovery" component={PasswordRecovery} />
                        <Route exact path="/create-account" component={CreateAccount} /> 
                        <Route exact path="/new-password" component={NewPassword} />
                        <Route exact path="/my-account" component={MyAccount} />
                        <Route exact path="/send-email" component={SendEmail} />
                        <Route exact path="/orders" component={Orders} />
                        <Route exact path="/checkout" component={Checkout} />
                        <Route component={NotFound} />

                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>

    );
}

export default App;