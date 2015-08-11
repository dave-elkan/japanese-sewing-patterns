$(function() {

  var JSP_POPUP = "jspPopup";
  var hasCookie = document.cookie.indexOf(JSP_POPUP) >= 0;
  if (!hasCookie) {
    setTimeout(function() {
      var expires = new Date();
      expires.setTime(+ expires + (90 * 86400000));
      document.cookie = JSP_POPUP + "=1; expires=" + expires.toGMTString() + "; path=/";
      $("#jspModal").modal();
      setTimeout(function() {
        $("#jspPopupName").focus();
      }, 200)
    }, 0);
  }
});
