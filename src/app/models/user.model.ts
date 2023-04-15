export interface User {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    address: {
        city: string,
        state: string
    }
}