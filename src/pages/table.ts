import { ColumnDef } from "@tanstack/solid-table";
import { BudgetRow } from "../mocks/budget";

const monthColumn = (index: number, monthName: string) => {
     return {
         accessorFn: row => row[index],
         id: monthName,
         cell: info => info.getValue(),
         footer: info => info.column.id,
     }
 }

export const defaultColumns: ColumnDef<BudgetRow>[] = [
    {
        accessorFn: row => row[1],
        id: 'Name',
        cell: info => info.getValue(),
        footer: info => info.column.id,
    },
    monthColumn(2, 'Januar'),
    monthColumn(3, 'Februar'),
    monthColumn(4, 'Mars'),
    monthColumn(5, 'April'),
    monthColumn(6, 'Mai'),
    monthColumn(7, 'Juni'),
    monthColumn(8, 'Juli'),
    monthColumn(9, 'August'),
    monthColumn(10, 'September'),
    monthColumn(11, 'Oktober'),
    monthColumn(12, 'November'),
    monthColumn(13, 'Desember'),
    monthColumn(14, 'Net income'),
]
