export class ClientAuthError extends Error {
    constructor(message?: string ) {
        super(message);

        this.name = 'ClientAuthError'
    }
}

export class PagesClientError extends Error {
    constructor(message?: string ) {
        super(message);

        this.name = 'PagesClientError'
    }
}
