const Login = document.getElementById("loginUser")

Login.addEventListener("click", async (event)=>{

    event.preventDefault();


    const Username = document.getElementById("loginUsername").value.trim();
    const Password = document.getElementById("loginPassword").value.trim();

    if (Username && Password) {

        const response = await fetch ('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                userName: Username,
                password: Password,
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