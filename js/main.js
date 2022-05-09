let landing = document.querySelector(".landing")
let landing3 = document.querySelector(".landing .title h2");
let landing2 = document.querySelector(".landing .title h3");
let landingMainBtn = document.querySelector(".landing .title .main-btn");

window.onload = function () {

};


let closeBtn = document.querySelector(".search-close-btn button")

closeBtn.onclick =function() {
  mainSearch.classList.toggle("active")
  document.body.style.overflowY = "visible"
  contactBtn.style.zIndex = "1000"
}

let searchOpener = document.querySelector(".search-opener")
let mainSearch = document.querySelector(".main-search")
searchOpener.onclick = function() {
  mainSearch.classList.toggle("active")
  document.body.style.overflowY = "hidden"
  contactBtn.style.zIndex = "1"
}

let contactBtn = document.querySelector(".contact-btn")
let contactIcon = document.querySelector(".contact-btn .contact-icon")
let contactIconI = document.querySelector(".contact-btn .contact-icon svg")
let social = document.querySelector(".contact-btn .social")
contactIcon.onclick = function() {
  social.classList.toggle("active")
  if(contactIconI.classList.value === "fas", "fa-comment-dots") {
    contactIconI.classList.remove("fas" ,"fa-comment-dots")
    contactIconI.classList.add("fa-solid", "fa-xmark")
    console.log(contactIconI)
  }
}


let mail = document.querySelector(".mail")
let phone = document.querySelector(".phone")
let address = document.querySelector(".address")
mail.onclick =function() {
    open("mailto:yassienwyh0@gmail.com")
}
phone.onclick =function() {
    open("tel:201558854716")
}   
address.onclick =function() {
    open("https://www.google.com/maps/place/%D8%AA%D9%82%D9%86%D9%8A%D8%A9+%D8%AF%D9%88%D8%AA+%D9%83%D9%88%D9%85%E2%80%AD/@30.038355,31.2044092,17z/data=!3m1!4b1!4m5!3m4!1s0x145847017326238d:0x5dd5dff64a203fca!8m2!3d30.038355!4d31.2022205?hl=ar")
}


let services = document.querySelector(".services .container")
let servicesTwo = document.querySelector(".services-two .container")
let team = document.querySelector(".team .container")
let teamTwo = document.querySelector(".team-two .container")
let reviews = document.querySelector(".reviews .container")
let reviewsTwo = document.querySelector(".reviews-two .container")
let success = document.querySelector(".skill .success")
let expert = document.querySelector(".skill .expert")
let casses = document.querySelector(".skill .casses")
let smiles = document.querySelector(".skill .smiles")
let online = document.querySelector(".online .container")
let articles = document.querySelector(".articles .container")
let articlesTwo = document.querySelector(".articles-two .container")
let info = document.querySelector(".info .container")
let footer =document.querySelector(".footer .container")
let skill = document.querySelector(".skill")
let skillNums =document.querySelectorAll(".skill-num")
let btnTop = document.querySelector(".btn-up")
let started = false;
  function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
        clearInterval(count);
      }
    }, 1500 / goal);
  }

