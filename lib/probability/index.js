module.exports = {
    random() {
        return Math.random();
    },

    randomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },

    factorial(n) {
        return n * factorial(n-1);
    }
};
