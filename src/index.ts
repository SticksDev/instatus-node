
import ClientAuth from "./modules/auth"
import PagesClient from "./modules/pages"

type LoginOps = "logrsp" | 'jestpromise';

export default class Client {

    static async login(AuthKey: String, LoginOps?: LoginOps) {
        await ClientAuth.sendAuth(AuthKey, LoginOps)
    }
    
    static pageRequest(request: String, Opts?: any) {
        switch(request) {
            case "test":
                PagesClient.test()
                break
            default:
                new SyntaxError(`${request} is not a vaild typeof Client#pageRequest`)
                break
        }
    }
}