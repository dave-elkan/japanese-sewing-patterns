$(document).on('click', '.shareGooglePlus', function(e) {
    window.open(this.href, 'shareGooglePlus', 'toolbar=0,status=0,width=500,height=500');
    e.preventDefault();
});