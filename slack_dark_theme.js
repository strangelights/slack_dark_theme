
/* ------------ BEGIN DARK THEME ------------ */
// Everything above this line should be part of the original ssb-interop.js file DO NOT REMOVE IT.
// Everything below is safe to edit as needed.

document.addEventListener("DOMContentLoaded", function() {
  $.ajax({
    url: "DARK_THEME_URL",
    success: function(css) {
      css += ` 
                /* Add user customizable styles here */
            `;
      $("<style></style>")
        .appendTo("head")
        .html(css);
    }
  });
});

/* ------------ END DARK THEME ------------ */
