const formWrapper = document.querySelector(".form-wrapper")
const form = document.querySelector("#form")
const buttons = document.querySelector(".buttons")
const searchInput = document.querySelector("#searchInput")
const searchButton = document.querySelector("#searchButton")
const clearButton = document.querySelector("#clearButton")
const imageList = document.querySelector(".image-list")

runEventListeners();
//EVENTS
function runEventListeners(){
    form.addEventListener("submit",search)
    clearButton.addEventListener("click",clear)
}
function clear(e){

    searchInput.value = "";
    Array.from(imageList.children).forEach((child)=>child.remove())
    //*imageList.innerHTML = ""; Easy Way to Clean
}

function search(e){
   const value = searchInput.value.trim();
   //RequestParam- Spring- Rest API
   fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
    method : "GET",
    headers : {
        Authorization : "Client-ID -o-EmLc-j09OoEjXs207T7DDcuXgPOwVUzTk4bpaHJk"
    }
   })
   .then((res)=> res.json())
   .then((data)=>{
    Array.from(data.results).forEach((image)=> {
       //console.log(image.urls.small)
       showToImages(image.urls.small)
    })
   })
   .catch((err)=>console.log(err));

    e.preventDefault(); //REFRESH XX
}


function showToImages(url){
     const div = document.createElement("div");
     div.className="card";

     const img = document.createElement("img");
     img.setAttribute("src",url);
     img.height='400'
     img.width='400'

     div.appendChild(img);
     imageList.appendChild(div);

}