



// var chk = document.getElementById('chk');

// chk.addEventListener('change',changeColor)

//  var element;
document.getElementById("sun").addEventListener('click',abc)
document.getElementById("moon").addEventListener('click',abc1)

function abc(){
    document.getElementById("main").classList.add("main1")

    var bg = document.getElementById("main");

    var icon = document.getElementsByClassName("fa-twitter-square")
    icon[0].style.color = 'black'
    
    var icon1 = document.getElementsByClassName("fa-instagram-square")
    icon1[0].style.color = 'black'

    var icon2 = document.getElementsByClassName("fa-linkedin")
    icon2[0].style.color = 'black'

    var icon3 = document.getElementsByClassName("fa-pinterest")
    icon3[0].style.color = 'black'

    var icon4 = document.getElementsByClassName("fa-github")
    icon4[0].style.color = 'black'


    var username1 = document.getElementById("username")
    username1.style.color = "black"
    
    var profession1 = document.getElementById("work")
    profession1.style.color = "black"
    
    
    var dummy1 = document.getElementsByClassName("dummy")
    dummy1[0].style.color = "black"
    
}

function abc1(){
    document.getElementById("main").classList.remove("main1")
}


// alert(input)
var search = document.getElementById('search')

search.addEventListener('click', () => {
// var i = prompt("Enter Name")
var data = document.getElementById('data').value
// alert(data)

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(response){
    // return response.json()
// })
// .then(function(result){
//  console.log(result)

var apiString = "https://api.github.com/users/" + data 
console.log(apiString)
 fetch(apiString)
 .then(function(response){
    return response.json()
})
.then(function(xyz){
    var c = document.getElementById("picture")
    c.style.display = "block"
    //  var image = document.createElement("img")
    //  image.classList.add("rounded-circle")
    //  image.classList.add("abc")
    //  image.style.height = "150px"
    //  image.style.width = "150px"
    
    //  image.src = (xyz[i].avatar_url)
     c.src = (xyz.avatar_url)
    //  image.src = (xyz[i].website)
    // c[0].appendChild(image)
    


var username = document.getElementById("username")
username.innerText = (xyz.name)
var email = document.getElementById("email")
email.innerText = (xyz.location)
var profession = document.getElementById("work")
profession.innerText = 'Computer Scientist'

var dummy = document.getElementsByClassName("dummy")
// dummy[0].innerText = (result.company[i].catchPhrase)

})




// })
.catch(function(error){
    console.log(error)
})
document.getElementById('data').value = ''

})












