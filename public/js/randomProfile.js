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
  


window.onload = function() {
    
    let random = Math.floor(Math.random() * avatars.length);
  
    document.getElementById("avatar").src = `/assets/profiles/${avatars[random]}.jpg`;
  };

  

 
