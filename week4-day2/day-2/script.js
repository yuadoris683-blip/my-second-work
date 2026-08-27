const featuredName = document.querySelector("#featured-name");
const featuredEmail = document.querySelector("#featured-email");
const featuredPhoto = document.querySelector("#featured-photo");

async function fetchFeaturedUser() {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];

    featuredName.textContent = `${user.name.first} ${user.name.last}`;
    featuredEmail.textContent = user.email;
    featuredPhoto.src = user.picture.large;
}

fetchFeaturedUser(); // runs once, on page load

function createUserCard(user) {

    info.append(name, email);
    card.append(photo, info);

    return card;
}

// TODO -- Your turn: wire up "Load 6 Random Users"

loadBtn.addEventListener("click", async function () {
    loadBtn.disabled = true;
    status.textContent = "Loading..."; // set BEFORE the await -- see LESSON.md section 4

    try {
        const response = await fetch("https://randomuser.me/api/?results=6");

        if (!response.ok) {
            throw new Error("Request failed with status " + response.status);
        }

        const data = await response.json();

        userList.innerHTML = ""; // clear old cards so clicks don't just keep stacking

        data.results.forEach(function (user) {
            userList.appendChild(createUserCard(user));
        });

        status.textContent = "";
    } catch (error) {
        console.error(error); // real detail, for you -- never show a raw error to the user
        status.textContent = "Couldn't load users -- try again.";
    } finally {
        loadBtn.disabled = false; // success or failure, the button must work again
    }
});