//Credit to particle.js
particlesJS("particles-js", {"particles":{"number":{"value":91,"density":{"enable":true,"value_area":801.7060304327614}},"color":{"value":"#ffffff"},"shape":{"type":"edge","stroke":{"width":0,"color":"#ffffff"},"polygon":{"nb_sides":3},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":false,"anim":{"enable":false,"speed":0,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":0,"size_min":0,"sync":false}},"line_linked":{"enable":true,"distance":144.30708547789706,"color":"#ffffff","opacity":0.5050747991726396,"width":1.122388442605866},"move":{"enable":true,"speed":1,"direction":"right","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":1523.2414578222467,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":1011.0361293151747,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":12.181158184520177,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});;


//Credit to https://www.w3schools.com/bootstrap/bootstrap_collapse.asp for the accordion animation
var $myGroup = $('#accordion');
$myGroup.on('show.bs.collapse','.collapse', function() {
    $myGroup.find('.collapse.in').collapse('hide');
});


//Credit to https://www.w3schools.com/w3css/w3css_modal.asp for the closing of a modal window
//I would like to implement this programmatically in the future
var modal0 = document.getElementById('secondary');
var modal1 = document.getElementById('contextual');
var modal2 = document.getElementById('semi');
var modal3 = document.getElementById('tap');
var modal4 = document.getElementById('cjm');
var modal5 = document.getElementById('stakeholder');
var modal6 = document.getElementById('service');
var modal7 = document.getElementById('challenges');
var modal8 = document.getElementById('tasks');
var modal9 = document.getElementById('share');
var modal10 = document.getElementById('yes');
var modal11 = document.getElementById('diverge');
var modal12 = document.getElementById('reframe');
var modal13 = document.getElementById('prioritize');
var modal14 = document.getElementById('fidelities');
var modal15 = document.getElementById('parallel');
var modal16 = document.getElementById('fail');
var modal17 = document.getElementById('iterate');
var modal18 = document.getElementById('tap2');
var modal19 = document.getElementById('ab');
var modal20 = document.getElementById('role');
var modal21 = document.getElementById('heval');


window.onclick = function(event) {
  //alert(event.target)
    if (event.target == modal0) {
    	modal0.style.display = "none";
    } 
  	if(event.target == modal1) {
  		modal1.style.display = "none";
  	}
  	if(event.target == modal2) {
  		modal2.style.display = "none";
  	}
  	if(event.target == modal3) {
  		modal3.style.display = "none";
  	}
  	if(event.target == modal4) {
  		modal4.style.display = "none";
  	}
  	if(event.target == modal5) {
  		modal5.style.display = "none";
  	}
  	if(event.target == modal6) {
  		modal6.style.display = "none";
  	}
  	if(event.target == modal7) {
  		modal7.style.display = "none";
  	}
  	if(event.target == modal8) {
  		modal8.style.display = "none";
  	}
  	if(event.target == modal9) {
  		modal9.style.display = "none";
  	}
  	if(event.target == modal10) {
  		modal10.style.display = "none";
  	}
  	if(event.target == modal11) {
  		modal11.style.display = "none";
  	}
  	if(event.target == modal12) {
  		modal12.style.display = "none";
  	}
  	if(event.target == modal13) {
  		modal13.style.display = "none";
  	}
  	if(event.target == modal14) {
  		modal14.style.display = "none";
  	}
  	if(event.target == modal15) {
  		modal15.style.display = "none";
  	}
  	if(event.target == modal16) {
  		modal16.style.display = "none";
  	}
  	if(event.target == modal17) {
  		modal17.style.display = "none";
  	}
  	if(event.target == modal18) {
  		modal18.style.display = "none";
  	}
  	if(event.target == modal19) {
  		modal19.style.display = "none";
  	}
  	if(event.target == modal20) {
  		modal20.style.display = "none";
  	}
    if(event.target == modal21) {
      modal21.style.display = "none";
    }
  };