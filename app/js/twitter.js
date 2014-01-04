$(document).on('click', '.shareTwitter', function(e) {
    window.open(this.href, 'shareTwitter', 'toolbar=0,status=0,width=600,height=256');
    //window._gaq.push(['_trackEvent', 'Mini toolbar', 'Twitter']);
    e.preventDefault();
});