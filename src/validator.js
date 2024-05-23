export default class Validator {
    constructor(username) {
        this.username = username;
    }

    validateUsername() {
        return /^([a-zA-z]+)[-_]*[0-9]{0,3}[-_]|[0-9]{0,3}[_-]*([a-zA-Z]+)$/.test(this.username);
    }
}
