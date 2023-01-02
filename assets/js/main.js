/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  var $window = $(window),
    $body = $("body"),
    $nav = $("#nav");

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: [null, "736px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Scrolly.
  $("#nav a, .scrolly").scrolly({
    speed: 1000,
    offset: function () {
      return $nav.height();
    },
  });

  $("form[name='contact']").on("submit", function (event) {
    event.preventDefault();
    const form = $(this);
    const inputs = $(this).find("input");
    for (const input of inputs) {
      if ($(input).val().trim().length <= 0) {
        alert(`Field [${$(input).attr("name")}] is required.`);
        return false;
      }
    }

    window.open(
      `mailto:rofesol.ng@gmail.com?subject=${$(form)
        .find("#subject")
        .val()}&body=${$(form).find("#message").val()}`
    );
  });
})(jQuery);
