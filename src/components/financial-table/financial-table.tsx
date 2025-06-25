"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { TableData, TableItem } from "./@types";
import { transformTableData } from "@/utils/transform-table-data";
import { FinancialCell } from "./financial-cell";

interface Props {
  data: TableData;
  onChange?: (data: TableData) => void;
}

export function FinancialTable({ data, onChange }: Props) {
  const formattedData = useMemo(() => transformTableData(data), [data]);

  const columns: ColumnDef<TableItem>[] = useMemo(
    () =>
      Object.keys(data).map((key, index) => ({
        accessorKey: key,
        header: key,
        columns: data[key].columns
          .filter((col) => index === 0 || col.key !== "product")
          .map((col) => ({
            accessorKey: `${key}-${col.key}`,
            header: col.name,
            cell: (props) => (
              <FinancialCell {...props} sessionKey={key} columnKey={col.key} />
            ),
          })),
      })),
    []
  );

  const updateValue = (
    section: string,
    product: string,
    column: string,
    value: any
  ) => {
    const updatedData = { ...data };
    updatedData[section] = {
      ...updatedData[section],
      items: updatedData[section].items.map((item) => {
        if (item.product === product) {
          return { ...item, [column]: value };
        }

        return item;
      }),
    };

    onChange?.(updatedData);
  };

  const table = useReactTable({
    data: formattedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: { updateValue },
  });

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup, headerGroupIndex) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      colSpan={header.column.columns.length}
                      className={cn(
                        "h-12 font-bold",
                        headerGroupIndex === 0 &&
                          "border-b-2 border-gray-300 text-center"
                      )}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => {
              const isTotal = Object.keys(row.original).some(
                (key) => row.original[key] === "Total"
              );

              return (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={cn(
                    "h-12",
                    isTotal
                      ? "bg-yellow-100 font-semibold border-t-2 border-gray-300 hover:bg-yellow-100"
                      : ""
                  )}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
