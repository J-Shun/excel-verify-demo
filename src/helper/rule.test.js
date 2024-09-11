import { describe, expect, test } from 'vitest'
import { checkColumnsCount, checkColumnsName } from "./rule";

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

describe("checkColumnsName", () => {
  test("欄位名稱與要求相符", () => {
    const jsonData = [
      ["Name", "Age"]
    ];
    const expectedNames = ["Name", "Age"];
    const result = checkColumnsName({ jsonData, expectedNames });
    const expectedResult = {
      isPassed: true,
      text: ""
    }

    expect(result).toEqual(expectedResult);
  });

  test("欄位名稱與要求相符", () => {
    const jsonData = [
      ["Name", "Age"]
    ];
    const expectedNames = ["Name", "Phone"];
    const result = checkColumnsName({ jsonData, expectedNames });
    const expectedResult = {
      isPassed: false,
      text: "Age 不在規格範圍內, 請調整欄位名稱"
    }

    expect(result).toEqual(expectedResult);
  });
});