# 🏦 Keye Financial Table Project

## 🔍 What is

This project is part of the Keye coding interview process. It's a Next.js application that demonstrates financial data visualization through an interactive table component. The application showcases:

- 🛠️ TypeScript integration
- 🔄 Data transformation utilities
- 📊 Custom financial table components
- 🧹 Clean, maintainable code structure

You can access the explanation on YouTube [here](https://www.youtube.com/watch?v=X2H8K6O2J7g).

## ⚙️ How it works

The application consists of several key components:

1. **💼 Financial Table**: The main component (`financial-table.tsx`) that renders and manages the financial data display
2. **🔄 Data Transformation**: Utilities (`transform-table-data.ts`) that process raw financial data into a format suitable for display
3. **📝 Type Definitions**: Strongly typed interfaces (`@types.tsx`) for financial data and table properties
4. **🎨 UI Components**: Reusable table components (`table.tsx`) that provide the foundation for the financial table

The application follows modern React/Next.js best practices with proper separation of concerns between data, presentation, and business logic.

## 🚀 How to run

To set up and run the project locally:

1. **📋 Prerequisites**:

   - Node.js (v18 or later recommended)
   - pnpm (installed globally)

2. **📦 Install dependencies**:

```bash
pnpm install
```

3. **⚡ Run development server**:

```bash
pnpm dev
```

4. **🌐 Open in browser**:
   The application will be available at:

```
http://localhost:3000
```

For production builds:

```bash
pnpm build
pnpm start
```

### 🧪 Testing

The project includes ESLint for code quality checks:

```bash
pnpm lint
```
