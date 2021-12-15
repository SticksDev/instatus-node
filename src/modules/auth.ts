import memory = require('quick.db');
import axios from "axios";
import { ClientAuthError } from "../utils/errors"

let data;

export default class ClientAuth {
    /**
     * @typedef {String} AuthKey Your API key from https://instatus.com/app/developer
     * @param {AuthKey} AuthKey 
     * @param {any} opts Options. Vaild are: logRsp
     */

    static async sendAuth(AuthKey: String, Opts: String | undefined) {
        // perform test request on GET:Pages
        if (!AuthKey) return new ClientAuthError('Error: AuthKey is required');
        return axios({
            method: 'GET',
            url: 'https://api.instatus.com/v1/pages',
            headers: { 'Authorization': `Bearer ${AuthKey.toString()}` } // should we call .toString here?
        }).then((rsp) => {
            data = JSON.parse(JSON.stringify(rsp.data))
            if (Opts === 'logrsp') {
                memory.set('authkey', AuthKey.toString())
                return console.log('[instatus-node] Authorization Sucess, Key is saved to json.sqlite.')
            } else {
                memory.set('authkey', AuthKey.toString())
                return 
            }

        }).catch((err) => {
            throw new ClientAuthError(`Auth Failed With instatus, code: ${data.error.code} (${data.error.message})`)
        })
    }
}

