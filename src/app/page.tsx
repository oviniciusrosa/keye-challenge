"use client";

import { TableData } from "@/components/financial-table/@types";
import { FinancialTable } from "@/components/financial-table/financial-table";
import { TABLE_DATA } from "@/data/data";
import { useState } from "react";

export default function Home() {
  const [tableData, setTableData] = useState<TableData>(TABLE_DATA);

  function onChange(tableData: TableData) {
    setTableData(tableData);

    console.log("✅ Table data updated successfully!", tableData);
  }

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FinancialTable data={tableData} onChange={onChange} />
    </div>
  );
}
