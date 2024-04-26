import {ColumnDef} from "@tanstack/solid-table";
import {MonthExpense} from "../mocks/budget";

const monthColumn = (index: number, monthName: string) => {
     return {
         accessorFn: row => row[index],
         id: monthName,
         cell: info => info.getValue(),
         footer: info => info.column.id,
     }
 }

export const defaultColumns: ColumnDef<MonthExpense>[] = [
    monthColumn(0, 'Januar'),
    monthColumn(1, 'Februar'),
    monthColumn(2, 'Mars'),
    monthColumn(3, 'April'),
    monthColumn(4, 'Mai'),
    monthColumn(5, 'Juni'),
    monthColumn(6, 'Juli'),
    monthColumn(7, 'August'),
    monthColumn(8, 'September'),
    monthColumn(9, 'Oktober'),
    monthColumn(10, 'November'),
    monthColumn(11, 'Desember'),
]
