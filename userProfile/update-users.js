const {response} = require("express");

fetch('http://localhost:3000/api/users/5', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name : 'Update data',
        email : 'admin@example.com',
        phone : '1234456789'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))