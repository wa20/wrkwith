const deleteAccount = document.getElementById("deleteAccount");


deleteAccount.addEventListener("click", async (event)=> {

    event.preventDefault();

    const response = await fetch('api/user/delete/',{
        method: 'DELETE',
        body: JSON.stringify({
            
            userID: req.session.user_id,

        }),
        headers: { 'Content-Type': 'application/json' },
      });
    
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
  
})