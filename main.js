let playlist = []
//card productos
let mainAudios = document.getElementById("mainAudios")
class Card {
    constructor(title, img, desc, url) {
        this.title = title
        this.img = img
        this.desc = desc
        this.url = url
    }
}


playlist.push(new Card(1955, "/img/default.jpg", "loreCosas que les pasan a Los Bitles entre los años tanto y tanto. Cosas que les pasan a Los Bitles entre los años tanto y tanto.Cosas que les pasan a Los Bitles entre los años tanto y tantom10", "https://cepadecards.com/wp-content/uploads/2016/09/Espumante-Salentein-Blanc-de-Blancs-Fullbody.png"))

playlist.push(new Card(1960, "/img/default1.jpg", "loreCosas que les pasan a Los Bitles entre los años tanto y tanto. Cosas que les pasantom10", "https://cepadecards.com/wp-content/uploads/2016/09/Espumante-Salentein-Blanc-de-Blancs-Fullbody.png"))

playlist.push(new Card( 1970, "/img/default2.jpg", "loreCosas que les pasan a Los Bitles entre los años0", "https://cepadecards.com/wp-content/uploads/2016/09/Espumante-Salentein-Blanc-de-Blancs-Fullbody.png"))

playlist.push(new Card(1960, "/img/default1.jpg", "loreCosas que les pasan a Los Bitles entre los años tanto y tanto. Cosas que les pasantom10", "https://cepadecards.com/wp-content/uploads/2016/09/Espumante-Salentein-Blanc-de-Blancs-Fullbody.png"))

playlist.push(new Card( 1970, "/img/default2.jpg", "loreCosas que les pasan a Los Bitles entre los años0", "https://cepadecards.com/wp-content/uploads/2016/09/Espumante-Salentein-Blanc-de-Blancs-Fullbody.png"))

playlist.push(new Card(1960, "/img/default1.jpg", "loreCosas que les pasan a Los Bitles entre los años tanto y tanto. Cosas que les pasantom10", "https://cepadecards.com/wp-content/uploads/2016/09/Espumante-Salentein-Blanc-de-Blancs-Fullbody.png"))

playlist.push(new Card( 1970, "/img/default2.jpg", "loreCosas que les pasan a Los Bitles entre los años0", "https://cepadecards.com/wp-content/uploads/2016/09/Espumante-Salentein-Blanc-de-Blancs-Fullbody.png"))

//mostrar productos cargados
show = () => {
    playlist.forEach((Card, indice) => {
        mainAudios.innerHTML += `
        <div class="audio_card" id="audio_${indice + 1}">

            <div class="audio_card-img">
                <img class=" " src="${Card.img}" alt="">
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
                            <!-- redirect -->
                                <a href=${Card.url}"><span class="audio_card-link"></span></a>
                            <!-- redirect -->
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