window.onscroll = function(){
  if(window.scrollY >= landing.offsetTop -200) {
    landing3.classList.add("active");
    landing2.classList.add("active");
    landingMainBtn.classList.add("active");
}
if(window.scrollY >= services.offsetTop - 300) {
  services.classList.add("active");

}
if(window.scrollY >= servicesTwo.offsetTop - 500) {
  servicesTwo.classList.add("active");

}
if(window.scrollY >= team.offsetTop - 300) {
  team.classList.add("active");
}
if(window.scrollY >= teamTwo.offsetTop - 300) {
  teamTwo.classList.add("active");
}
if(window.scrollY >= reviews.offsetTop - 300) {
  reviews.classList.add("active");
}
if(window.scrollY >= reviewsTwo.offsetTop - 300) {
  reviewsTwo.classList.add("active");
}
if(window.scrollY >= online.offsetTop - 300) {
  online.classList.add("active");
}
if(window.scrollY >= articles.offsetTop - 300) {
  articles.classList.add("active");
}
if(window.scrollY >= articlesTwo.offsetTop - 300) {
  articlesTwo.classList.add("active");
}
if(window.scrollY >= info.offsetTop + 4200) {
  info.classList.add("active");
}
if(window.scrollY >= footer.offsetTop + 4500) {
  footer.classList.add("active");
}
if(window.scrollY >= 500) {
  btnTop.style.opacity = "1"
}
if(window.scrollY <= 500) {
  btnTop.style.opacity = "0"
}
if(window.scrollY >= skill.offsetTop - 300) {
          if (!started) {
            skillNums.forEach((num) => startCount(num))
          }
          started = true
          success.classList.add("active");
          casses.classList.add("active");
          expert.classList.add("active");
          smiles.classList.add("active");
}
}




let mainText = document.querySelector(".main-search .search-bar .mainText");
let mainSubmit = document.querySelector(".main-search .search-bar .mainSubmit");
console.log(mainText)
mainSubmit.onclick = function (e) {
    if (mainText.value == "services" || mainText.value == "service" || mainText.value == "الخدمات" ||   mainText.value == "خدمات") {
        mainText.value = ""
       open("services.html" ,"")
    }
    if (mainText.value == "مقالاتنا" || mainText.value == "article" || mainText.value == "المقالات" ||   mainText.value == "مقالاتنا") {
        mainText.value = ""
        open("articles.html" ,"")
    }
    if (mainText.value == "الرئيسيه" || mainText.value == "main" ) {
        mainText.value = ""
       open("index.html" ,"")
    }
    if (mainText.value == "تواصل معنا" || mainText.value == "contact" || mainText.value == "التواصل" || mainText.value == "اتصل بنا" || mainText.value == "التواصل") {
        mainText.value == ""
       open("contact.html" ,"")
    }
    if (mainText.value == "job" || mainText.value == "jobs" || mainText.value == "الوظائف" || mainText.value == "وظيفه") {
      mainText.value == ""
     open("job.html" ,"")
  }
  if (mainText.value == "الكشف الاونلاين" || mainText.value == "كشف" || mainText.value == "الكشف" || mainText.value == "medical") {
    mainText.value == ""
   open("medical.html" ,"")
}
    else {
        mainText.value == ""
        open("404.html" ,"")
    }
  };

let menuText = document.querySelector(".menu-search .menu-text");
let menuSubmit = document.querySelector(".menu-search .menu-submit");
menuSubmit.onclick = function (e) {
    if (menuText.value == "services" || menuText.value == "service" || menuText.value == "الخدمات" ||   menuText.value == "خدمات") {
        menuText.value = ""
       open("services.html" ,"")
    }
    if (menuText.value == "مقالاتنا" || menuText.value == "article" || menuText.value == "المقالات" ||   menuText.value == "مقالاتنا") {
        menuText.value = ""
        open("articles.html" ,"")
    }
    if (menuText.value == "الرئيسيه" || menuText.value == "main" ) {
        menuText.value = ""
       open("index.html" ,"")
    }
    if (menuText.value == "تواصل معنا" || menuText.value == "contact" || menuText.value == "التواصل" || menuText.value == "اتصل بنا" || menuText.value == "التواصل") {
        menuText.value == ""
       open("contact.html" ,"")
    }
    if (menuText.value == "job" || menuText.value == "jobs" || menuText.value == "الوظائف" || menuText.value == "وظيفه") {
      menuText.value == ""
     open("job.html" ,"")
  }
  if (menuText.value == "الكشف الاونلاين" || menuText.value == "كشف" || menuText.value == "الكشف" || menuText.value == "medical") {
    menuText.value == ""
   open("medical.html" ,"")
}
    else {
        menuText.value == ""
        open("404.html" ,"")
    }
  };