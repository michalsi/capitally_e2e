export interface CSVRow {
    type: string;
    name: string;
    'account.id': string;
    'account.name': string;
    'account.folder': string;
    value: string;
    ccy: string;
    qty: string;
    returns: string;
    expense: string;
    revenue: string;
    fees: string;
    taxPaid: string;
    taxDue: string;
    taxPotential: string;
    taxHarvestable: string;
    price: string;
}

export interface Totals {
    [key: string]: number;
}