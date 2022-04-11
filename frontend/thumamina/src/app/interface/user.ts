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

