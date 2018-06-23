export class NewUser{
    error: boolean;
    detail: {
        __v:number;
        email:string;
        designation:string;
        casualLeave: number;
        privilledgeLeaves:string;
        baseSalary: number;
        address: string;
        password: string;
        _id:string;
        userSince: string,
        isActive: boolean;
        isAdmin: boolean;
        name: {
            first:string,
           last: string,
            full: string
        };
        id:string
    }
}