'use strict';

const memory = require('quick.db');
const axios = require('axios').default;
const { PagesClientError } = require('../util/errors');

let auth = memory.get('authkey');

if (!auth) return SyntaxError('<library>.Client.Auth must be invoked before attempting a PageRequest.');


class execute {
    constructor(operation, opts) {
        switch (operation) {
            case "test":
                return 'foo';
            default:
                return SyntaxError(`${operation} is not a vaild PageRequest.`);
        }
    }
}


module.exports = { execute }