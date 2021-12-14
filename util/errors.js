class ClientAuthError extends Error {
    constructor(message) {
        super(message);

        this.name = 'ClientAuthError'
    }
}

class PagesClientError extends Error {
    constructor(message) {
        super(message);

        this.name = 'PagesClientError'
    }
}

module.exports = { ClientAuthError, PagesClientError }