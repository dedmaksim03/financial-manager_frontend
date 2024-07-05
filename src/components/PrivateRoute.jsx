import { Navigate, Outlet, Route } from "react-router-dom";
import authStore from "./store.js"
import { observer } from "mobx-react-lite";

const PrivateRoute = (props) => {
    if (authStore.isAuthInProgress) {
        return <div>Checking auth...</div>;
      }
    if (authStore.isAuth){
        console.log('PrivateRoute, isAuth=true', authStore.isAuth);
        return <Outlet/>;
    }
    else {
        console.log('navigate to login', authStore.isAuth);
        return <Navigate to="/login"/>;
    }
};

export default observer(PrivateRoute);