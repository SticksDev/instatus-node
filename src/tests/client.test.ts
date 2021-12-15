import Client from "../index"
import { ClientAuthError, PagesClientError } from "../utils/errors"


describe("Client.login()", () => {
    it("should return ClientAuthError when attempting to login (CASE_LOGINFAILURE)", async () => {
        jest.setTimeout(9000)
        await Client.login('invaildkey').catch((c) => {
            expect(c).toEqual('ClientAuthError: Auth Failed With instatus, code: forbidden (API key does not belong to a user.)')
        })
    })
}) 

