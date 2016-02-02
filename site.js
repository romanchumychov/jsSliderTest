$(document).ready(function() {

    var $context = $('.slider'),
        itemContainer = $context.find('.slider-item-container'),
        items = $context.find('.item'),
        maxWidthItem = 0;

        items.each(function(){
            maxWidthItem += $(this).outerWidth();
        });
        itemContainer.width(maxWidthItem);



    $('.arrow-naw.right').click(function() {
        var activeItem = $context.find('.item.active'),
            next = activeItem.next();

        //console.log(currentIndexItem );

        //var moveItemRight = moveItem;
        //moveItemRight();



        //function moveItem() {
        //    var activeItemWidth = activeItem.outerWidth();
        //    itemContainer.css({
        //        'transform': 'translateX(' + -activeItemWidth + 'px)'
        //    });
        //}
        //moveItem();

        activeItem.removeClass('active');
        next.addClass('active');
        if (next.length === 0) {
            items.first().addClass('active');
        }
    });

    $('.arrow-naw.left').click(function() {
        var activeItem = $context.find('.item.active'),
            prev = activeItem.prev();
        activeItem.removeClass('active');
        prev.addClass('active');
        if (prev.length === 0) {
            items.last().addClass('active');
        }
    });

    function moveItem() {
        var activeItemWidth = activeItem.outerWidth();
        itemContainer.css({
            'transform': 'translateY(' + activeItemWidth + 'px)'
        });
    }


    $('.btn').click(function() {
        $('.div').slideToggle();
    });

});