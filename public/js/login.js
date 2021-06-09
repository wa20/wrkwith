const loginEl = document.getElementById("loginUser")



loginEl.addEventListener("click", async (event)=>{
console.log("trying to log in")
    event.preventDefault();


    const usernameEl = document.getElementById("loginUsername").value.trim();
    const passwordEl = document.getElementById("loginPassword").value.trim();

    if (usernameEl && passwordEl) {

        const response = await fetch ('/api/user/create/login', {
            method: 'POST',
            body: JSON.stringify({
                username: usernameEl,
                password: passwordEl,
            }),
            headers: {'Content-Type': 'application/json'},
        });

        if(response.ok){
            document.location.replace('/profile');
        } else {
            alert(response.statusText)
        }
    }

});