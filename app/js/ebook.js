$(function() {

    $(document).on('click', 'input.trial', function(e) {
        ga('send', 'event', 'Samples', 'submit', 'E-book sample');
    });

    $(document).on('click', 'a.buy', function(e) {
        var $target = $(e.target);
        var goal = $target.data('goal');
        ga('send', 'event', 'Purchases', 'click', goal);
    });

    $('.fancybox').fancybox({
        prevEffect		: 'none',
        nextEffect		: 'none',
        closeBtn		: true
    });

    $(document).on('click', '.ebook-nav a', function(e) {
        var scrollTo = $(e.target).attr('href');
        var $scrollTo = $(scrollTo);
        if ($scrollTo.length) {
            window.smoothScrollTo(0, $scrollTo.offset().top, {
                behavior: 'smooth'
            });
        }
    });
});