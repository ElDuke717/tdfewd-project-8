// This function searches the photos based on input into the search bar.

function searchPhotos() {
    //This sets a variable based on what's entered into the search.
    const searchInput = document.querySelector(".search").value;
    
    //This variable is made to work in the logic of the function - if it matches a caption, the function's logic is true.
    const caption = document.querySelectorAll(".gallery a");    
    
    //This loop includes logic that looks for input from the captions and matches it up with the searchInput.
    for (let i = 0; i < caption.length; i++) {
    if (caption[i].getAttribute("data-caption").toLowerCase().includes(searchInput.toLowerCase()) ) {
    caption[i].style.display = "block";
    } else {
    caption[i].style.display = "none";
    }
    }
    }
    