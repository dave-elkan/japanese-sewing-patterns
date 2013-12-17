$(function() {
    $(".fancybox").fancybox({
        prevEffect		: 'none',
        nextEffect		: 'none',
        closeBtn		: true
    });

    $(document).on('click', '.ebook-nav a', function(e) {
        var scrollTo = $(e.target).attr("href");
        var $scrollTo = $(scrollTo);
        if ($scrollTo.length) {
            window.smoothScrollTo(0, $scrollTo.offset().top, {
                behavior: "smooth"
            });
        }
    });
});

