export default class Validator {
    constructor(username) {
        this.username = username;
    }

    validateUsername() {
        const regex = /^([a-zA-Z]+)([a-zA-Z_-]*\d{0,3}|[a-zA-Z_-]*\d{0,3})*([a-zA-Z]+)$/i;
        return regex.test(this.username);
    }
}
