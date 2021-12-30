
$(window).on('load',function(){
    var menuIsotope =$('.menu-container').isotope({
        itemSelector:'.menu-item',
        layoutMode:'fitRows'
    });

    $('#menu-flters li').on('click',function(){
        $("#menu-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        menuIsotope.isotope({
         filter:$(this).data('filter')
            });
            aos_init();
    });
});




function aos_init(){
    aos_init({
        duration:1000,
        once:true
    });
}
$(window).on('load',function() {
    aos_init();
});