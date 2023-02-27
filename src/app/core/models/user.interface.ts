import { RolInterface } from "./rol.interface";

export interface UserInterface {
  id:string;
  name:string;
  age:number;
  rols:RolInterface[];
  status: 'in-progress' | 'completed' | 'wait';
}