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

// Shoes Selector

var body_display_area = document.getElementById('body_display_area');

var cat_bs = document.getElementById('cat_best_sellers');
var cat_men = document.getElementById('cat_men');
var cat_women = document.getElementById('cat_women');
var cat_kids = document.getElementById('cat_kids');

cat_bs.addEventListener('click',function(){
    body_display_area.innerHTML = 
    `
    <section class="hero has-background-grey-light">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="title" style="font-size: 2.5rem;">
                            Best Sellers
                        </h1>
                </div>
            </section>
            <div class="columns is-mobile">
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                alt="">
                        </figure>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1525092029632-cb75fe5dd776?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                alt="">
                        </figure>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1536122985607-4fe00b283652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                alt="">
                        </figure>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1514514757092-71ebbc3db4e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                alt="">
                        </figure>
                    </div>
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1514514757092-71ebbc3db4e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                alt="">
                        </figure>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1506079906501-adbb5907b720?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                alt="">
                        </figure>
                    </div>
                </div>
            </div>
    `
})

/** 
 * <section class="hero has-background-grey-light">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="title" style="font-size: 2.5rem;">
                            Best Sellers
                        </h1>
                </div>
            </section>
            <div class="columns is-mobile">
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                alt="">
                        </figure>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1525092029632-cb75fe5dd776?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                alt="">
                        </figure>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1536122985607-4fe00b283652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                alt="">
                        </figure>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1514514757092-71ebbc3db4e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                alt="">
                        </figure>
                    </div>
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1514514757092-71ebbc3db4e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                alt="">
                        </figure>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1506079906501-adbb5907b720?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                alt="">
                        </figure>
                    </div>
                </div>
            </div>
 * 
 */


 // Shoes Selector