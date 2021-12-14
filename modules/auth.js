'use strict';

const memory = require('quick.db');
const axios = require('axios').default;
const { ClientAuthError } = require('../util/errors')


class Auth {
    /**
     * @typedef {String} AuthKey Your API key from https://instatus.com/app/developer
     * @param {AuthKey} AuthKey 
     * @param {any} opts Options. Vaild are: logRsp
     */

    constructor(AuthKey, Opts) {
        // perform test request on GET:Pages
        if (!AuthKey) return new ClientAuthError('Error: AuthKey is required');
        axios({
            method: 'GET',
            url: 'https://api.instatus.com/v1/pages',
            headers: { 'Authorization': `Bearer ${AuthKey.toString()}` } // should we call .toString here?
        }).then((rsp) => {
            let data = JSON.parse(JSON.stringify(rsp.data))
            if (data.error) {
                throw new ClientAuthError(`Auth Failed With instatus, code: ${data.error.code} (${data.error.message})`)
            } else {
                // add auth to db
                if (Opts === 'logrsp') {
                    memory.set('authkey', AuthKey.toString())
                    return console.log('[instatus-node] Authorization Sucess, Key is saved to json.sqlite.')
                } else {
                    memory.set('authkey', AuthKey.toString())
                    return 'authok'
                }
            }
        })
    }
}


module.exports = { Auth }