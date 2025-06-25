import { TableData, TableItem } from "@/components/financial-table/@types";

export function transformTableData(tableData: TableData): TableItem[] {
  const firstSection = Object.values(tableData)[0];
  const itemsCount = firstSection.items.length;

  const transformedItems: TableItem[] = [];

  for (let itemIndex = 0; itemIndex < itemsCount; itemIndex++) {
    const transformedItem: TableItem = {};

    Object.entries(tableData).forEach(([sectionName, sectionData]) => {
      const currentItem = sectionData.items[itemIndex];

      Object.entries(currentItem).forEach(([key, value]) => {
        transformedItem[`${sectionName}-${key}`] = value;
      });
    });

    transformedItems.push(transformedItem);
  }

  return transformedItems;
}
