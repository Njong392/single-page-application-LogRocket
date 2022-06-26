import Home from './pages/Home.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'

const tl = gsap.timeline({ defaults: {ease:'power2.out'} });
tl.to('.slider', {y: "-100%", duration:1.2});
tl.to('#home', {y: "0%", duration:1.2}, "-=1");



const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        {
            path: "/",
            view: Home
        },
        
        {
            path: "/about",
            view: About
        },
        
        {
            path: "/contact",
            view: Contact
        }
        
        
    ];

    //test each route for match
    const checkMatches = routes.map(route => {
        return{
            route: route,
            isMatch: location.pathname === route.path //returns a boolean value
        };
    });

    let match = checkMatches.find(checkMatch => checkMatch.isMatch);
    
    if(!match){
        match = {
            route: routes[0],
        };
    }

    const view = new match.route.view();

    document.querySelector("#home").innerHTML = await view.getHtml();


};

window.addEventListener('popstate', router);



document.addEventListener('DOMContentLoaded', () => {
  
    document.body.addEventListener('click', e => {
        e.preventDefault();
        tl.to('.slider', {y: "100%", duration:0});
     

        if(e.target.matches('[data-link]')){

            tl.to('.slider', {y: "-100%", duration:1.2});
            tl.fromTo('#home', {opacity: 0}, {opacity:1, duration:0.5});
            navigateTo(e.target.href);
       
        }
      
    
        
    })
  

    router();
})