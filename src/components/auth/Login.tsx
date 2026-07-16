import Auth from './Auth';
import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";


const Login = () => {
    return (
        <>
            <Auth submitLabel="Login" onSubmit={async () => {}}>
                <Link to={"/signUp"}>
                <MUILink>SignUp</MUILink>
                </Link>
            </Auth>
        </>
    );
};

export default Login;
