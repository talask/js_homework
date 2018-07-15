const id = 1;
const http = new Http;

http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
        console.log(res);
    })
    .catch(err =>{
        console.log(err);
    })





