import axios from 'axios'

export default async function getTasks(){
    const url = "https://demo6193376.mockable.io/todos";
    return axios.get(url);

}