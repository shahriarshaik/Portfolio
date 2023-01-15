// Path: index.html

var linkedin = document.getElementsByClassName("linkedin");
var linkedin_URL = "https://www.linkedin.com/in/shahriar-shaik/"

function makeClassClickable(className, url) {
    for (var i = 0; i < className.length; i++) {
        className[i].addEventListener("click", function() {
            window.open(url);
        });
    }
}

linkedin.addEventListener("click", function() {
    window.open(url);
});

makeClassClickable(linkedin, linkedin_URL); 
//did not work

