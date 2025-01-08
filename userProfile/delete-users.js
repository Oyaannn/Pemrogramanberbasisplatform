const {response} = require("express");

fetch('http://localhost:3000/api/users/3', {
    method: 'DELETE',
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))