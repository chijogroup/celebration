
class DayCountdown extends HTMLElement {

    constructor() {
      super();
    }

    connectedCallback() {

        this.targetDate = new Date("2023-8-26");
        this.nowDate = new Date();

        this.run();
    }


    run() {

        console.log(this.nowDate);

        const timeDiff = this.targetDate.getTime() - this.nowDate.getTime();

        const days = timeDiff / (1000 * 3600 * 24);

        const daysRounded = Math.ceil(days)

        if (daysRounded < 1) {
            this.innerHTML = `Today is the day!`
        } else if (daysRounded > 1) {
            this.innerHTML = `${daysRounded} days`
        } else {
            this.innerHTML = `${daysRounded} day`
        }
    }

}

customElements.define("day-countdown", DayCountdown);