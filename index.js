const mobileMenuBtn = document.querySelector('.mobile-menu-button');
const nav_header = document.querySelector('.nav-header');


mobileMenuBtn.addEventListener('click', toggleMenuBtn);

function toggleMenuBtn(){
    nav_header.classList.toggle('active');
}




const banner_container = document.querySelector('.banner-container')
const trick1 = document.querySelector('.trick1');
const trick2 = document.querySelector('.trick2');
const trick3 = document.querySelector('.trick3');
const gun = document.querySelector('.gun-img-wrapper');
const glass = document.querySelector('.coffee-wraper');
const magic1 = document.querySelector('.magic1');
const magic2 = document.querySelector('.magic2');
const magic3 = document.querySelector('.magic3');
const smaller0 = document.querySelector('.smaller-text-0');
const smaller1 = document.querySelector('.smaller-text');
const smaller2 = document.querySelector('.smaller-text-2');




trick1.addEventListener('mouseover', function () {
    banner_container.style.backgroundImage = "url('https://socialpanga.com/wp-content/uploads/2021/04/slider-banner-2.jpg')";
    banner_container.style.backgroundSize = 'cover';
    banner_container.style.backgroundRepeat = 'no-repeat';
    banner_container.style.backgroundSize = '100% 96vh'
    gun.style.visibility = 'hidden';
    glass.style.visibility = 'hidden';
    magic1.style.visibility = 'hidden';
    magic2.style.visibility = 'hidden';
    magic3.style.visibility = 'hidden';
    smaller1.style.visibility = 'hidden';
    smaller2.style.visibility = 'hidden';
    trick1.style.backgroundColor = '#f8d200';
    trick1.style.color = 'white';



});

trick1.addEventListener('mouseout', function () {
    banner_container.style.backgroundImage = 'none';

    gun.style.visibility = 'visible';
    glass.style.visibility = 'visible';
    magic1.style.visibility = 'visible';
    magic2.style.visibility = 'visible';
    magic3.style.visibility = 'visible';
    smaller1.style.visibility = 'visible';
    smaller2.style.visibility = 'visible';

    trick1.style.backgroundColor = 'none';
    trick1.style.color = 'black';


});



trick2.addEventListener('mouseover', function () {
    banner_container.style.backgroundImage = "url('https://socialpanga.com/wp-content/uploads/2021/07/Awards-Banner-2.jpg')";
    banner_container.style.backgroundSize = 'cover';
    banner_container.style.backgroundRepeat = 'no-repeat';
    banner_container.style.backgroundSize = '100% 96vh'
    gun.style.visibility = 'hidden';
    glass.style.visibility = 'hidden';
    magic1.style.visibility = 'hidden';
    magic2.style.visibility = 'hidden';
    magic3.style.visibility = 'hidden';
    smaller0.style.visibility = 'hidden';
    smaller2.style.visibility = 'hidden';
    trick2.style.backgroundColor = '#f8d200';
    trick2.style.color = 'white';



});

trick2.addEventListener('mouseout', function () {
    banner_container.style.backgroundImage = 'none';
    gun.style.visibility = 'visible';
    glass.style.visibility = 'visible';
    magic1.style.visibility = 'visible';
    magic2.style.visibility = 'visible';
    magic3.style.visibility = 'visible';
    smaller0.style.visibility = 'visible';
    smaller2.style.visibility = 'visible';
    trick2.style.backgroundColor = 'none';
    trick2.style.color = 'black';


});

trick3.addEventListener('mouseover', function () {
    banner_container.style.backgroundImage = "url('https://socialpanga.com/wp-content/uploads/2021/08/Home-Banner3-1.jpg')";
    banner_container.style.backgroundSize = 'cover';
    banner_container.style.backgroundRepeat = 'no-repeat';
    banner_container.style.backgroundSize = '100% 96vh'
    gun.style.visibility = 'hidden';
    glass.style.visibility = 'hidden';
    magic1.style.visibility = 'hidden';
    magic2.style.visibility = 'hidden';
    magic3.style.visibility = 'hidden';
    smaller0.style.visibility = 'hidden';
    smaller1.style.visibility = 'hidden';
    trick3.style.backgroundColor = '#f8d200';
    trick3.style.color = 'white';



});

trick3.addEventListener('mouseout', function () {
    banner_container.style.backgroundImage = 'none';
    gun.style.visibility = 'visible';
    glass.style.visibility = 'visible';
    magic1.style.visibility = 'visible';
    magic2.style.visibility = 'visible';
    magic3.style.visibility = 'visible';
    smaller0.style.visibility = 'visible';
    smaller1.style.visibility = 'visible';
    trick3.style.backgroundColor = 'none';
    trick3.style.color = 'black';


});




function changeTitle() {
    const link = document.getElementById("favii");
    link.href = 'https://socialpanga.com/wp-content/themes/socialpanga/assets/images/favicon.ico';
    document.title = "Missing you already";

}

document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {

        document.title = "Social Panga: Best Digital Marketing Agency in India";
        const link = document.getElementById("favii");
        link.href = 'https://socialpanga.com/wp-content/themes/socialpanga/assets/images/favicons/apple-touch-icon.png';
    } else {

        changeTitle();
    }
});



const scrollbtn = document.getElementById('scrollbtn')

scrollbtn.addEventListener('click',()=> {
    window.scrollTo(0,0)
})