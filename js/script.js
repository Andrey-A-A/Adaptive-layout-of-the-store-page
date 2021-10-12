$(document).ready(function () {

    $('.slider .owl-carousel').owlCarousel({
        loop:true, //устанавливаем бесконечный слайдер
        margin:0,
        nav:true, //включаем навигацию
        dots: false, //точечная навигация выключена
        navText: [], //данное свойство отвечает за текст в навигации, но он нам не нужен
        responsive:{ //адаптивность будет от 0 до 480px
            0:{
                items:1, //будет один элемент изображения на слайдере
                dots: true, //включаем точечную навигацию
                nav: false, //отключаем навигацию стрелками для этого разрешения
            },
            480:{
                items:1
            },
            /*1000:{
                items:5
            }*/
        }
    });

    $('.carousel').owlCarousel({
        loop:true, //устанавливаем бесконечный слайдер
        margin:30, //добавим отступы между слайдами
        nav:true, //включаем навигацию
        dots: false, //точечная навигация выключена
        navText: [], //данное свойство отвечает за текст в навигации, но он нам не нужен
        responsive:{ //адаптивность будет от 0 до 480px
            0:{
                items:1, //будет один элемент изображения на слайдере
            },
            480:{
                items:2 //при разрешении от 480 до 680px будем показывать два слайда
            },
            680:{
                items:3 //при разрешении от 680 до 1024px будем показывать три слайда
            },
            1024:{
                items:4 //при разрешении от 1024px и больше будем показывать ччетыре слайда
            }
        }
    });

    //опишем действие для поискового поля
    const  iconSearch = document.querySelector('.icons__search');

    const  body = document.querySelector('body');
    //повесим обработчики событий на эти элементы
    iconSearch.addEventListener('click', function (event) {
       //предотвращаем всплытие
       event.stopPropagation();
       //теперь добавляем нужный нам класс icons__search--active
       this.classList.add('icons__search--active');
    });

    body.addEventListener('click', function (event) {

        //теперь добавляем нужный нам класс icons__search--active
        iconSearch.classList.remove('icons__search--active'); //удаляем ранее созданный класс
    });

});