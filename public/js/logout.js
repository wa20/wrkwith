const logOut = document.getElementById("logOutUser")


logOut.addEventListener("click", async (event)=> {

    event.preventDefault();

    const response = await fetch('api/user/create/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
  
})