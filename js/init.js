// ==============  dernier ==================


// Chargement de la page 
$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
    }, 0); // Régler durée minimale du chargement
	
});

// Eléments Materialize
document.addEventListener('DOMContentLoaded', function() {
    // Sidenav
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    // Carousel
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init({
        fullWidth: true,
        indicators: true
    });
    // MaterialBox
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init;
    // Collapsible
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
    // FormSelect
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);            
    
});
