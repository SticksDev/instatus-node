
import ClientAuth from "./modules/auth"
import PagesClient from "./modules/pages"
import memory = require('quick.db');

type LoginOps = "logrsp" | 'jestpromise';

export default class Client {

    static async login(AuthKey: String, LoginOps?: LoginOps) {
        await ClientAuth.sendAuth(AuthKey, LoginOps)
    }

    static resetAuthStore() {
        memory.delete('authkey')
    }

    static forceAuthSet(AuthKey: String) {
        console.log('[instaus-node] WARNING: Forceing the auth key to be set may cause errors!')
        memory.set('authkey', AuthKey)
    }
    
    static async pageRequest(request: String, Opts?: any) {
        switch(request) {
            default:
                new SyntaxError(`${request} is not a vaild typeof Client#pageRequest`)
                break
        }
    }
}