let mobile = true;

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
            <li>
                <a href="${waifuTop[1].anilistLink}">
                    <div class="left">
                        <img class="cover" src="${waifuTop[1].image}">
                        <div class="index">2</div>
                    </div>
                    <span class="name">${waifuTop[1].name}</span>
                </a>
            </li>
            <li>
                <a href="${waifuTop[0].anilistLink}">
                    <div class="left">
                        <img class="cover" src="${waifuTop[0].image}">
                        <div class="index">1</div>
                    </div>
                    <span class="name">${waifuTop[0].name}</span>
                </a>
            </li>
            <li>
                <a href="${waifuTop[2].anilistLink}">
                    <div class="left">
                        <img class="cover" src="${waifuTop[2].image}">
                        <div class="index">3</div>
                    </div>
                    <span class="name">${waifuTop[2].name}</span>
                </a>
            </li>
        </ul>
        <svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 458"><path d="M477,26.8C451.4,41.5,421.7,58.7,411,65L391.5,76.5l4,.6c2.2.4,83.4,1,180.5,1.5l176.5.7,67.2-38.9L886.8,1.5,821.1.9C785,.6,703.3.2,639.5.1L523.4,0Z"/><path d="M873.5,18.5c-11,6.2-40.9,23.4-66.5,38.2L760.5,83.6l-.3,91.3-.2,91.2,5.8-3.3c3.2-1.8,33.6-19.3,67.5-38.8L895,188.5l-.1-87c0-47.9-.3-88.6-.7-90.6l-.7-3.7Z"/><path d="M100.5,146.3c-22.1,12.8-51,29.5-64.3,37.2S12,197.8,12,198.2s81.2.8,180.5.8H373V123l-116.2.1H140.5Z"/><path d="M878.5,206.6c-13.7,8-43.6,25.5-66.4,38.8l-41.5,24.1,20,.6c10.9.4,92.7.7,181.7.8l161.8.1,30.7-17.6c45.4-26.1,72-41.6,87.2-50.8l13.5-8.1-5.5-.7c-3-.5-84.5-1-181-1.3L903.5,192Z"/><path d="M1257,209.2c-11.8,6.7-43.1,24.6-69.5,39.8l-48,27.7-.3,89.9c-.1,49.4.1,90.1.5,90.4s32.2-17.5,70.6-39.7l69.7-40.5-.1-79.6c-.1-43.9-.4-84.3-.8-89.9l-.6-10.2Z"/><path d="M566,86H380V458H752V86Zm19.53,244.5h-15.3V228.26h-.36l-20.34,11-3.06-12.06L572,213.5h13.5Z"/><path d="M186,209H0V458H372V209Zm27,167.47H159v-7l9-8.71c21.59-20.54,31.34-31.47,31.47-44.21,0-8.58-4.16-16.51-16.77-16.51-7.68,0-14.05,3.9-17.95,7.15l-3.64-8.06A37.08,37.08,0,0,1,185,290.53c18.21,0,25.88,12.48,25.88,24.57,0,15.61-11.31,28.22-29.13,45.38L175,366.72V367h38Z"/><path d="M946,278H760V458h372V278Zm-3.4,123.6c-7.3,0-13.7-2.3-16.9-4.4l2.4-6.8a29.41,29.41,0,0,0,14.4,4.1c11.3,0,14.8-7.2,14.7-12.6-.1-9.1-8.3-13-16.8-13h-4.9v-6.6h4.9c6.4,0,14.5-3.3,14.5-11,0-5.2-3.3-9.8-11.4-9.8a23.87,23.87,0,0,0-13,4.3l-2.3-6.4c3.4-2.5,10-5,17-5,12.8,0,18.6,7.6,18.6,15.5,0,6.7-4,12.4-12,15.3v.2c8,1.6,14.5,7.6,14.5,16.7C966.3,392.5,958.2,401.6,942.6,401.6Z"/></svg>    </div>
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
        `}).join("")
    }
    </ul>
    `);
}


function isParallax(x) {


}

$(document).ready(function() {

    if (!window.matchMedia("(max-width: 425px)").matches) {

        let sceneParallax = document.getElementById(`scene`);
        new Parallax(sceneParallax);

        mobile = false;
    
    }

    generateWaifuTop();

    if (args === 'waifu' || args === '"waifu"' || document.URL.includes("#waifu")) $('.waifu.container').addClass('showed');

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

        if (mobile) return

        if ($(e.target).parents('section').attr('class').includes("maximized")) {
            $(e.target).parents('section').removeClass("maximized");
        } else {
            $(e.target).parents('section').addClass("maximized");
        }

    });

});

