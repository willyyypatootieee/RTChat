import { gql } from "@apollo/client"
import { useMutation } from "@apollo/client/react"
import {CreateUserInput} from "../generated/graphql";
import {User} from "../models/User";

interface createUserInput {
    createUserInput: {
        email: string;
        password: string;
    };
}

const CREATE_USER = gql`
mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserData: $createUserInput) {
        _id
        email
    }   
}`

const useCreateUser = () => {
    return useMutation<User, CreateUserInput>(CREATE_USER);
};

export { CREATE_USER };
