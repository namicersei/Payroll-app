export class AllLeave{
    error:boolean;
    leaves:[{
        startDate:string;
        endDate:string;
        isRejected:boolean;
        isApproved:boolean;
        requestDate:string;
    }];

}