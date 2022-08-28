
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // for(const country of countries){
    //     console.log(country)
    // }

    const countryContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
            <h3>name ${country.name.common}</h3>
            <p>Capital: ${country.capital ? country.capital[0] : 'no capital'}</p>
            <button onclick="loadCountriesDetails('${country.cca2}')">details</button>
        
        `; 

        countryContainer.appendChild(countryDiv)
    })
}

const loadCountriesDetails = (code) => {

    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url)

    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {

    const countryDetail = document.getElementById('country-detail')
    countryDetail.innerHTML = `
    <h2>Country detail: ${country.name.common}</h2>
    <img src="${country.flags.png}" />
    
    `
}

loadCountries()