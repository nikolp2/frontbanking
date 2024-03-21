import { Navigate } from "react-router-dom";

export const withAuths = (Component) => { 
    const auth = (props) => {
        const user = useSelector((store) => store.authReducer.user);
        if  (!user.logged) {
            return <Navigate to={"/login"} />
        }
        return <Component {...props} />
    }
    return auth;
}