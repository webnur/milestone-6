const loadUserFetch = () => {
    const url = `https://randomuser.me/api/?gender=female`
    fetch(url)
    .then(res => res.json())
    .then(data => displayUers(data.results[0]))
}

const loadUserAsync = async () => {
    const url = `https://randomuser.me/api/?gender=female`
 

    try{
        const res = await fetch(url);
        const data = await res.json()
        displayUers(data.results[0])
    }
    catch(error){
        console.log(error)
    }

}
const displayUers = user => {
    console.log(user)
}