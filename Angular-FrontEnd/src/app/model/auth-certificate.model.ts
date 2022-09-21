import { User } from "./user.model";

export class AuthCertificate {
    id?: number;
    user?: User;
    token?: string;
    valid: boolean = false;
}