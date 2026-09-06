const readBtn = document.getElementById("read-btn")
const writeBtn = document.getElementById("write-btn")

readBtn.addEventListener("click",()=>{
    window.location.href = "comments.html"
})

writeBtn.addEventListener("click",()=> {
    window.location.href ="upload-comments.html"
})

