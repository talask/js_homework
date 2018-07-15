const id = 1;
const http = new Http;

// http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err =>{
//         console.log(err);
//     })


http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });


http.post('https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
