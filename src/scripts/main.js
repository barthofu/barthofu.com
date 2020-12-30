let randomQuotes = (function() {
    var json = null;
    $.ajax({
      'async': false,
      'global': false,
      'url': "src/data/quotes.json",
      'dataType': "json",
      'success': function(data) {
        json = data;
      }
    });
    return json;
})()

const buttonsCorrespondences = [
    ".about.container",
    "https://github.com/barthofu",
    ".projects.container",
    ".contact.container"
];

let keys = [];

function generateQuote() {
    let rand = Math.floor(Math.random()*randomQuotes.length);
    $('.quote').html(`
    ${randomQuotes[rand].quote}
    <span>${randomQuotes[rand].author}</span>
    `);
}

$(document).ready(function() {

    let sceneParallax = document.getElementById(`scene`);
    new Parallax(sceneParallax);

    document.addEventListener('keydown', function(event) {

        const key = event.key.toLowerCase();

        if (key === 'a') {
            keys = []
        }

        keys.push(key);

        if (keys[0] === 'a' && keys[1] === 'n' && keys[2] === 'i') {
            $(".anilist.container").addClass("showed");
        }

        console.log(keys)

    });

    $('header > div').click(function (e) {

        let className = buttonsCorrespondences[$(this).index()]

        if (className.startsWith("https")) document.location.href = className;
        else {
            if ($(this).index() === 0) generateQuote();
            $(className).addClass("showed");
        }

    });

    $('.red, .yellow').click(function (e) {

        $(e.target).parent().parent().removeClass("showed");
    });

    $('.green').click(function (e) {

        if ($(e.target).parents('section').attr('class').includes("maximized")) {
            $(e.target).parents('section').removeClass("maximized");
        } else {
            $(e.target).parents('section').addClass("maximized");
        }

    });

});

