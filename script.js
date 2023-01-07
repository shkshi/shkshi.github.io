$(function () {
    var overlay = $('<div class="overlay"/>'),
      content = $("<div/>");
    overlay.append(content);
    $("body").append(overlay);
    var xXxSHxXx = setInterval(function () {
      content.append("xXxШKШxXx ");
      if (content.height() > overlay.height()) {
        clearInterval(xXxSHxXx);
        overlay.remove();
        $(".main, .xXxSHxXx").show();
      }
    }, 1);
  });