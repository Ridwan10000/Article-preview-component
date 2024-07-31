let btn = document.querySelector('button');
let avatarNameDate = document.querySelector('.avatar-name-date');
let logo = document.querySelector('.logo');




  btn.addEventListener('click',()=>{
    if(window.innerWidth < 630){
    avatarNameDate.classList.toggle('active');
    avatarNameDate.classList.toggle('inactive');
    logo.classList.toggle('inactive');
    logo.classList.toggle('active');
    if(avatarNameDate.classList.contains('active')){
      document.querySelector('.profile-and-share').style.backgroundColor = "white";
    }
    else{
        document.querySelector('.profile-and-share').style.backgroundColor = "hsl(217, 19%, 35%)"
      }
    }
    else{
      
    }
      
  });