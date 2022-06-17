// API - https://www.tvmaze.com/api
const form = document.querySelector('#form');
const container = document.querySelector(".container");
let favourite = [];
form.addEventListener("submit", (e)=>{
  
    e.preventDefault()
    const userInput = document.querySelector("#userInput");
    
    axios.get(`https://api.tvmaze.com/search/shows?q=${userInput.value}`)
    .then(function (response) {
        
        container.innerHTML='';
   
   for (const result of response.data) {
    
        let div = document.createElement("div");
        div.classList.add("movieContainer");
        let movieTitle = result.show.name;
        let movieDescription = result.show.summary;
        let imdb = result.show.externals.imdb;
        let imdbSrc = "https://www.imdb.com/title/" + imdb;
       
        let h2 = document.createElement("h2");
        h2.innerText = movieTitle;
        div.appendChild(h2);

        let movieImgSrc = result.show.image.medium;
        let img = document.createElement("img");
        img.src = movieImgSrc;
        div.appendChild(img);
       
        let link = document.createElement("a");
         
        if(imdb == null){
            h2.appendChild(link);
        } else {
            link.innerHTML = "<i class=\"fa-brands fa-imdb\"></i>";  
            link.href = imdbSrc; 
            h2.appendChild(link);
        }
        container.appendChild(div);
        document.querySelector("#userInput").value = '';
   }
  }) 
})





