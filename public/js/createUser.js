const signUP = document.getElementById('creatAccount');

signUP.addEventListener("click", async (event) => {

  event.preventDefault();
//assign random profile image

var avatars = [
  "elliot",
  "jenny",
  "joe",
  "aura",
  "steve",
  "adi",
  "chris",
  "christian",
  "becky",
  "matthew",
  "molly",
  "elyse",

];

let random = Math.floor(Math.random() * avatars.length);

const profileImage =  `/assets/profiles/${avatars[random]}.jpg`;

  //check passwords match
  const PWMain = document.getElementById('PWMain').value.trim();
  const PWTwo = document.getElementById('PWCheck').value.trim();

  if (PWMain !== PWTwo) {
    alert.window("Passwords do not match");
    return;
  }

  const firstNameVal = document.getElementById("firstName").value.trim();
  const lastNameVal = document.getElementById("lastName").value.trim();
  const emailVal = document.getElementById("emailSignUp").value.trim()
  const userNameVal= document.getElementById("userName").value.trim()

  const submitNewUser = await fetch("/api/user/create/signup", {
    method: "POST",
    body: JSON.stringify({
      firstName: firstNameVal,
      lastName: lastNameVal,
      email: emailVal,
      userName: userNameVal,
      password: PWMain,
      avatar: profileImage,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (submitNewUser.ok) {
    //redirect to profile

    document.location.replace("/profile")

  } else {
    alert("Sign Up Failed");
  }
});