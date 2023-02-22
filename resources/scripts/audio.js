document.addEventListener('DOMContentLoaded', function () {

    document.getElementById( 'pronounce-button' ).addEventListener( 'click', function() {
        document.getElementById( 'pronounce-audio' ).play();
        document.getElementById( 'pronounce-indicator' ).classList.add( 'pause');
        document.getElementById( 'pronounce-indicator' ).classList.remove( 'play');
    })

    document.getElementById( 'pronounce-audio' ).addEventListener('ended', function() {
        document.getElementById( 'pronounce-indicator' ).classList.remove( 'pause');
        document.getElementById( 'pronounce-indicator' ).classList.add( 'play');
    })

}, false);
