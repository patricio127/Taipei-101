window.addEventListener('scroll', updateNav);

var secciones = document.querySelectorAll('#contenedor section');
var articulos = document.querySelectorAll('#contenedor div.iconos article');
function marcar(section) {
    if(document.documentElement.scrollTop >= section.offsetTop - 50) {
        var id = section.getAttribute('id');
        document.querySelectorAll('nav ul li').forEach(function(navLi){
            navLi.classList.remove('activo');
        });
        document.querySelector('nav ul li a[href="#'+ id +'"]').parentElement.classList.add('activo');
    }
}
function updateNav(){
    secciones.forEach(marcar);
    articulos.forEach(marcar);
}