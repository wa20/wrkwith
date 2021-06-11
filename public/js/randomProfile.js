window.onload = profile;

var avatars = [
  
    "../assets/profiles/becky.png",
    "../assets/profiles/elliot.jpg",
    "../assets/profiles/jenny.jpg",
    "../assets/profiles/joe.jpg",
    "../assets/profiles/laura.jpg",
    "../assets/profiles/matthew.png",
    "../assets/profiles/molly.png",
    "../assets/profiles/steve.jpg",
    "../assets/profiles/adi.jpg",
    "../assets/profiles/chris.jpg",
    "../assets/profiles/christian.jpg",
    "../assets/profiles/elyse.png",
    
];
    

    function profile(){
      let random = Math.floor(Math.random() * avatars.length);
    
      document.getElementById("avatar").src = avatars[random];
    };

    // profile()
    console.log(profile)