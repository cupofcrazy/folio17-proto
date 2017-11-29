import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import 'gsap'
import Hover from './Hover'

window.onload = () => {
    let scrollbar = document.querySelector('.scrollbar')
    Scrollbar.use(OverscrollPlugin)
    Scrollbar.init(scrollbar, {
        damping: 0.05,
        renderByPixels: true,
        plugins: {
            overscroll:  true,
            maxOverscroll: 300
        },
    })
    
    
    let tl = new TimelineMax();
        tl
            .from('.bg', 2, {
                y: 50,
                transformOrigin: '50% 50%',
                skewY: -45,
                autoAlpha: 0,
                ease: Expo.easeInOut
            })
            .staggerFrom('.Home-title div', .5, {
                y: 10,
                rotation: '-5deg',
                transformOrigin: '100% 50%',
                ease: Expo.ease,
                autoAlpha: 0
            }, 0.1)
            .add('center')
            .staggerFrom('.project-image', 1, {
                x: -50,
                width: '0%',
                transformOrigin: '0% 50%',
                ease: Sine.easeInOut
            }, .2, 'center')
            .staggerFrom('.image h1', .7, {
                y: 100,
                autoAlpha: 0
            }, .1, 'center')
            new Hover(document.querySelector('.Home-projects'))
}