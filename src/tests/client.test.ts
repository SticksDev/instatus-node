import Client from "../index";

describe("Client.login()", () => {
  it("should return ClientAuthError when attempting to login (CASE_LOGINFAILURE)", async () => {
    expect.assertions(1);
    try {
      await Client.login("invaildkey");
    } catch (err) {
      expect(err.message).toBe("Auth Failed With instatus, code: forbidden (API key does not belong to a user.)");
    }
  });
});
