// "films": [
//     {
//       "id": "1",
//       "title": "The Giant Gila Monster",
//       "runtime": "108",
//       "capacity": 30,
//       "showtime": "04:00PM",
//       "tickets_sold": 27,
//       "description": "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
//       "poster": "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
//     },

const movieAPI = "http://localhost:3000/films"
const moiveList = document.getElementById("films")
const buyBtn = document.getElementById("buy-ticket")

let currentMovie;

fetch(movieAPI)
.then(resp => resp.json())
.then(movieObj => {
    movieObj.forEach(populateMovieList);    
})

function populateMovieList(movieObj) {
    
    if (movieObj.id === "1") { 
        
        currentMovie = movieObj;
        let availTickets = movieObj.capacity - movieObj.tickets_sold;

        const cardTitle = document.getElementById("title")
        cardTitle.innerText = movieObj.title;

        const cardRuntime = document.getElementById("runtime")
        cardRuntime.innerText = movieObj.runtime + " minutes";

        const cardDescription = document.getElementById("film-info")
        cardDescription.innerText = movieObj.description;

        const cardImage = document.getElementById("poster")
        cardImage.src = movieObj.poster;

        const cardShowtime = document.getElementById("showtime")
        cardShowtime.innerText = movieObj.showtime

        const cardTickets = document.getElementById("ticket-num")
        cardTickets.innerText = movieObj.capacity - movieObj.tickets_sold;    

    }

    const titleEntry = document.createElement("li")
    titleEntry.innerText = movieObj.title;
    titleEntry.classList = 'film item'
    moiveList.appendChild(titleEntry);
    titleEntry.addEventListener('click', event =>{

        currentMovie = movieObj;
        availTickets = movieObj.capacity - movieObj.tickets_sold;
        console.log(availTickets);
        
        const cardTitle = document.getElementById("title")
        cardTitle.innerText = movieObj.title;

        const cardRuntime = document.getElementById("runtime")
        cardRuntime.innerText = movieObj.runtime + " minutes";

        const cardDescription = document.getElementById("film-info")
        cardDescription.innerText = movieObj.description;

        const cardImage = document.getElementById("poster")
        cardImage.src = movieObj.poster;

        const cardShowtime = document.getElementById("showtime")
        cardShowtime.innerText = movieObj.showtime

        const cardTickets = document.getElementById("ticket-num")
        cardTickets.innerText = movieObj.capacity - movieObj.tickets_sold;        
        
        
    })        
}

buyBtn.addEventListener('click', e =>{

    //it aint pretty but its honest work

    let ticketCount = parseInt(document.getElementById("ticket-num").innerText)
    if (ticketCount > 0){
    
        let ticketsLeft = document.getElementById("ticket-num");    
        ticketCount = ticketCount - 1;
        ticketsLeft.innerText = ticketCount;
        
        console.log(ticketCount)}
        
})







