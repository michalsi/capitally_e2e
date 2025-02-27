import {test} from "../fixtures";
import * as fs from "node:fs";
import {parse} from 'csv-parse/sync';
import {ReportValidator} from "../utils/ReportValidator";
import {CSVRow} from "../models/CSVTypes";


test("Reports Test - verify exporting to CSV file", async ({testContext}) => {
    const summaryPage  = testContext.summaryPage ;
    const reportsPage = testContext.reportsPage;

    await summaryPage.navigate();
    await summaryPage.acceptCookies();
    await summaryPage.clickReportsMenu();
    await reportsPage.waitForPageLoad();

    const uiValues = await reportsPage.getTotalRowValues();

    const csvPath = await reportsPage.exportCSVReport();
    const csvContent = fs.readFileSync(csvPath, 'utf8');
    const records = parse(csvContent, {
        columns: true,
        skip_empty_lines: true,
        delimiter: '\t'
    }) as CSVRow[];

    const validator = new ReportValidator(records, uiValues);
    validator.compareValues();
});