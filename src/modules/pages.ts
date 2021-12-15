import memory = require("quick.db");
import axios from "axios";
import { PagesClientError } from "../utils/errors";

let auth = memory.get("authkey");
let data;

export default class pagesClient {
  static async getAllAccountPages() {
    return axios({
      method: "GET",
      url: "https://api.instatus.com/v1/pages",
      headers: { Authorization: `Bearer ${auth}` },
    })
      .then(({ data }) => {
        data = JSON.parse(JSON.stringify(data));

        if (data.error.code) {
          throw new PagesClientError(
            `Failed to get account pages. Ensure you have a key set before calling a pageRequest.`
          );
        }

        return data;
      })
      .catch((err) => {
        throw err;
      });
  }
}
