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
    ".anilist.container",
    ".projects.container",
    ".contact.container"
];

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

    $('header > div').click(function (e) {

        if ($(this).index() === 0) generateQuote();
        $(buttonsCorrespondences[$(this).index()]).addClass("showed");
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

