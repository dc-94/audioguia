let playlist = []
//card productos
let mainAudios = document.getElementById("mainAudios")
class Card {
    constructor(title, img, desc, aud) {
        this.title = title
        this.img = img
        this.desc = desc
        this.aud = aud
    }
}


playlist.push(new Card("1940-55", "/img/default.jpg", "loreCosas que les pasan a Los Bitles entre los años tanto y tanto. Cosas que les pasan a Los Bitles entre los años tanto y tanto.Cosas que les pasan a Los Bitles entre los años tanto y tantom10", "/audio/btm001-1940:55.mp3"))

playlist.push(new Card(1956, "/img/default1.jpg", "loreCosas que les pasan a Los Bitles entre los años tanto y tanto. Cosas que les pasantom10", "/audio/btm002-1956.mp3"))

playlist.push(new Card( 1957, "/img/default2.jpg", "loreCosas que les pasan a Los Bitles entre los años0", "/audio/btm003-1957.mp3"))

playlist.push(new Card(1958, "/img/default1.jpg", "loreCosas que les pasan a Los Bitles entre los años tanto y tanto. Cosas que les pasantom10", "/audio/btm004-1958.mp3"))

playlist.push(new Card( 1959, "/img/default2.jpg", "loreCosas que les pasan a Los Bitles entre los años0", "/audio/btm005-1959.mp3"))

playlist.push(new Card(1960, "/img/default1.jpg", "loreCosas que les pasan a Los Bitles entre los años tanto y tanto. Cosas que les pasantom10", "/audio/btm006-1960.mp3"))

playlist.push(new Card( 1961, "/img/default2.jpg", "loreCosas que les pasan a Los Bitles entre los años0", "/audio/btm007-1961.mp3"))

playlist.push(new Card( 1962, "/img/default2.jpg", "loreCosas que les pasan a Los Bitles entre los años0", "/audio/btm008-1962.mp3"))

playlist.push(new Card( 1963, "/img/default2.jpg", "loreCosas que les pasan a Los Bitles entre los años0", "/audio/btm009-1963.mp3"))

playlist.push(new Card( 1964, "/img/default2.jpg", "loreCosas que les pasan a Los Bitles entre los años0", "/audio/btm010-1964.mp3"))

playlist.push(new Card( 1965, "/img/default2.jpg", "loreCosas que les pasan a Los Bitles entre los años0", "/audio/btm011-1965.mp3"))

playlist.push(new Card( 1966, "/img/default2.jpg", "loreCosas que les pasan a Los Bitles entre los años0", "/audio/btm012-1966.mp3"))

playlist.push(new Card( 1967, "/img/default2.jpg", "loreCosas que les pasan a Los Bitles entre los años0", "/audio/btm013-1967.mp3"))

playlist.push(new Card( 1968, "/img/default2.jpg", "loreCosas que les pasan a Los Bitles entre los años0", "/audio/btm014-1968.mp3"))

playlist.push(new Card( 1969, "/img/default2.jpg", "loreCosas que les pasan a Los Bitles entre los años0", "/audio/btm015-1969.mp3"))

playlist.push(new Card( 1970, "/img/default2.jpg", "loreCosas que les pasan a Los Bitles entre los años0", "/audio/btm016-1970.mp3"))


//mostrar cards
show = () => {
    playlist.forEach((Card, indice) => {
        mainAudios.innerHTML += `
        <div class="audio_card" id="audio_${indice + 1}">

        <div class="audio_card-img">
        <input class="audio_card-img_playbtn" type="button" id="boton" value="Reproducir">
        <img class=" " src="./img/default2.jpg" alt="">
        <div class="audio_card-img_play"></div>
    </div>
    <div class="audio_card-txt">
        <div class="audio_card-txt_year">
            <h1>${Card.title}</h1>    
        </div>
        <div class="audio_card-txt_description">
            <p>${Card.desc}</p>
        </div>
    </div>
        `
    })
}
show()


// When the user scrolls the page, execute myFunction 
window.onscroll = function() {stickyHeader()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
