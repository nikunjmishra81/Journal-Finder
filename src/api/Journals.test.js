const { getSearchedJournals } = require("./Journals");
const axios = require("axios");
const { JOURNALS_LIST } = require("../__mock__/JournalsListMock");
const { getCommonHeadersForAPI } = require("../config/apiHeaders");

jest.mock("axios");

describe.skip("getSearchedJournals API", () => {
  it("success", () => {
    axios.post.mockResolvedValue({
      data: JOURNALS_LIST[0].results,
    });
  });
  const data = { x: "y" };
  const title = getSearchedJournals(data);
  expect(title).toEqual(JOURNALS_LIST[0].results);
});
