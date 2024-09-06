import React from 'react';
import DashboardContent from '@/components/layout/dashboard/DashboardContent';

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <DashboardContent />
    </div>
  );
}