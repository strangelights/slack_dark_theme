
/* ------------ BEGIN DARK THEME ------------ */
// Everything above this line should be part of the original ssb-interop.js file DO NOT REMOVE IT.
// Everything below is safe to edit as needed.

document.addEventListener("DOMContentLoaded", function () {
    var darkThemeRequest = new XMLHttpRequest();
    darkThemeRequest.open('GET', 'DARK_THEME_URL', true);
    darkThemeRequest.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            var css = darkThemeRequest.responseText;
            var styleTags = document.createElement('style');
            css += `
                    /* Add user customizable styles here */
            `;  
            styleTags.id = "darkTheme";
            styleTags.type = "text/css";
            document.getElementsByTagName('head')[0].appendChild(styleTags);
            document.head.querySelector("#darkTheme").innerHTML = css;
        }
    };
    darkThemeRequest.send();
});

/* ------------ END DARK THEME ------------ */