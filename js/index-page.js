/**News Carousel */
$('.news-carousel').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 620,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});