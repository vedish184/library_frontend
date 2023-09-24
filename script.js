
searchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active'); 
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick =() =>{
    loginForm.classList.toggle('active');
    console.log("Hi")
}

document.querySelector('#close-login-btn').onclick =() =>{
    loginForm.classList.remove('active');
}
let books = []

window.onscroll=()=>{

    searchForm.classList.remove('active');

    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload=async ()=>{
    const res =  await axios.get('https://librarymanagement-production.up.railway.app/getbooks');
    books = res.data.Books

    const container = document.getElementById("swiper-wrapper");

    // Create book cards and append them to the container
    books.forEach((book) => {
      const link = document.createElement("a");
      link.href = "#";
      link.className = "swiper-slide box";
    
      const imageDiv = document.createElement("div");
      imageDiv.className = "image";
      const image = document.createElement("img");
      image.src = book.url;
      image.alt = "";
    
      imageDiv.appendChild(image);
    
      const contentDiv = document.createElement("div");
      contentDiv.className = "content";
      const h3 = document.createElement("h3");
      h3.textContent = book.bookName;
      const h4 = document.createElement("h4");
      h4.textContent = book.Author;
      const h5 = document.createElement("h5");
      h5.textContent = book.bookGenre;
      const priceDiv = document.createElement("div");
      priceDiv.className = "price";
      priceDiv.textContent = book.Price;
      
      const starsDiv = document.createElement("div");
      starsDiv.className = "stars";
      for (let i = 0; i < 5; i++) {
        const starIcon = document.createElement("i");
        starIcon.className = "fas fa-star" + (i < 4 ? "" : "-half-alt");
        starsDiv.appendChild(starIcon);
      }
    
      contentDiv.appendChild(h3);
      contentDiv.appendChild(h4);
      contentDiv.appendChild(h5);
      contentDiv.appendChild(priceDiv);
      contentDiv.appendChild(starsDiv);
    
      link.appendChild(imageDiv);
      link.appendChild(contentDiv);
    
      container.appendChild(link);
    });
 
  console.log(res.data.Books)
  //document.getElementById('outer-container').innerHTML = bookCards

    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('active');
    }
    else{
        document.querySelector('.header .header-2').classList.remove('active');
    }

    fadeout();

}

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeout(){
  setTimeout(loader,1000);
}


var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 5,
      },
    },
});
var swiper = new Swiper(".featured-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
});
var swiper = new Swiper(".arrivals-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
});
var swiper = new Swiper(".reviews-slider", {
    spaceBetween:10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
});


// form js
const firebaseConfig = {
  apiKey: "AIzaSyCo6T5WCfTfRg42-fFQ6ZFO3th8dhjISUo",
  authDomain: "form-c5af6.firebaseapp.com",
  databaseURL: "https://form-c5af6-default-rtdb.firebaseio.com",
  projectId: "form-c5af6",
  storageBucket: "form-c5af6.appspot.com",
  messagingSenderId: "610470319011",
  appId: "1:610470319011:web:5b7a63246d18140c2c0016"
};

// for initialize firebase
firebase.initializeApp(firebaseConfig);

// creating reference for database
const contactFormDB=firebase.database().ref('contactform')

document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
  e.preventDefault();

  var name=getElementByVal('name');
  var emailid=getElementByVal('emailid');
  var msgContent=getElementByVal('msgContent');
  // console.log(name,emailid,msgContent);

  saveMessages(name,emailid,msgContent);

  //enable the alert message
  document.querySelector(".alert").style.display='block';
  
  //remove the alert
  setTimeout(() => {
      document.querySelector(".alert").style.display='none';
      
  }, 3000);

  //reset the form
  document.getElementById('contactForm').reset();

}

const saveMessages=(name,emailid,msgContent)=>{
  var newContactForm=contactFormDB.push();
  newContactForm.set({
      name:name,
      emailid:emailid,
      msgContent:msgContent
  });
};

const getElementByVal=(id)=>{
  return document.getElementById(id).value;
};



function verifyPassword() {  
  var pw = document.getElementById("pswd").value;  
  //check empty password field  
  if(pw == "") {  
     document.getElementById("message").innerHTML = "**Fill the password please!";  
     return false;  
  }  
   
 //minimum password length validation  
  if(pw.length < 8) {  
     document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
     return false;  
  }  
  
//maximum length of password validation  
  if(pw.length > 15) {  
     document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
     return false;  
  } else {  
     alert("Password is correct");  
  }  
}  

async function  matchPassword() {  

  var pw1 = document.getElementById("pswd1").value;  
  var pw2 = document.getElementById("pswd2").value; 
  var name = document.getElementById("name").value;
  var email = document.getElementById("emailid").value;
  const data = {name,email,password:pw1}
  if(pw1 != pw2)  
  {   
    alert("Passwords did not match");  
  } else {  
    const response = await axios.post('https://librarymanagement-production.up.railway.app/register',{...data})
    alert(response.data.message)
  }  
}  




// search menu
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  books.forEach(book => {
    const isVisible =
      book.bookName.toLowerCase().includes(value)
    book.element.classList.toggle("hide", !isVisible)
  })
})

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      header.textContent = user.name
      body.textContent = user.email
      userCardContainer.append(card)
      return { name: user.name, email: user.email, element: card }
    })
  })