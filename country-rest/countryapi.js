// Action to toggle button
const togglebtn = document.getElementById("togglebtn");
const body = document.body;

togglebtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

// Ajax to fetch the data from the server and load them on the browser via index.php
var content = document.getElementById("infos");

var ajax = new XMLHttpRequest();
ajax.onreadystatechange = () => {
  if (ajax.readyState == 4 && ajax.status == 200) {
    var countries = JSON.parse(ajax.responseText);

     countries.sort((a, b) => {
       return a.name.common.localeCompare(b.name.common);
     });


    content.innerHTML = ""; // Clear existing content
    countries.forEach((country) => {
      var card = document.createElement("div");
      card.className = "row content";
      card.innerHTML = `
                <div class="col-lg-4 myCards">
                    ${
                      country.flags && country.flags.png
                        ? `<img src="${country.flags.png}" alt="No image provided" style="width: 100%;">`
                        : ""
                    }
                    <p>Country: <span class='country-name'><b>${
                      country.name.common
                    }</b></span></p>
                    <p>Population: ${country.population}</p>
                    <p>Region: <span class='country-region'>${country.region}</span></p>
                    <p>Capital: ${country.capital && country.capital[0]
                        ? country.capital[0]
                        : "Capital not available"
                    }</p>
                </div>
            `;
      content.appendChild(card);
    });
  }
};
ajax.open("GET", "./countryapi.php", true);
ajax.send();

// Search Logic
  
  const Search = () => {
  const contents = document.querySelectorAll(".content");
  const searchContent = document.getElementById("searchcontent").value.toUpperCase();
  
  contents.forEach((content) => {
    const countryName = content.querySelector(".country-name b").textContent.toUpperCase();
    if (countryName.includes(searchContent)) {
      content.style.display = "";
    } else {
      content.style.display = "none";
    }
  });
};

// Filter the regions

   const regions = document.getElementById("regions"); 
   
   regions.addEventListener("change", ()=>{
   regionValue = regions.value.toUpperCase;
   const contents = document.querySelectorAll(".content");
   contents.forEach((content)=>{
    
    const regionName = content.querySelector(".country-region").textContent.toUpperCase();
    if(regionName.includes(regionValue)) {
      content.style.display = "";
    }else{
      content.style.display = "none";
    }
  })
  
})


