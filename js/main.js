//Counter animation
window.onscroll = function () {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 2600) {
        const elem = document.querySelectorAll(".counter__count");

        elem.forEach(element => {
            let num = element.dataset.number;
            let count = 0;
            let t = 10;
            let countUP = new CountUp(element, 0, num, 0, 3)
            countUP.start();

        });

        window.onscroll = null;
    }

}

