
const loadPhones = async () => {
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data)
}

const displayPhones = phones => {
  
    const phoneContainer = document.getElementById('phone-container')
    phones.forEach(phone => {
        console.log(phone)
        const {brand, phone_name, image, slug} = phone;

        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        
            <div class="card h-100 p-4">
                <img src="${image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone_name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        
        `;

        phoneContainer.appendChild(phoneDiv)
    })
}
loadPhones()