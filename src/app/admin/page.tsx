"use client";

import React, { useState } from "react";
import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const invoicesData = [
  { invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  
];

const clientsData = [
  { client: "Client A", contact: "contact@clienta.com", status: "Active" },
  { client: "Client A", contact: "contact@clienta.com", status: "Active" },
  { client: "Client A", contact: "contact@clienta.com", status: "Active" },
  { client: "Client A", contact: "contact@clienta.com", status: "Active" },
  { client: "Client A", contact: "contact@clienta.com", status: "Active" },
  { client: "Client A", contact: "contact@clienta.com", status: "Active" },
  { client: "Client A", contact: "contact@clienta.com", status: "Active" },
  // Add more rows as needed
];

const productsData = [
  { product: "Product 1", category: "Category A", price: "$30.00" },
  { product: "Product 1", category: "Category A", price: "$30.00" },
  { product: "Product 1", category: "Category A", price: "$30.00" },
  { product: "Product 1", category: "Category A", price: "$30.00" },
  { product: "Product 1", category: "Category A", price: "$30.00" },
  { product: "Product 1", category: "Category A", price: "$30.00" },
  
];

const AdminPage: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState<string>("invoices");

  const renderTable = () => {
    switch (selectedTable) {
      case "invoices":
        return (
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoicesData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.invoice}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.method}</TableCell>
                  <TableCell className="text-right">{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        );
      case "clients":
        return (
          <Table>
            <TableCaption>A list of your clients.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Client</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientsData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.client}</TableCell>
                  <TableCell>{row.contact}</TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        );
      case "products":
        return (
          <Table>
            <TableCaption>A list of your products.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="text-right">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productsData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.product}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell className="text-right">{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-64 bg-gray-800 text-white p-4 flex-shrink-0">
        <h2 className="text-xl mb-4">CRM Admin</h2>
        <nav>
          <ul>
            <li>
              <button
                onClick={() => setSelectedTable("invoices")}
                className="block p-2 mb-2 rounded hover:bg-gray-700"
              >
                Invoices
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedTable("clients")}
                className="block p-2 mb-2 rounded hover:bg-gray-700"
              >
                Clients
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedTable("products")}
                className="block p-2 rounded hover:bg-gray-700"
              >
                Products
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col p-6 overflow-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          
        </header>
        <main className="flex-1">{renderTable()}</main>
      </div>
    </div>
  );
};

export default AdminPage;
