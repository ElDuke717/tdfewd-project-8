// This function searches the photos based on input into the search bar.

function searchPeople() {
    //This variable is set based on what's entered into the search input box.
    const searchInput = document.querySelector(".search").value;
    
    //This variable pulls up a nodeList that is used to access the names taken from the randomNames API.
    const caption = document.querySelectorAll(".name");    
 
    //Sets a variable to display the card for the search
    const card = document.querySelectorAll(".card");
   
        //This loop includes logic that looks for input from the captions and matches it up with the searchInput.
    for (let i = 0; i < caption.length; i++) {
    if (caption[i].innerHTML.toLowerCase().includes(searchInput.toLowerCase()) ) {
    card[i].style.display = "";
    } else {
    card[i].style.display = "none";
       }
    }
    
}