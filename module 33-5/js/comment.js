

const loadComment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => {
        const com = data.slice(0, 3)
        displayComment(com)
    })
}

const displayComment = comments => {
    const showComment = document.getElementById('show-comment')

    comments.forEach(comment =>{
        console.log(comment)
        const p = document.createElement('p')
        p.innerText = comment.name
        showComment.appendChild(p)


    })
}

loadComment()