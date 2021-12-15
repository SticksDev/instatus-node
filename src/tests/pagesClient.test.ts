import Client from "../index"



describe("Client.pageRequest()", () => {
    it("should return SyntaxError when attempting to make a request that is not a vaild typeof Client#pageRequest (CASE_TYPEOFERR)", () => {
        Client.pageRequest('doesnotexist').catch((err) => {
            expect(err).toEqual(`doesnotexist is not a vaild typeof Client#pageRequest`)
        })
    })
}) 

