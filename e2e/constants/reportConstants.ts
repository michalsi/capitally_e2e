export const FIELDS_TO_COMPARE = [
    {field: 'value', label: 'Total Value'},
    {field: 'qty', label: 'Quantity'},
    {field: 'returns', label: 'Returns'},
    {field: 'expense', label: 'Expense'},
    {field: 'revenue', label: 'Revenue'},
    {field: 'fees', label: 'Fees'},
    {field: 'taxPaid', label: 'Tax Paid'},
    {field: 'taxDue', label: 'Tax Due'},
    {field: 'taxPotential', label: 'Tax Potential'},
    {field: 'taxHarvestable', label: 'Tax Harvestable'}
] as const;

export const NUMBER_FORMATTER = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});