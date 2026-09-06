
try{
    const data = await fetch("/api")
    const response = await data.json()
    renderComments(response)
}catch(err){
    console.log(err)
}

 
function renderComments(data){
    const commentSection = document.getElementById("comment-section")
    let commentsHTML = ""

    data.forEach(card => {
        commentsHTML += `
        <article class="commment-div">
            <h3>${card.header}</h3>
            <p>${card.comment}</p>
        </article>`
    })
    commentSection.innerHTML = commentsHTML
}
