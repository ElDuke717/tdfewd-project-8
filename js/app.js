//global variables
let employees = [];
const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture, email, location, phone, dob &noinfo &nat=us`
const gridContainer = document.querySelector(".grid-container");
const overlay = document.querySelector(".overlay");
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");

//fetch data from API

fetch(urlAPI)
    .then(res => res.json())
    .then(res => res.results)
    .then(displayEmployees)
    .catch(err => console.log(err))




function displayEmployees(employeeData) {
    employees = employeeData;

    //store the employee HTML as we create it
    let employeeHTML = '';

    //loop through each employee and create HTML markup
    employees.forEach((employee, index) => {
        let name = employee.name;
        let email = employee.email;
        let city = employee.location.city;
        let picture = employee.picture;
   

employeeHTML += `
    <div class="card" data-index="${index}">        
        <img class="avatar" src="${picture.large}" />        
        <div class="text-container">          
            <h2 class="name">${name.first} ${name.last}</h2>          
            <p class="email">${email}</p>
            <p class="address">${city}</p>
        </div>
    </div>
`
});

    gridContainer.innerHTML = employeeHTML;
}



function displayModal(index) {

    //use object destructuring to make the template cleaner
    let {name, dob, phone, email, location: {city, street, state, postcode}, picture } = employees[index];

    let date = new Date(dob.date);

    const modalHTML = `
        <img class="avatar-select" src="${picture.large}"/>
        <div class="text-container">
            <h2 class="name">${name.first} ${name.last}</h2>
            <h2 class="name">Slack: @${name.first}.${name.last.charAt(0)}</h2>
            <p class="email">${email}</p>
            <hr />
            <p>${phone}</p>
            <p class="address">${street.number} ${street.name}</p>
            <p class="address">${city}, ${state} ${postcode}</p>
            <p>Birthday: ${date.getMonth() +1}/${date.getDate()}/${date.getFullYear()}</p>
            <button class="prev">Previous</button>
            <button class="next">Next</button>
        </div>
    `;
    overlay.classList.remove("hidden");
    modalContainer.innerHTML = modalHTML;

    const previous = document.querySelector('.prev');
    previous.addEventListener('click', e => {
        if (index > 0) {
            index--;
            displayModal(index);
        } else {
            index = employees.length - 1;
            displayModal(index);
        }
    });
    
    const next = document.querySelector('.next');
    next.addEventListener('click', e => {
      if(index < employees.length -1) { 
        index++;
        displayModal(index);
      } else {
          index = 0;
          displayModal(index);
      }
    });

}


gridContainer.addEventListener('click', e => {

    //make sure the click is not on the gridContainer itself
    if (e.target !== gridContainer) {

    // select the card element based on its proximity to actual element clicked
    const card = e.target.closest(".card");
    const index = card.getAttribute('data-index');

    displayModal(index);
    }
});


modalClose.addEventListener('click', () => {
    overlay.classList.add("hidden");
});


