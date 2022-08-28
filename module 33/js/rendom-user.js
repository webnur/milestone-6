
const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(data => dispalyUers(data.results))
}

const dispalyUers = users => {
    const userContainer = document.getElementById('user-container');

    for(const user of users){
        const userDiv = document.createElement('div');
        userDiv.classList.add('user')
        userDiv.innerHTML = `
            <h3> user Name</h3>
            <p>Email: ${user.email} </p>
            <p>user Location: ${user.location.city} ${user.location.country} </p>
        
        `;
        userContainer.appendChild(userDiv)
    }
   
}
loadUsers()