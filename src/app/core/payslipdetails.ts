export class PayslipDetail{
    error:boolean;

    payslip:{

        _userId:{
         baseSalary:number;
        };
        da:number;
        hra:number
        pf:number;
        totalAmount:Number;
        bonus:number;
        deduction:number;
        medical:number;
    };
 
}