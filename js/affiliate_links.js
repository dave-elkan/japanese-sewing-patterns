/* global
  ga
*/
$(document).on('click', '.amazon-link', function() {
  ga('send', 'event', 'Affiliates', 'Affiliate link clicked', $(this).attr('data-asin'));
});
