import { Role } from './role';
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  UserName:string;
  UserStatus:string;
  role: Role;


}
