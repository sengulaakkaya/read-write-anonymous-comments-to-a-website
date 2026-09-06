const countryEl = document.getElementById("country-select")
const headerEl= document.getElementById("header-input")
const commentEl = document.getElementById("comment-textarea")
const submitBtn = document.getElementById("submit-btn")



submitBtn.addEventListener("click", async()=>{
    const newData = {
    country :countryEl.options[countryEl.selectedIndex].text,
    header : headerEl.value,
    comment : commentEl.value
    }
    commentEl.value = ""
    const response = await fetch("/api",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(newData)
    })
    if(response.ok){
        console.log("Your comment was uploaded")
    }else{
        console.error("Server error: ",response.statusText)
    }
}
)


