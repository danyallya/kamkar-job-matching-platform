$(document).ready(function () {

    $(".modal-wide").on("show.bs.modal", function () {
        var height = $(window).height() - 200;
        $(this).find(".modal-body").css("height", height);
    });


    $("#sec-one .dots a").on("click", function (e) {
        $("#sec-one .dots a").removeClass("active");
        $(this).addClass("active");
        var anchor = $(this).attr('data-href');
        $(anchor).addClass('show').siblings().removeClass('show');

    });
    $(function () {
        var lis = $("#sec-one .dots > a"),
            currentHighlight = 0;
        N = 5;//interval in seconds

        setInterval(function () {
            currentHighlight = (currentHighlight + 1) % lis.length;

            lis.removeClass('active').eq(currentHighlight).addClass('active');
            var anchor = $(lis).eq(currentHighlight).attr('data-href');
            $(anchor).addClass('show');
            $(anchor).siblings().removeClass('show');

        }, N * 1000);
    });
    $("#sec-tow .dots a").on("click", function (e) {
        $("#sec-tow .dots a").removeClass("active");
        $(this).addClass("active");
        var anchor = $(this).attr('data-href');
        $(anchor).addClass('show').siblings().removeClass('show');

    });
    $(function () {
        var lis = $("#sec-tow .dots > a"),
            currentHighlight = 0;
        N = 5;//interval in seconds

        setInterval(function () {
            currentHighlight = (currentHighlight + 1) % lis.length;

            lis.removeClass('active').eq(currentHighlight).addClass('active');
            var anchor = $(lis).eq(currentHighlight).attr('data-href');
            $(anchor).addClass('show').siblings().removeClass('show');

        }, N * 1000);
    });
    /*
Reference: http://jsfiddle.net/BB3JK/47/
*/

    $('select').each(function () {
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });
    /*
	Custom checkbox and radio button - Jun 18, 2013
	(c) 2013 @ElmahdiMahmoud
	license: https://www.opensource.org/licenses/mit-license.php
*/
    $('input[name="radio-btn"]').wrap('<div class="radio-btn"><i></i></div>');
    $(".radio-btn").on('click', function () {
        var _this = $(this),
            block = _this.parent().parent();
        block.find('input:radio').attr('checked', false);
        block.find(".radio-btn").removeClass('checkedRadio');
        _this.addClass('checkedRadio');
        _this.find('input:radio').attr('checked', true);
    });
    $('input[name="check-box"]').wrap('<div class="check-box"><i></i></div>');
    $.fn.toggleCheckbox = function () {
        this.attr('checked', !this.attr('checked'));
    }
    $('.check-box').on('click', function () {
        $(this).find(':checkbox').toggleCheckbox();
        $(this).toggleClass('checkedBox');
    });

});

$(document).scroll(function () {
    if ($(document).scrollTop() == 0) {

        $("header").removeClass("on");
        console.log("2")

    } else {
        $("header").addClass("on");
        console.log("3")

    }
});
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}


