const  grandparent = documen.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

grandparent.addEventListener('click',e => {
    console.log(e);
});


function addGlobalEventListener(type, selector, callback){
    document.addEventListener(type, e => e.target.matches(selector) && callback(e));
}