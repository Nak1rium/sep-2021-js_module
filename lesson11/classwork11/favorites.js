const key = 'favorites';
const container = document.getElementById('container');
const users = JSON.parse(localStorage.getItem(key));

users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.className = 'user';
    const content = document.createElement('div');
    content.innerText = `Name: ${user.name} , Age: ${user.age} , Status: ${user.status}`;
    userDiv.appendChild(content);
    container.appendChild(userDiv);
})