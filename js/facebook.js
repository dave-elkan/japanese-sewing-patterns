$(document).on('click', '.shareFacebook', function(e) {
    window.open(this.href, 'shareFacebook', 'toolbar=0,status=0,width=600,height=420');
    //window._gaq.push(['_trackEvent', 'Mini toolbar', 'Facebook']);
    e.preventDefault();
});