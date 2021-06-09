const submitChange = document.getElementById('submitChange');

submitChange.addEventListener("click", async (event) => {

event.preventDefault();

//
const PWMain = document.getElementById('PWMainEdit').value.trim();
const PWTwo = document.getElementById('PWCheckEdit').value.trim();

if (PWMain !== PWTwo) {
    alert.window("Passwords do not match");
    return;
  }



    const firstNameEl = document.getElementById("firstNameEdit").value.trim();
    const lastNameEl = document.getElementById("lastNameEdit").value.trim();
    const usernameEl = document.getElementById("usernameEdit").value.trim();
    const emailEl = document.getElementById("emailEdit").value.trim();
    const BioEl = document.getElementById("bioEdit").value.trim();


const fetchOptions = {
  method: "PUT",
  body: JSON.stringify({
      firstName: firstNameEl,
      lastName: lastNameEl,
      email: emailEl,
      userName: usernameEl,
      password: PWMain.length > 0 && PWMain, //TODO: ensure it does not take an empty string for a password
      bio: BioEl,
  }),
  headers: { "Content-Type": "application/json" },
}

const submitChange = await fetch("/api/user/update", fetchOptions);

console.log(submitChange)

if (submitChange.ok) {
    //redirect to profile
    document.location.replace("/html/login")
  } else {
    alert("Update Failed");
  }

})

