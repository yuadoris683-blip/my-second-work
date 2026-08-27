const featuredName = document.querySelector("#featured.name");
const featuredEmail = document.querySelector("#featured.email");
const featuredPhoto = document.querySelector("#featured.photo");


async function  fetchFeaturedUser(){
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];


    featuredName.textContent =`${user.name.first} ${user.name.last}`;
    featuredEmail.textContent = user.email;
    featuredPhoto.src = user.picture.large;

}
   fetchFeaturedUser(); 
   function createdUserCard(user){
    info.append(name, email);
    Card.append(Photo, info);
    return card;
   }

