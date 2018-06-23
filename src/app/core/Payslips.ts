export class Payslips{
    
        _id: string;
        month:string;
        _userId:{
             email: string;
            designation: string;
            baseSalary:number;
            address:string;
            password:string;
            isActive:boolean;
            isAdmin:boolean;
            name:{
                first:string;
                last:string;
                full:string;
                 };
            id:string;
        };
      
    isPaid:boolean;
    }
