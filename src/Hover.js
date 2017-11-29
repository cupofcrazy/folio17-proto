class Hover {
    constructor(el) {
        this.images = el.querySelectorAll('.image');
        this.hover = false;
        this.tl = new TimelineMax()
        this.init()

    }
    init() {
        this.initEvents()
    }
    initEvents() {
        this.images.forEach((image) => {
            image.addEventListener('mouseenter', this.enter.bind(this))
            image.addEventListener('mouseleave', this.leave.bind(this))
        })
    }
    enter(e) {
        this.hover = true;
        let tl = new TimelineMax()
        let title = e.target.querySelector('.title h1');
        tl
            .to(e.target, .5, {
                y: 50,
                skewY: -5
            }, 0)
            .to(title, .3, {
                y: -50,
                autoAlpha: 0
            }, 0)
            tl.play()
        
    }
    leave(e) {
        if (this.hover) {
            let title = e.target.querySelector('.title h1');
            let tl = new TimelineMax()
            tl.to(e.target, 1, {
                y: 0,
                scale: 1,
                skewY: 0
            })
            .fromTo(title, .3, {
                y: 50,
                autoAlpha: 0
            }, {
                y: 0,
                autoAlpha: 1
            }, 0)

            
        }
        this.hover = false
        
        
    }
}

export default Hover;