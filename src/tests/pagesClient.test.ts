import Client from "../index";

describe("Client.pageRequest()", () => {
  it("should return SyntaxError when attempting to make a request that is not a vaild typeof Client#pageRequest (CASE_TYPEOFERR)", async () => {
    expect.assertions(1);
    try {
      await Client.pageRequest("doesnotexist" as any);
    } catch (err) {
      expect(err.message).toBe("doesnotexist is not a vaild typeof Client#pageRequest");
    }
  });
  it("should return a PagesClientError when no/invaild key is passed. (CASE_PagesClientError_NOKEY)", async () => {
    expect.assertions(1);
    await Client.resetAuthStore();

    try {
      await Client.pageRequest("getAllAccountPages");
    } catch (err) {
      expect(err.message).toBe("Failed to get account pages. Ensure you have a key set before calling a pageRequest.");
    }
  });
});
