
// Shoes Selector

var body_display_area = document.getElementById('body_display_area');

var cat_bs = document.getElementById('cat_best_sellers');
var cat_men = document.getElementById('cat_men');
var cat_women = document.getElementById('cat_women');
var cat_kids = document.getElementById('cat_kids');

cat_bs.addEventListener('click',function(){
    cat_bs.style.backgroundColor = 'white';
    cat_men.style.backgroundColor = 'initial';
    cat_women.style.backgroundColor = 'initial';
    cat_kids.style.backgroundColor = 'initial';

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
                            <img src="https://images.unsplash.com/photo-1519931127525-6b6a7619a003?ixlib=rb-1.2.1&auto=format&fit=crop&w=2082&q=80"
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

cat_men.addEventListener('click',function(){
    
    cat_bs.style.backgroundColor = 'initial';
    cat_men.style.backgroundColor = 'white';
    cat_women.style.backgroundColor = 'initial';
    cat_kids.style.backgroundColor = 'initial';

    body_display_area.innerHTML = 
    `
    <section class="hero has-background-grey-light">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="title" style="font-size: 2.5rem;">
                            Men
                        </h1>
                </div>
            </section>
            <div class="columns is-mobile">
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1544880665-a2caf58243bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                alt="">
                        </figure>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1575987116913-e96e7d490b8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                alt="">
                        </figure>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1533867617858-e7b97e060509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                alt="">
                        </figure>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1510279503388-9d13cbd5356d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                alt="">
                        </figure>
                    </div>
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1563434049350-09568e40b8b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="">
                        </figure>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1518943667124-0c5e63a759dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="">
                        </figure>
                    </div>
                </div>
            </div>
    `
})

cat_women.addEventListener('click',function(){
    
    cat_bs.style.backgroundColor = 'initial';
    cat_men.style.backgroundColor = 'initial';
    cat_women.style.backgroundColor = 'white';
    cat_kids.style.backgroundColor = 'initial';

    body_display_area.innerHTML = 
    `
    <section class="hero has-background-grey-light">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="title" style="font-size: 2.5rem;">
                            Women
                        </h1>
                </div>
            </section>
            <div class="columns is-mobile">
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1529339944280-1a37d3d6fa8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                alt="">
                        </figure>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
                                alt="">
                        </figure>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1508188239917-0fc5f653cb47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="">
                        </figure>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1465479423260-c4afc24172c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                alt="">
                        </figure>
                    </div>
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1490168105446-f43395eb50b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
                                alt="">
                        </figure>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
                                alt="">
                        </figure>
                    </div>
                </div>
            </div>
    `
})

cat_kids.addEventListener('click',function(){
    
    cat_bs.style.backgroundColor = 'initial';
    cat_men.style.backgroundColor = 'initial';
    cat_women.style.backgroundColor = 'initial';
    cat_kids.style.backgroundColor = 'white';

    body_display_area.innerHTML = 
    `
    <section class="hero has-background-grey-light">
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <h1 class="title" style="font-size: 2.5rem;">
                            Kids
                        </h1>
                </div>
            </section>
            <div class="columns is-mobile">
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1550399865-ec7d23b18e8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80"
                                alt="">
                        </figure>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1462159221268-2b40f378cdb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
                                alt="">
                        </figure>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1519810409043-b6d44921bfa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                alt="">
                        </figure>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1511318316897-47dc82cd9ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1479&q=80"
                                alt="">
                        </figure>
                    </div>
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1535292862972-e61ccf5b7e61?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80"
                                alt="">
                        </figure>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <figure class="image">
                            <img src="https://images.unsplash.com/photo-1542479718-3deda0a87a00?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                                alt="">
                        </figure>
                    </div>
                </div>
            </div>
    `
})
 // Shoes Selector