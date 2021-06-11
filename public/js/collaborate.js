

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

const modal = document.getElementById("myModal");

const btn = document.getElementById("myBtn");

const span = document.getElementsByClassName("close")[0];
 
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}