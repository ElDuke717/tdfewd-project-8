// This function searches the photos based on input into the search bar.

function searchPeople() {
    //This variable is set based on what's entered into the search input box.
    const searchInput = document.querySelector(".search").value;
    
    //This variable pulls up a nodeList that is used to access the names taken from the randomNames API.
    const name = document.querySelectorAll(".name");    
 
    //Sets a variable for the cards for the search
    const card = document.querySelectorAll(".card");
   
    //This loop includes logic that looks for input from the captions and matches it up with the searchInput.
    for (let i = 0; i < name.length; i++) {
    if (name[i].innerHTML.toLowerCase().includes(searchInput.toLowerCase()) ) {
    card[i].style.display = "";
    } else {
    card[i].style.display = "none";
       }
    }
    
}