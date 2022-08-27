
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}


function displayPosts(posts){
  
    const postContiner = document.getElementById('post-container');

    for(const post of posts){
        // console.log(post)
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
            <h4>${post.userId}</h4>
            <h5>${post.title}</h5>
            <p>${post.body} </p> 
        
        
        `
        postContiner.appendChild(div)
    }

}

loadPosts()