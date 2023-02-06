import { ISUSER_LOGIN } from "../ActionType/ActionType"

export const IsuserloginAction=(value)=>{
console.log("Action",value);
 return{
    type:ISUSER_LOGIN,
    payload:value
 }
 }