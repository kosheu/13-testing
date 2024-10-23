
export async function fetchUsers(){
    const response= await fetch('https://jsonplaceholder.typicode.com/');
    const users= await (response).json()
    return users
} 
fetchUsers()