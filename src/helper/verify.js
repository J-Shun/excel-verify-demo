import * as XLSX from "xlsx";
import { checkColumnsCount, checkColumnsName } from "./rule";

/* SHEET1*/

/**
 * 驗證 Excel 工作表
 * @param {XLSX.WorkSheet} worksheet - Excel 工作表
 * @returns {{ isPassed: boolean, text: string }} - 驗證結果
 */
export const verifyGNIReportData = (worksheet) => {
  const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  // 欄位數量驗證
  const columnCountResult = checkColumnsCount({ jsonData, count: 15 });

  if (!columnCountResult.isPassed) {
    return columnCountResult;
  }

  // 欄位名稱驗證
  const expectedNames = Array.from({ length: 15 }, (_, i) => `columns${i + 1}`);
  const columnNamesResult = checkColumnsName({ jsonData, expectedNames });
  if (!columnNamesResult.isPassed) {
    return columnNamesResult;
  }
 

  return {
    isPassed: true,
    text: "PASS"
  };
}


/**
 * 驗證 Excel 工作表
 * @param {XLSX.WorkSheet} worksheet - Excel 工作表
 * @returns {{ isPassed: boolean, text: string }} - 驗證結果
 */
export const verifyGNIMetaData = (worksheet) => {
  const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  // 欄位數量驗證
  const columnCountResult = checkColumnsCount({ jsonData, count: 15 });

  if (!columnCountResult.isPassed) {
    return columnCountResult;
  }

  // 欄位名稱驗證
  const expectedNames = Array.from({ length: 15 }, (_, i) => `columns${i + 1}`);
  const columnNamesResult = checkColumnsName({ jsonData, expectedNames });
  if (!columnNamesResult.isPassed) {
    return columnNamesResult;
  }
  
  return {
    isPassed: true,
    text: "PASS"
  };
}

/* SHEET2 */

/* SHEET3 */

/* SHEET4 */

/**
 * 驗證 Excel 工作表
 * @param {XLSX.WorkSheet} worksheet - Excel 工作表
 * @returns {{ isPassed: boolean, text: string }} - 驗證結果
 */
export const verifyMajorCase = (worksheet) => {
  const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  // 欄位數量驗證
  const columnCountResult = checkColumnsCount({ jsonData, count: 10 });

  if (!columnCountResult.isPassed) {
    return columnCountResult;
  }

  // 欄位名稱驗證
  const expectedNames = Array.from({ length: 10 }, (_, i) => `columns${i + 1}`);
  const columnNamesResult = checkColumnsName({ jsonData, expectedNames });
  if (!columnNamesResult.isPassed) {
    return columnNamesResult;
  }

  return {
    isPassed: true,
    text: "PASS"
  };
}

/**
 * 驗證 Excel 工作表
 * @param {XLSX.WorkSheet} worksheet - Excel 工作表
 * @returns {{ isPassed: boolean, text: string }} - 驗證結果
 */
export const verifyMajorCaseDetail = (worksheet) => {
  const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  // 欄位數量驗證
  const columnCountResult = checkColumnsCount({ jsonData, count: 15 });

  if (!columnCountResult.isPassed) {
    return columnCountResult;
  }

  // 欄位名稱驗證
  const expectedNames = Array.from({ length: 15 }, (_, i) => `columns${i + 1}`);
  const columnNamesResult = checkColumnsName({ jsonData, expectedNames });
  if (!columnNamesResult.isPassed) {
    return columnNamesResult;
  }

  return {
    isPassed: true,
    text: "PASS"
  };
}

/* SHEET5 */

/**
 * 驗證 Excel 工作表
 * @param {XLSX.WorkSheet} worksheet - Excel 工作表
 * @returns {{ isPassed: boolean, text: string }} - 驗證結果
 */
export const verifyCaseDetail = (worksheet) => {
  const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  // 欄位數量驗證
  const columnCountResult = checkColumnsCount({ jsonData, count: 10 });

  if (!columnCountResult.isPassed) {
    return columnCountResult;
  }

  // 欄位名稱驗證
  const expectedNames = Array.from({ length: 10 }, (_, i) => `columns${i + 1}`);
  const columnNamesResult = checkColumnsName({ jsonData, expectedNames });
  if (!columnNamesResult.isPassed) {
    return columnNamesResult;
  }
  return {
    isPassed: true,
    text: "PASS"
  };
}