export interface User {
    name: string;
    surname: string;
    cell_no: number;
    email :string;
    password :string;
    confimpassword :string;

}

export interface Update {
    name: string;
    surname: string;
    cell_no: number;
    email :string;
    

}


export interface login{
    cell_no: number;
    password :string;
}
