/* Changes navbar color to black in HTML files with no background */
$(".navbar").css("background", "rgba(0, 0, 0, 0.9");

/* Changes homepage button styles in HTML files with no background */
$(".btn-primary").css({
  "color": "#000",
  "background-color": "rgba(0, 0, 0, 0)",
  "border-color": "#000"
});

$(".btn-primary").on({
  mouseenter: function() {
    $(this).css({
      "color": "#fff",
      "background-color": "#000",
      "border-color": "#000"
    });
  },
  mouseleave: function() {
    $(this).css({
      "color": "#000",
      "background-color": "rgba(0, 0, 0, 0)",
      "border-color": "#000"
    });
  }
});