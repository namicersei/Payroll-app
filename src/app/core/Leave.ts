export class Leave{
    
        _id: string;
       startDate:string;
       endDate:string;
       reason:string;
        _userId:{
            
            designation: string;
            name:{
                first:string;
                last:string;
                full:string;
                 };
         
        };
        isRejected:boolean;
        isApproved:boolean;
      id:string;
    };
