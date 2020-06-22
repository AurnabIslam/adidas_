// Navbar Toggler

var ham_menu_toggler = document.getElementById('ham_menu_toggler');
var navbarMenuHeroC = document.getElementById('navbarMenuHeroC');

ham_menu_toggler.addEventListener('click',function(){
    if(navbarMenuHeroC.style.display == 'initial'){
        navbarMenuHeroC.style.display = 'none';
    } else
        navbarMenuHeroC.style.display = 'initial';
    
})

// Navbar Toggler
