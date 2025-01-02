let loginbtn=document.querySelector(".login");
let loginpage=document.querySelector(".login-page");
let logincancle=document.querySelector(".cancle-btn");

loginbtn.addEventListener('click',()=>{
    loginpage.style.display ='block';
    loginpage.classList.add('trans')
})


logincancle.addEventListener('click',()=>{
    loginpage.style.display='none';
})

/*contact section*/

let contactbtn=document.querySelector('.contact-btn');
let contactsection=document.querySelector('.contact');

contactbtn.addEventListener('click',()=>{
    contactsection.scrollIntoView({ behavior:'smooth'});
    contactsection.classList.toggle('color');
});

// window.addEventListener('scroll',()=>{
//     let currentscroll=window.scrollY;
//     console.clear();
//     console.log(currentscroll);
//     if(currentscroll<=6296 && currentscroll>=6000){
//         contactsection.classList.remove('color');
//         console.log('class removed')
//     }
// })

