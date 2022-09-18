import { User } from "./user.model";

export class AuthCertificate {
    user?: User
    authToken?: String
    isAuthorized: Boolean = false;
}