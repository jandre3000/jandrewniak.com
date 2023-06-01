document.addEventListener('DOMContentLoaded', function () {
    const options = {
        root: document,
        rootMargin: '0px 0px -50% 0px',
        threshold: 0.1
    }

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if ( entry.isIntersecting ) {
                document.body.classList.add( 'reloader-visible' )
            }

        } )
    }

    const observer = new IntersectionObserver(callback, options)

    const targetEl = document.querySelector('.content')

    observer.observe(targetEl)

}, false )