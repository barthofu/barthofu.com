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

let waifuTop = (function() {
    var json = null;
    $.ajax({
      'async': false,
      'global': false,
      'url': "https://raw.githubusercontent.com/barthofu/barthofu.github.io/master/data/waifulist.json",
      'dataType': "json",
      'success': function(data) {
        json = data;
      }
    });
    return json;
})().top

const buttonsCorrespondences = [
    ".about.container",
    "https://github.com/barthofu",
    ".projects.container",
    ".contact.container"
];

let keys = [];

// get url args
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const args = urlParams.get('show');

function generateQuote() {
    let rand = Math.floor(Math.random()*randomQuotes.length);
    $('.quote').html(`
    ${randomQuotes[rand].quote}
    <span>${randomQuotes[rand].author}</span>
    `);
}

function generateWaifuTop() {

    $('.waifu.wrapper').html(`
    
    <div class="podium-wrapper">
        <ul class="podium">
            ${
                waifuTop.slice(0, 3).map(function(e, i) { return `
                    <li>
                        <a href="${e.anilistLink}">
                            <div class="left">
                                <img class="cover" src="${e.image}">
                                <div class="index">${i+1}</div>
                            </div>
                            <span class="name">${e.name}</span>
                        </a>
                    </li>
                `})
            }
        </ul>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 100 1275 500.000000"
        preserveAspectRatio="xMidYMid meet">
       <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
        stroke="none">
       <path d="M4770 5222 c-256 -147 -553 -319 -660 -382 l-195 -115 40 -6 c22 -4
       834 -10 1805 -15 l1765 -7 672 389 671 389 -657 6 c-361 3 -1178 7 -1816 8
       l-1161 1 -464 -268z"/>
       <path d="M8735 5305 c-110 -62 -409 -234 -665 -382 l-465 -269 -3 -913 -2
       -912 58 33 c32 18 336 193 675 388 l617 355 -1 870 c0 479 -3 886 -7 906 l-7
       37 -200 -113z"/>
       <path d="M3800 2770 l0 -1860 1860 0 1860 0 0 1860 0 1860 -1860 0 -1860 0 0
       -1860z"/>
       <path d="M1005 4027 c-221 -128 -510 -295 -643 -372 -133 -77 -242 -143 -242
       -147 0 -5 812 -8 1805 -8 l1805 0 0 380 0 380 -1162 -1 -1163 0 -400 -232z"/>
       <path d="M8785 3424 c-137 -80 -436 -255 -664 -388 l-415 -241 200 -6 c109 -4
       927 -7 1817 -8 l1618 -1 307 176 c454 261 720 416 872 508 l135 81 -55 7 c-30
       5 -845 10 -1810 13 l-1755 5 -250 -146z"/>
       <path d="M12570 3398 c-118 -67 -431 -246 -695 -398 l-480 -277 -3 -899 c-1
       -494 1 -901 5 -904 5 -4 322 175 706 397 l697 405 -1 796 c-1 439 -4 843 -8
       899 l-6 102 -215 -121z"/>
       <path d="M0 2155 l0 -1245 1860 0 1860 0 0 1245 0 1245 -1860 0 -1860 0 0
       -1245z"/>
       <path d="M7600 1810 l0 -900 1860 0 1860 0 0 900 0 900 -1860 0 -1860 0 0
       -900z"/>
       </g>
       </svg>
    </div>
    <div class="separator"></div>
    <ul class="top">
    ${
        waifuTop.slice(3).map(function(e, i) { return `
            <li>
                <a href="${e.anilistLink}">
                    <div class="left">
                        <img class="cover" src="${e.image}">
                        <div class="index">${i+4}</div>
                    </div>
                    <span class="name">${e.name}</span>
                </a>
            </li>
        `})
    }
    </ul>
    `);
}

$(document).ready(function() {

    let sceneParallax = document.getElementById(`scene`);
    new Parallax(sceneParallax);

    generateWaifuTop();

    if (args == 'waifu' || args == '"waifu"') $('.waifu.container').addClass('showed');

    document.addEventListener('keydown', function(event) {

        const key = event.key.toLowerCase();

        if (key === 'w') {
            keys = []
        }

        keys.push(key);

        if (keys[0] === 'w' && keys[1] === 'a' && keys[2] === 'i') {
            $(".waifu.container").addClass("showed");
        }

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

        keys = []
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

