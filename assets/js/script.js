particlesJS("particles-js", {"particles":{"number":{"value":91,"density":{"enable":true,"value_area":801.7060304327614}},"color":{"value":"#ffffff"},"shape":{"type":"edge","stroke":{"width":0,"color":"#ffffff"},"polygon":{"nb_sides":3},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":false,"anim":{"enable":false,"speed":0,"opacity_min":0.1,"sync":false}},"size":{"value":2,"random":true,"anim":{"enable":false,"speed":0,"size_min":0,"sync":false}},"line_linked":{"enable":true,"distance":144.30708547789706,"color":"#ffffff","opacity":0.5050747991726396,"width":1.122388442605866},"move":{"enable":true,"speed":1,"direction":"right","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":1523.2414578222467,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":1011.0361293151747,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":12.181158184520177,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;



var $myGroup = $('#accordion');
$myGroup.on('show.bs.collapse','.collapse', function() {
    $myGroup.find('.collapse.in').collapse('hide');
});

