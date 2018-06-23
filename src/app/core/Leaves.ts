export class Leaves{
    error:boolean;
    leaves:[{
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
      id:string;
      isRejected:boolean;
      isApproved:boolean;
    }
   ];
}