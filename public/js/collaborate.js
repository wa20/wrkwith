

const collab = document.querySelector("#collaborate");



const createNewCollab = async (event) =>{
    event.preventDefault()
    const projectid=event.target.getAttribute("data-id")


    const colresponse = await fetch("/api/project/create/collab" ,{
        method: "POST",
        body: JSON.stringify({projectid}),
        headers: { "Content-Type": "application/json"}
    })
    if (colresponse.ok){
        document.location.reload()
    } else {
        alert("failed to create collaboration!")
    }
} 


collab.addEventListener("click" , createNewCollab)