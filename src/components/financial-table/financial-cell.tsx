import { CellContext } from "@tanstack/react-table";
import { TableItem } from "./@types";
import { useEffect, useState } from "react";

interface Props extends CellContext<TableItem, any> {
  sessionKey: string;
  columnKey: string;
}

export function FinancialCell({ row, table, sessionKey, columnKey }: Props) {
  const initialValue = row.getValue(`${sessionKey}-${columnKey}`);
  const [value, setValue] = useState(initialValue ?? "");

  function onBlur() {
    const meta = table.options.meta as any;
    const foundKey = Object.keys(row.original).find((key) =>
      key?.includes("product")
    );

    if (!foundKey) return;

    meta?.updateValue(sessionKey, row.original[foundKey], columnKey, value);
  }

  useEffect(() => {
    setValue(initialValue ?? "");
  }, []);

  return (
    <div className="w-fit h-8 relative">
      <input
        type="text"
        value={value as string}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        className="absolute max-w-full"
      />
      <p className="h-0 opacity-0 pointer-events-none">{value as string}</p>
    </div>
  );
}
