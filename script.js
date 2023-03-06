$(document).ready(function(){    
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        header.classList.toggle("sticky", window.scrollY > 80)
    })
    
    function toggleMenu(){
        const navlinks = document.querySelector('.nav-links')
        const menuToggle = document.querySelector('.menuToggle');
        menuToggle.classList.toggle('active');
        navlinks.classList.toggle('active');
    }

    $('.contactform').bind('cut copy paste', function(e) {
        e.preventDefault();
    });
})