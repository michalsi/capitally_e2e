import {expect} from "@playwright/test";
import {FIELDS_TO_COMPARE, NUMBER_FORMATTER} from "../constants/reportConstants";
import {CSVRow, Totals} from "../models/CSVTypes";

export class ReportValidator {
    private readonly totals: Totals;
    private readonly uiValues: string[];

    constructor(csvData: CSVRow[], uiValues: string[]) {
        this.validateUIValues(uiValues);
        this.totals = this.calculateTotals(csvData);
        this.uiValues = uiValues;
    }

    private validateUIValues(uiValues: string[]): void {
        if (!Array.isArray(uiValues)) {
            throw new Error(`Expected uiValues to be an array, but got: ${typeof uiValues}`);
        }
        if (uiValues.length === 0) {
            throw new Error('No UI values found to compare');
        }
        if (uiValues.length !== FIELDS_TO_COMPARE.length) {
            throw new Error(`Expected ${FIELDS_TO_COMPARE.length} UI values but got ${uiValues.length}`);
        }
    }

    private calculateTotals(data: CSVRow[]): Totals {
        const initialTotals: Totals = {};
        FIELDS_TO_COMPARE.forEach(({field}) => {
            initialTotals[field] = 0;
        });

        return data.reduce((acc, row) => {
            FIELDS_TO_COMPARE.forEach(({field}) => {
                acc[field] += Number(row[field as keyof CSVRow] || 0);
            });
            return acc;
        }, initialTotals);
    }

    private formatNumber(num: number): string {
        return NUMBER_FORMATTER.format(num);
    }

    private getNumberFromString(str: string): number {
        return Number(str.trim().replace(/[^0-9,.+\-]/g, '').replace(/,/g, ''));
    }

    public compareValues(): void {
        FIELDS_TO_COMPARE.forEach(({field, label}, index) => {
            if (this.uiValues[index] === undefined) {
                throw new Error(`Missing UI value for ${label} at index ${index}`);
            }

            const csvValue = Number(this.formatNumber(this.totals[field]).replace(/,/g, ''));
            const uiValue = this.getNumberFromString(this.uiValues[index]);

            expect(csvValue, `Comparing ${label}`).toBeCloseTo(uiValue, 2);
        });
    }
}