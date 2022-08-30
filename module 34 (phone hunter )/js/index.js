
const loadPhones = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit)
}

const displayPhones = (phones, dataLimit) => {
    // display only 10 phones
    // phones = phones.slice(0, 10)
    const showAll = document.getElementById('show-all');

    if(dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10)
        showAll.classList.remove('d-none')
    }
    else{
        showAll.classList.add('d-none')
    }
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = '';

    // display no phone found
    const noPhoneFound = document.getElementById('no-found-massage');
    if(phones.length === 0){
        noPhoneFound.classList.remove('d-none')
    }
    else{
        noPhoneFound.classList.add('d-none')
    }
    // display all phones

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

        phoneContainer.appendChild(phoneDiv);
    })

    // stop loader
    toggleSpinner(false)
}


const processSearch = (dataLimit) => {
    toggleSpinner(true)
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit)
    // searchField.value = '';
}
// handle search button click
document.getElementById('btn-search').addEventListener('click', function(){
    
    // start loader
    // toggleSpinner(true)
    // const searchField = document.getElementById('search-field');
    // const searchText = searchField.value;
    // loadPhones(searchText)
    // searchField.value = '';

    processSearch(10)
})

const toggleSpinner = isLoading => {

    const loaderSection = document.getElementById('loader');
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none')
    }
}

// not the best way to load show all phone
document.getElementById('btn-show-all').addEventListener('click', function(){
    // toggleSpinner(true)
    // const searchField = document.getElementById('search-field');
    // const searchText = searchField.value;
    // loadPhones(searchText)
    // searchField.value = '';

    processSearch()
})
// loadPhones()