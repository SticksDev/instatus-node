
import ClientAuth from "./modules/auth"
import PagesClient from "./modules/pages"
import memory = require('quick.db');

type LoginOps = "logrsp";
type pageRequest = "getAllAccountPages"


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
    
    static async pageRequest(request: pageRequest, Opts?: any) {
        switch(request) {
            case "getAllAccountPages":
                await PagesClient.getAllAccountPages()
            default:
                new SyntaxError(`${request} is not a vaild typeof Client#pageRequest`)
                break
        }
    }
}