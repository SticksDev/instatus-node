import memory = require("quick.db");
import axios from "axios";
import { LoginOps } from "..";
import { ClientAuthError } from "../utils/errors";

let data;

export default class ClientAuth {
  /**
   * @typedef {String} AuthKey Your API key from https://instatus.com/app/developer
   * @param {AuthKey} AuthKey
   * @param {any} opts Options. Vaild are: logRsp
   */

  static async sendAuth(AuthKey: String, Opts?: LoginOps) {
    return axios({
      method: "GET",
      url: "https://api.instatus.com/v1/pages",
      headers: { Authorization: `Bearer ${AuthKey.toString()}` }, // should we call .toString here?
    })
      .then(({ data }) => {
        data = JSON.parse(JSON.stringify(data));
        if (data.error.code) {
          throw new ClientAuthError(`Auth Failed With instatus, code: ${data.error.code} (${data.error.message})`);
        }

        if (Opts === "logrsp") {
          memory.set("authkey", AuthKey.toString());
          return console.log("[instatus-node] Authorization Sucess, Key is saved to json.sqlite.");
        } else {
          memory.set("authkey", AuthKey.toString());
          return;
        }
      })
      .catch((err) => {
        throw err;
      });
  }
}
