import {For} from 'solid-js';
import {createSolidTable, flexRender, getCoreRowModel} from "@tanstack/solid-table";
import {defaultColumns} from "./table";
import {BudgetDataType,} from "../resources/regnskap.data";
import {useRouteData} from "@solidjs/router";

export default function Home() {
    const budgetData = useRouteData<BudgetDataType>()

    const table = createSolidTable({
        get data() {
            if (budgetData.loading) return []
            const { rows } = budgetData()
            return rows
        },
        columns: defaultColumns,
        getCoreRowModel: getCoreRowModel(),
    })

  return (
      <section class="bg-gray-100 text-gray-700 p-8">
          <h1 class="text-2xl font-bold">Home</h1>
          <p class="mt-4">This is the home page.</p>


          <table>
              <thead>
              <For each={table.getHeaderGroups()}>
                  {headerGroup => (
                      <tr class="border-b border-gray-400">
                          <For each={headerGroup.headers}>
                              {header => (
                                  <th class="p-2 bg-gray-200">
                                      {header.isPlaceholder
                                          ? null
                                          : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext()
                                          )}
                                  </th>
                              )}
                          </For>
                      </tr>
                  )}
              </For>
              </thead>
              <tbody>
              <For each={table.getRowModel().rows}>
                  {row => (
                      <tr>
                          <For each={row.getVisibleCells()}>
                              {cell => (
                                  <td class="p-2 border-b border-r last:border-r-0">
                                      {flexRender(
                                          cell.column.columnDef.cell,
                                          cell.getContext()
                                      )}
                                  </td>
                              )}
                          </For>
                      </tr>
                  )}
              </For>
              </tbody>
              <tfoot>
              <For each={table.getFooterGroups()}>
                  {footerGroup => (
                      <tr>
                          <For each={footerGroup.headers}>
                              {header => (
                                  <th class="p-2">
                                      {header.isPlaceholder
                                          ? null
                                          : flexRender(
                                              header.column.columnDef.footer,
                                              header.getContext()
                                          )}
                                  </th>
                              )}
                          </For>
                      </tr>
                  )}
              </For>
              </tfoot>
          </table>

      </section>
  );
}
