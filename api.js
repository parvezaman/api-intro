/* fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json)) */


/* function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
} */

// lets make our own function

 const showOutput = document.getElementById('show-output');
/*function loadOurData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    // .then(x => showOutput.innerText = x.innerText)
    .then(x => console.log(x))
} */


function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}
const usernames = [];
function displayUsers(data){
    // debugger
    // console.log(data);
    for(const user of data){
        const ul = document.getElementById('ul-id');
        // console.log(user.name);
        // usernames.push(JSON.stringify(user));
        const li = document.createElement('li');
        li.innerText = `name: ${user.name} , user name: ${user.username} , email: ${user.email}`;

        ul.appendChild(li);
    }
    showOutput.innerHTML = usernames;

}