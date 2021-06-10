const submitChange = document.getElementById('submitChange');

submitChange.addEventListener("click", async (event) => {

event.preventDefault();
const projectid=event.target.getAttribute("data-id")

const titleEl = document.querySelector("#projectTitile").value.trim();
const detailEl = document.querySelector("#details").value.trim();
const techEl = document.querySelector("#tech").value.trim();


const fetchOptions = {
    method: "PUT",
    body: JSON.stringify({
        title: titleEl,
        details: detailEl,
        tech: techEl,
        id: projectid
        
        
    }),
    headers: { "Content-Type": "application/json" },
  }
  
  const submitChange = await fetch("/api/project/edit", fetchOptions);
  
  console.log(submitChange)
  
  if (submitChange.ok) {
      //redirect to profile
      document.location.replace(`/myproject/${projectid}`)
      // document.location.replace("/homepage")
    } else {
      alert("Update Failed");
    }
  
  })
  
  