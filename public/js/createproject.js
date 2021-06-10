const createProject = document.getElementById("createProject");




createProject.addEventListener("click", async(event) =>{
    event.preventDefault();

    const projetTitle= document.getElementById("projectTitle").value.trim();
    const technology= document.getElementById("techno").value.trim();
    const details = document.getElementById("details").value.trim();
    


    const newProject = await fetch("/api/project/create/new", {
        method: "POST",
        body: JSON.stringify({
            title: projetTitle,
            technology: technology,
            details: details,
        }),
        headers: { "Content-Type": "application/json" },
    });

    if (newProject.ok) {
        document.location.replace("/projects")
    } else {
        alert ("failed to create project")
    }

});