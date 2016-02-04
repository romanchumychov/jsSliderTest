$(document).ready(function() {

// loader fade
    //setTimeout(function() {
    //    $('.loader').fadeOut();
    //}, 1000);



    var $context = $('.slider'),
        itemContainer = $context.find('.slider-item-container'),
        items = $context.find('.item'),
        maxWidthItem = 0;

// add items container width, general width all items
        items.each(function(){
            maxWidthItem += $(this).outerWidth();
        });
        itemContainer.width(maxWidthItem);


    $('.arrow-naw.right').click(function() {
        var activeItem = $context.find('.item.active'),
            next = activeItem.next();
        var activeItemIndex = activeItem.index();
        console.log(activeItemIndex);

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
        if ($(this).html() === 'show it') {
            $(this).html('hide it');
        } else {
            $(this).html('show it');
        }
    });



    var myString = "Place your string data here, and as much as you like.";
    var myArray = myString.split("");
    var loopTimer;
    function frameLooper() {
        if(myArray.length > 0) {
            document.querySelector(".demo-text").innerHTML += myArray.shift();
        } else {
            clearTimeout(loopTimer);
            return false;
        }
        loopTimer = setTimeout('frameLooper()',70);
    }
    frameLooper();



});