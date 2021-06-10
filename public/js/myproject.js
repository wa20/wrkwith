


// const editEl = document.querySelector("#edit")
const deleteEl = document.querySelector("#delete")


// const editProject = async (event) =>{
//     event.preventDefault();
//     const projectid=event.target.getAttribute("data-id")
    
//     console.log("////////////////////////////////////////" + projectid)

//     const editres= await fetch ("/editproject", {
//         method:"POST",
//         body: {
//             id:projectid
//         },
//         headers:{ "Content-Type": "application/json"}
//     })

//     if (editres.ok){
//         alert("yay")
//     } else {
//         alert ("failed to edit project")
//     }
// }

const deleteProject = async (event) =>{
    event.preventDefault();
    const projectid=event.target.getAttribute("data-id")

    const delres = await fetch ("/api/project/delete/" 
    , {
        method:"DELETE",
        body:{ id: JSON.stringify(projectid)},
        headers:{ "Content-Type": "application/json"}
    })
    if (delres.ok){
        document.location.replace("/profilepage")
    } else {
        alert ("failed to delete project")
    }
}


// editEl.addEventListener("click", editProject);
deleteEl.addEventListener("click",deleteProject)