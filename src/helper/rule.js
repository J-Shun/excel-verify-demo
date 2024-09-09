import * as XLSX from "xlsx";

/**
 * 檢驗 Excel 工作表的欄位數量
 * @param {Object} items - 參數物件
 * @param {Array} items.jsonData - Excel 資料
 * @param {number} items.count - 欄位數量
 * @returns {{ isPassed: boolean, text: string }} - 檢驗結果
 */
export const checkColumnsCount = ({ jsonData, count }) => {
  const isColumnsCorrect = jsonData.every((row) => row.length === count);
  return {
    isPassed: isColumnsCorrect,
    text: isColumnsCorrect ? "" : "檔案欄位數量與規格不符，請確認有無遺漏/多餘欄位"
  };
}

/**
 * 檢驗 Excel 工作表的欄位名稱
 * @param {Object} items - 參數物件
 * @param {Array} items.jsonData - Excel 資料
 * @param {string[]} items.expectedNames - 預期的欄位名稱
 * @returns {{ isPassed: boolean, text: string }} - 檢驗結果
 */
export const checkColumnsName = ({ jsonData, expectedNames }) => {
  const columnNames = jsonData[0];
  const invalidColumnNames = [];
 
  for (let i = 0; i < expectedNames.length; i++) {
    if (columnNames[i] !== expectedNames[i]) {
      invalidColumnNames.push(columnNames[i]);
    }
  }

  const isPassed = invalidColumnNames.length === 0;

  return {
    isPassed,
    text: isPassed ? "" : `${invalidColumnNames.join('、')} 不在規格範圍內, 請調整欄位名稱` 
  }
}