import Client from "../index"



describe("Client.pageRequest()", () => {
    it("should return SyntaxError when attempting to make a request that is not a vaild typeof Client#pageRequest (CASE_TYPEOFERR)", () => {
        Client.pageRequest('doesnotexist' as any).catch((err) => {
            expect(err).toEqual(`doesnotexist is not a vaild typeof Client#pageRequest`)
        })
    })
    it("should return a PagesClientError when no/invaild key is passed. (CASE_PagesClientError_NOKEY)", async () => {
        await Client.resetAuthStore()
        await Client.pageRequest('getAllAccountPages').catch(async (err) => {
            await console.log(err.message)
            expect(err).toEqual('Failed to get account pages. Ensure you have a key set before calling a pageRequest.')
        })
    })
})

