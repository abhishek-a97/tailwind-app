import axios from "axios";
const url = 'https://jsonplaceholder.typicode.com/users';

class EmpService
{ 
    getFetchData(){
    //  return fetch(url);          // using fetch()
    return axios.get(url);          //  using axios()
    }
    
}
export default new EmpService();