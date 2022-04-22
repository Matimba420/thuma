export interface User {
    name: string;
    surname: string;
    cell_no: number;
    email :string;
    password :string;
    confimpassword :string;

}



export interface login{
    cell_no: number;
    password :string;
}

export interface address{

   street_address: string;
   suburb: string;
   city:string;
   postal_code: number;

}

export interface Update {
    name: string;
    surname: string;
    cell_no: number;
    email :string;
   
}


export interface edit{
    name: string;
    surname: string;
    cell_no: number;
    password:string;
    
}

export interface request{
    comment: string;
    clientId: number;
    serviceId: number;
    
}



export interface login{
    cell_no: number;
    password :string;
}

export interface earnings{
    client_name:string;
    errand:string;
    cost:number;
}

export interface Requests{
    client_name: string;
    comment:string;
    errand: string;
    address:string;

}

export interface Ratings{
    errand:string;
    client_name:string;
    reason:string;
    rating:number;
}
export interface total{
    errand:string;
    client_name:string;
    reason:string;
    rating:number;
}
