//console.log("hello");
//var apiUrl = 'https://api.github.com/users'
//var apiUrl = 'https://api.github.com/users/' + user + '/repos';
fetch('https://api.github.com/users')

.then(res => res.json())

.then(data => {
    console.log(data);
    /* if (data.lenght > 0) {
         var temp = "";
         data.forEach(element => {
             temp += '<tr>';
             temp += '<td>' + element.totCase + '<td>';*/

});
/* document.getElementById('data').innerHTML = temp;
            }
        })
    })*/