import Client from "../index"
import { ClientAuthError, PagesClientError } from "../utils/errors"


describe("client.login()", () => {
    it("should return ClientAuthError when attempting to login (CASE_LOGINFAILURE)", () => {
        Client.login('invaildkey').catch((err) => {
            expect(err).toEqual('ClientAuthError: Auth Failed With instatus, code: forbidden (API key does not belong to a user.)')
        })
    })
}) 
