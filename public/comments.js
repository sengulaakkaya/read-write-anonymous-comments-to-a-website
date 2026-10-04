import clsx from "https://cdn.jsdelivr.net/npm/clsx@2.1.1/+esm";
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
        const country = card.country
        const countryClass = clsx({
        'turkiye': country === 'Türkiye',   // Türkiye için kırmızı
        'japan': country === 'Japan',     // ABD için mavi
        'skorea': country === 'South Korea', // Almanya için sarı
        });
        commentsHTML += `
        <article class="commment-div ${countryClass}">
            <h3>${card.header}</h3>
            <p>${card.comment}</p>
        </article>`
    })
    commentSection.innerHTML = commentsHTML
}
