import Auth from './Auth';
import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import {useMutation} from "@apollo/client/react";
import {CREATE_USER} from "../../hooks/useCreateUser";

const SignUp = () => {

    const  [createUser] = useMutation(CREATE_USER);
    return (
        <>
            <Auth submitLabel="Sign Up" onSubmit={async ({email, password}) => {
                await createUser({
                    variables: {
                        createUserInput: {
                            email,
                            password
                        }
                    }
                })
            }}>
                <Link to={"/login"}>
                <MUILink>Login</MUILink>
                </Link>
            </Auth>
        </>
    );
};

export default SignUp;
