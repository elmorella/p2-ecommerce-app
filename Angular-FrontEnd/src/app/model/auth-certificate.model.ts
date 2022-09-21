import { User } from "./user.model";

export class AuthCertificate {
    user?: User
    token?: String
    valid?: boolean;
}