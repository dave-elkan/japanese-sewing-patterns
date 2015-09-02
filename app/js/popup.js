$(function() {
  var JSP_POPUP = "jspPopup";
  var hasCookie = document.cookie.indexOf(JSP_POPUP) >= 0;
  if (!hasCookie) {
    setTimeout(function() {
      var expires = new Date();
      expires.setTime(+ expires + (90 * 86400000));
      document.cookie = JSP_POPUP + "=1; expires=" + expires.toGMTString() + "; path=/";
      var $jspModal = $("#jspModal");
      $jspModal.modal();
      sendEvent('send', 'event', 'Samples', 'popup displayed', 'Popup displayed');
      setTimeout(function() {
        $("#jspPopupEmail").focus();
      }, 200);

      $jspModal.find("form").submit(function(e) {
        var value = $.trim($("#jspPopupEmail").val());
        if (value && value != "") {
          sendEvent('send', 'event', 'Samples', 'popup submitted', 'Popup submitted');
        } else {
          sendEvent('send', 'event', 'Samples', 'popup submit failed', 'Popup submit failed');
          e.preventDefault()
        }
      });

      $jspModal.on("hide.bs.modal", function() {
        sendEvent('send', 'event', 'Samples', 'popup closed', 'Popup closed');
      });
    }, 15000);
  }

  function sendEvent(a, b, c, d, e) {
    if (window.location.hostname !== "0.0.0.0") {
      ga(a, b, c, d, e);
    }
  }
});
