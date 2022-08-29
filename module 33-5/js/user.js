
const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data.results))
}

const displayUser = users => {
    // console.log(user)
    const cardContainer = document.getElementById('card-container');
    users.forEach(user => {
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card')
        cardDiv.innerHTML = `
            <img class="img-fluid" src="${user.picture.medium}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
            <p class="card-text">Email: ${user.email}</p>
            <p class="card-text">Location: ${user.location.city}  ${user.location.street.name} ${user.location.street.number} </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        
        `;

        cardContainer.appendChild(cardDiv)
    })
}
loadUser()