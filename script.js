
jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        // initialize plyr
        var player = new Plyr('#audio1', {
            controls: [
                'restart',
                'play',
                'progress',
                'current-time',
                'mute',
            ]
        });
        //  playlist and controls
        var index = 0,
            playing = false,
            mediaPath = './audio/',
            extension = '',
            tracks = [{
                "track": 0,
                "name": "---",
                "duration": "4:43",
                "file": "btm002-1956",
                "description":"---",
                "headerIMG":"./img/modal_img/40-55.jpg"
            }, {
                "track": 1,
                "name": "1940/55 - Antes de…",
                "duration": "4:43",
                "file": "btm001-194055",
                "description":"Reino Unido bombardeado, año de nacimiento de Ringo y de John.<br>La infancia de los 4, sus familias, sus escuelas.<br>George conoce a Paul, mismo uniforme, mismo bus, mismo camino y un mismo afecto por las guitarras y la música.",
                "headerIMG":"./img/modal_img/40-55.jpg"
            }, {
                "track": 2,
                "name": "1956 - Se prende la llama",
                "duration": "8:30",
                "file": "btm002-1956",
                "description":"El Skiffle, los primeros instrumentos.<br>Los primeros discos: Lonnie Donegan, Elvis Presley.<br>La banda de John: The Quarrymen.",
                "headerIMG":"./img/modal_img/56.jpg"
            }, {
                "track": 3,
                "name": "1957 - El  místico encuentro",
                "duration": "5:01",
                "file": "btm003-1957",
                "description":"Woolton Liverpool, John toca con The Quarrynen y conoce a Paul.<br>The Quarrymen, sin Paul, se presenta en The Cavern: “Terminen con este maldito rock and roll”.",
                "headerIMG":"./img/modal_img/57.jpg"
            }, {
                "track": 4,
                "name": "1958 - Ya esta el núcleo creativo",
                "duration": "8:31",
                "file": "btm004-1958",
                "description":"George se incorpora al grupo.<br>Primera grabación en el Percy Phillips’Studio.<br>Las primeras composiciones de Lennon-McCartney.",
                "headerIMG":"./img/modal_img/58.jpg"
            }, {
                "track": 5,
                "name": "1959 - Casbah Club",
                "duration": "5:05",
                "file": "btm005-1959",
                "description":"La rotura del grupo que debía tocar esa noche, hace que de Quarrymen quede como la banda de los sábados en el Casbah.",
                "headerIMG":"./img/modal_img/59.jpg"
            }, {
                "track": 6,
                "name": "1960 - The Silver Beatles hacia Hamburgo",
                "duration": "2:48",
                "file": "btm006-1960",
                "description":"Se suma Stu con el bajo y Pete Best en batería.<br>El Indra y el Kaisserkeller.<br>El encuentro con los exis alemanes.",
                "headerIMG":"./img/modal_img/60.jpg"
            }, {
                "track": 7,
                "name": "1961 - The Cavern",
                "duration": "5:44",
                "file": "btm007-1961",
                "description":"Primera actuación con el nombre The Beatles, tocan en The Cavern, Liverpool.<br>Otro viaje a Hamburgo.<br>Brian Epstein se convierte en el manager.",
                "headerIMG":"./img/modal_img/61.jpg"
            }, {
                "track": 8,
                "name": "1962 - Hola Ringo!",
                "duration": "5:26",
                "file": "btm008-1962",
                "description":"Deca Sessions, el rechazo.<br>Audición con George Martin.<br>Entra Ringo.<br>3ro, 4to y 5to viaje a Hamburgo.",
                "headerIMG":"./img/modal_img/62.jpg"
            }, {
                "track": 9,
                "name": "1963 - Please, Please me",
                "duration": "5:46",
                "file": "btm009-1963",
                "description":"Please, please me, Número 1.<br>Las giras europeas.<br>Royal Variety Show, el show ante la realeza británica.",
                "headerIMG":"./img/modal_img/63.jpg"
            }, {
                "track": 10,
                "name": "1964 - Beatlemania",
                "duration": "5:25",
                "file": "btm010-1964",
                "description":"Primera Gira por USA.<br>Show de Ed Sullivan.<br>Primer film: A hard day's night.",
                "headerIMG":"./img/modal_img/64.jpg"
            }, {
                "track": 11,
                "name": "1965 - The Beatles, miembros del Imperio Británico",
                "duration": "5:53",
                "file": "btm011-1965",
                "description":"Segundo film: Help.<br>Los nombran miembros del Imperio Británico.<br>Primeros videoclips musicales de la historia de la cultura popular fílmica de la música grabada.<br>Tercera Gira por USA.",
                "headerIMG":"./img/modal_img/65.jpg"
            }, {
                "track": 12,
                "name": "1966 - Revolver",
                "duration": "4:40",
                "file": "btm012-1966",
                "description":"Se acercan por primera vez a la filosofía oriental y a la filosofía de la psicodelia con el libro Tibetano de los muertos y la prescripción de Timothy Lee.<br>Revolver, un álbum hito en la historia de la música popular.<br>Candlestick Park, última presentación en vivo.",
                "headerIMG":"./img/modal_img/66.jpg"
            }, {
                "track": 13,
                "name": "1967 - All You Need Is Love",
                "duration": "13:15",
                "file": "btm013-1967",
                "description":"Primera emisión mundial de la BBC, satelital: All you need is love, Sargent Pepper. Meditación trascendental.<br>Fallece Brian Epstein.<br>El viaje psicodélico. Magical Mistery Tour.",
                "headerIMG":"./img/modal_img/67.jpg"
            }, {
                "track": 14,
                "name": "1968 - Yellow Submarine",
                "duration": "8:12",
                "file": "btm014-1968",
                "description":"Viaje a la India.<br>Se gesta el Doble blanco.<br>El film Yellow Submarine.",
                "headerIMG":"./img/modal_img/68.jpg"
            }, {
                "track": 15,
                "name": "1969 - Get Back",
                "duration": "7:02",
                "file": "btm015-1969",
                "description":"El concierto en la terraza.<br>Protestas por la paz de John y Yoko.<br>The Beatles cruzan la franja peatonal de Abbey Road Street.",
                "headerIMG":"./img/modal_img/69.jpg"
            }, {
                "track": 16,
                "name": "1970 - The End",
                "duration": "5:43",
                "file": "btm016-1970",
                "description":"El álbum y el film Let it be.<br> Paul anuncia que se separa de The Beatles.",
                "headerIMG":"./img/modal_img/70.jpg"
            }],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackHeader = value.headerIMG,
                    trackDescription = value.description;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                }
                $('#plList').append('<li>  \
                        <div class="plItem" > \
                            <span class="plNum">' + trackNumber + '.</span> \
                             <span class="plTitle">' + trackName + '</span> \
                            <span class="plLength my-auto">\
            <!-- Button  modal --> \
                            <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#Modal' + trackNumber + '"> \
                            <i class="ri-expand-right-line"></i></button> \</span> \
                        </div> \
     <!-- Modal con # de track -->\
                        <div class="modal fade" id="Modal' + trackNumber + '" tabindex="-1" aria-labelledby="ModalLabel' + trackNumber + '" aria-hidden="true">\
                          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">\
                            <div class="modal-content">\
                              <div class="modal-header"  >\
                                <h1 class="modal-title fs-5" id="ModalLabel' + trackNumber + '">' + trackName + '</h1>\
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\
                              </div>\
                              <div class="modal-body">\
                                <div class="modal-image">\
                                <img class="rounded mx-auto d-block" src="' + trackHeader + '" alt="">\
                                </div>\
                                <p>' +trackDescription + '</p>\
     <!-- BTN Play en Modal -->\
                                </div>\
                                <use xlink:href="#plyr-play">\
                                    <div class="modal-footer">\
                                        <p>Reproducir</p><i class="ri-play-fill"></i>\
                                    </div>\
                                </use>\
                              </div>\
                            </div>\
                          </div>\
                        </div>\
                </li>');
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').on('play', function () {
                playing = true;
                npAction.text('Reproduciendo...');
            }).on('pause', function () {
                playing = false;
                npAction.text('|| Pausa ||');
            }).on('ended', function () {
                npAction.text('|| Pausa ||');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').on('click', function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').on('click', function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').on('click', function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
                updateDownload(id, audio.src);
            },
            updateDownload = function (id, source) {
                player.on('loadedmetadata', function () {
                    $('a[data-plyr="download"]').attr('href', source);
                });
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
            extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
            loadTrack(index);
        loadTrack(index);
    } else {
        // no audio support
        $('.column').addClass('hidden');
        var noSupport = $('#audio1').text();
        $('.container').append('<p class="no-support">' + noSupport + '</p>');
    }
});
$(document).ready(function () {
    $('.modal').each(function () {
        const modalId = `#${$(this).attr('id')}`;
        if (window.location.href.indexOf(modalId) !== -1) {
            $(modalId).modal('show');
        }
    });
});