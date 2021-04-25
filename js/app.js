const search=document.querySelector('#search')
const navbarEl=document.querySelector('#navbar')
const navbarmenuEl=document.querySelector('#navbar .nav-menu')
const toggleEl=document.querySelector(".toggle .fa-times")
const toggleMenuEl=document.querySelector("#times-menu")
const barMenuEl=document.querySelector("#bars-menu")
const scrollTopEl=document.querySelector("#scroll-container")

//open menu in mobile
barMenuEl.addEventListener('click', ()=>{
    barMenuEl.style.display="none";
    toggleMenuEl.style.display="block";
    navbarmenuEl.classList.add('open')
})
////close menu in mobile
toggleMenuEl.addEventListener('click', ()=>{
    barMenuEl.style.display="block";
    toggleMenuEl.style.display="none";
    navbarmenuEl.classList.remove('open')
})
//show menu
window.addEventListener('scroll',()=>{
    if(window.scrollY>navbarEl.offsetHeight){
        navbarEl.classList.add('active')
    }
    else{
        navbarEl.classList.remove('active')
    }
})
//show search box
search.addEventListener('click',()=>{
    const searchBox=document.querySelector('.search-box')
    searchBox.classList.add('active')
    
})
//close search box
toggleEl.addEventListener('click',()=>{
    const searchBox=document.querySelector('.search-box')
    searchBox.classList.remove('active')
})
//back to top
window.addEventListener('scroll',()=>{
    if(window.scrollY>100){
       scrollTopEl.style.display='block'
    }
    else{
        scrollTopEl.style.display='none'
    }
})
//copyright
const copyright=document.getElementById('right')
copyright.innerHTML=`&copy; ${new Date().getFullYear()} Alpha. All rights reserved`


//animation
const animations=document.querySelectorAll('.animation')
window.addEventListener('scroll',loading)
function loading(){
   const height= ((window.innerHeight/5)*4)
   animations.forEach((animation)=>{
       let top=animation.getBoundingClientRect().top
       if(top<height){
        animation.classList.add('show')
       }
       else{
        animation.classList.remove('show')
       }
   })

}
