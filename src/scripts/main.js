const buttonsCorrespondences = [
    ".about.container",
    ".anilist.container",
    ".projects.container",
    ".contact.container"
];



$(document).ready(function() {

    let sceneParallax = document.getElementById(`scene`);
    new Parallax(sceneParallax);

    $('header > div').click(function (e) {

        $(buttonsCorrespondences[$(this).index()]).addClass("showed");
    });

    $('.red, .yellow').click(function (e) {

        $(e.target).parent().parent().removeClass("showed");
    });

    $('.green').click(function (e) {

        if ($(e.target).parent().parent().attr('class').includes("maximized")) {
            $(e.target).parent().parent().removeClass("maximized");
        } else {
            console.log(1)
            $(e.target).parent().parent().addClass("maximized");
        }

    });

});

