import { describe, expect, test } from 'vitest'
import { checkColumnsCount } from "./rule";

describe("checkColumnsCount", () => {
  test("欄位數量符合需求", () => {
    const jsonData = [
      ["Name", "Age"]
    ];
    const count = 2;
    const result = checkColumnsCount({ jsonData, count });
    const expectedResult = {
      isPassed: true,
      text: ""
    }

    expect(result).toEqual(expectedResult);
  });


  test("欄位數量不符合需求", () => {
    const jsonData = [
      ["Name", "Age", 'Phone']
    ];
    const count = 2;
    const result = checkColumnsCount({ jsonData, count });
    const expectedResult = {
      isPassed: false,
      text: "檔案欄位數量與規格不符，請確認有無遺漏/多餘欄位"
    }

    expect(result).toEqual(expectedResult);
  });
});