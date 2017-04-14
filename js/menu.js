console.log("menu.js loaded");
/* menu.js creates an array of products and populates the menu.html pag */

/*  Menu Object */
var DWmenu = [{
	name:"Jack Daniel's Whiskey",
	price: 40,
	description: "The Finest Whiskey from the Finest State",
	url: "images/jackdaniels.jpg"
},{
	name:"Deep Eddy's Vodka",
	price: 20,
	description: "When You Want to Party Deep",
	url: "images/deepeddy.jpg"
},{
	name:"Laphroaig",
	price: 80,
	description: "You Got Class, I Guess",
	url: "images/laphroaig.jpg"
},{
	name:"Appletini",
	price: 60,
	description: "A Case for Luck with the Ladies",
	url: "images/appletini.jpg"
},{
	name:"Cosmo",
	price: 60,
	description: "A Case for Classy Ladies",
	url: "images/cosmo.jpg"
},{
	name:"Cheap Gin",
	price: 20,
	description: "If All You Got is Tonic Water",
	url: "images/gin.jpg"
},{
	name:"Bathtub Moonshine",
	price: "Market Price",
	description: "Shipped Fresh from the Appalachia",
	url: "images/moonshine.jpg"
},{
	name:"Maddog 20/20",
	price: 10,
	description: "For When You Hate Your Life",
	url: "images/maddog.jpg"
}];







/*  Menu Population */
DWmenu.forEach(function (item) {

	  card.innerHTML += `<article class="card-article">
	              <header class="card-header">
	                  <h2>${item.name} </h2>
	              </header>
	              <section class="card-image-container">
	                  <img class="card-img" src="${item.url}">
	                  <p>${item.description}</p>
	              </section>
	              <section>
	                  <header class="card-header">
	                      <h3>Price</h3>
	                  </header>
	                  <p class="price">$ ${item.price}</p>
	              </section>
	          </article>`;
});












