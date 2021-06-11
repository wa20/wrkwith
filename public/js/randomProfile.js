window.onload = profile;

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
    


    function profile(){
      
      let random = Math.floor(Math.random() * avatars.length);
    
      document.getElementById("avatar").src = `/assets/profiles/${avatars[random]}.jpg`
    };

    // profile()
    console.log(profile)