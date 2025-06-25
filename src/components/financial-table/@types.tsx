export interface Column {
  name: string;
  key: string;
}

export interface TableItem {
  [key: string]: string | number | unknown;
}

export interface TableSection {
  columns: Column[];
  items: TableItem[];
}

export interface SectionConfig {
  name: string;
  type: "editable" | "percentage" | "growth" | "readonly";
  baseSection?: string;
}

export interface TableData {
  [sectionName: string]: TableSection;
}
