document.addEventListener('DOMContentLoaded', function () {

    document.getElementById( 'pronounce-button' ).addEventListener( 'click', function() {
        document.getElementById( 'pronounce-audio' ).play();
        document.getElementById( 'pronounce-button' ).classList.add( 'pause');
        document.getElementById( 'pronounce-button' ).classList.remove( 'play');
    })

    document.getElementById( 'pronounce-audio' ).addEventListener('ended', function() {
        document.getElementById( 'pronounce-button' ).classList.remove( 'pause');
        document.getElementById( 'pronounce-button' ).classList.add( 'play');
    })

}, false);
