class RandomList {
    #index;
    #list;
    #shuffle_on_wrap
    constructor(shuffle_on_wrap) {
        this.#index = null;
        this.#list = [];
        this.#shuffle_on_wrap = false;
        if (shuffle_on_wrap) {
            this.#shuffle_on_wrap = true;
        }
    }

    addItem(value) {
        this.#list.push(value);
        this.#index = null;
        return (this);
    }
    addItems(values) {
        this.#list.concat(values);
        this.#index = null;
        return (this);
    }
    addRange(min, max) {
        if (max < min) {
            [min, max] = [max, min];
        }
        for (let value = min; value <= max; value++) {
            this.#list.push(value);
        }
        this.#index = null;
        return (this);
    }

    shuffle() {
        if (this.#list.length == 0) {
            throw Error("Cannot shuffle an empty list");
        }
        for (let i = this.#list.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.#list[i], this.#list[j]] = [this.#list[j], this.#list[i]];
        }
        this.#index = 0;
        return (this);
    }

    next() {
        if (this.#index === null) {
            this.shuffle();
        }

        const value = this.#list[this.#index]
        if (++this.#index >= this.#list.length) {
            if (this.#shuffle_on_wrap) {
                this.shuffle();
            } else {
                this.#index = 0;
            }
        }
        return (value);
    }
}

list = new RandomList()
    .addItem(100)
    .addRange(1000, 2000);
console.info(list.next())