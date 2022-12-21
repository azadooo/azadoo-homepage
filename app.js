let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
}


$(".menu-activator").on("click", function() {
    $("body").toggleClass("menu-active");
  });
