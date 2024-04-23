let url = `https://reqres.in/api/users?page=2`;  //This is reqres api who gives us the users data

let button = document.getElementById("fetchData");  // This is the button for fecthing the data on Dom

function showData() {  // Here is Show Data function to handle the error and Manage the states
    fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        DisplayData(data.data); 
    })
    .catch(function(error) {
        console.log("Error", error);
    });
}

let container = document.getElementById("container");

function DisplayData(arr) {      // Here is Display Data function to show the arr data to dom 
    arr.forEach(function(ele) {
        let card = document.createElement("div");
        let name = document.createElement("h3");
        name.innerHTML = ele.first_name + " " + ele.last_name; 
        let email = document.createElement("h5");
        email.innerHTML = ele.email;
        let image = document.createElement("img");
        image.src = ele.avatar; 
        
        let id = document.createElement("p");
        id.innerHTML = ele.id;

        card.append(id, image, name, email);
        container.append(card);
    });
}

button.addEventListener("click", function() {
    showData();
});
