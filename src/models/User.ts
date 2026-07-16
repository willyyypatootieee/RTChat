import { AbstractUser } from "./Abstract"

export interface User extends AbstractUser {
    email: string
}