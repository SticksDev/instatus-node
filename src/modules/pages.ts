import memory = require('quick.db');
import axios from "axios";
import { PagesClientError } from "../utils/errors"

let auth = memory.get('authkey');

if (!auth) new SyntaxError('<library>.Client.Auth must be invoked before attempting a PageRequest.');


export default class PagesClient {
    static test() {
        return console.log('hah yes')
    }
}

