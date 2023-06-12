
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
                'autoplay',
            ]
        });
        //  playlist and controls
        var index = 0,
            playing = false,
            mediaPath = './audio/',
            extension = '',
            tracks = [{
                "track": 1,
                "name": "1940/55",
                "duration": "4:43",
                "file": "btm001-1940:55"
            }, {
                "track": 2,
                "name": "1956",
                "duration": "8:30",
                "file": "btm002-1956"
            }, {
                "track": 3,
                "name": "1957",
                "duration": "5:01",
                "file": "btm003-1957"
            }, {
                "track": 4,
                "name": "1958",
                "duration": "8:31",
                "file": "btm004-1958"
            }, {
                "track": 5,
                "name": "1959",
                "duration": "5:05",
                "file": "btm005-1959"
            }, {
                "track": 6,
                "name": "1960",
                "duration": "2:48",
                "file": "btm006-1960"
            }, {
                "track": 7,
                "name": "1961",
                "duration": "5:44",
                "file": "btm007-1961"
            }, {
                "track": 8,
                "name": "1962",
                "duration": "5:26",
                "file": "btm008-1962"
            }, {
                "track": 9,
                "name": "1963",
                "duration": "5:46",
                "file": "btm009-1963"
            }, {
                "track": 10,
                "name": "1964",
                "duration": "5:25",
                "file": "btm010-1964"
            }, {
                "track": 11,
                "name": "1965",
                "duration": "5:53",
                "file": "btm011-1965"
            }, {
                "track": 12,
                "name": "1966",
                "duration": "4:40",
                "file": "btm012-1966"
            }, {
                "track": 13,
                "name": "1967",
                "duration": "13:15",
                "file": "btm013-1967"
            }, {
                "track": 14,
                "name": "1968",
                "duration": "8:12",
                "file": "btm014-1968"
            }, {
                "track": 15,
                "name": "1969",
                "duration": "7:02",
                "file": "btm015-1969"
            }, {
                "track": 16,
                "name": "1970",
                "duration": "5:43",
                "file": "btm016-1970"
            }],
            buildPlaylist = $.each(tracks, function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackDuration = value.duration;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                }
                $('#plList').append('<li>  \
                        <div class="plItem" > \
                            <span class="plNum">' + trackNumber + '.</span> \
                             <span class="plTitle">' + trackName + '</span> \
                            <span class="plLength">\
                            <!-- Button  modal --> \
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal' + trackNumber + '"> \
                                Leer  mas</button> \</span> \
                        </div> \
     <!-- Modal con # de track -->\
                        <div class="modal fade" id="Modal' + trackNumber + '" tabindex="-1" aria-labelledby="ModalLabel' + trackNumber + '" aria-hidden="true">\
                          <div class="modal-dialog modal-dialog-scrollable">\
                            <div class="modal-content">\
                              <div class="modal-header">\
                                <h1 class="modal-title fs-5" id="ModalLabel' + trackNumber + '">Modal title</h1>\
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\
                              </div>\
                              <div class="modal-body">\
                                <p>' +trackName + '</p>\
     <!-- BTN Play en Modal -->\
                                <svg class="icon--pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-pause"></use></svg>\
                                <svg class="icon--not-pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-play"></use></svg>\
                                <span class="label--pressed plyr__sr-only">Pause</span>\
                                <span class="label--not-pressed plyr__sr-only">Play</span>\
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


