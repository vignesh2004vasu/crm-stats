"use client";

import { Bar, BarChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A stacked bar chart with a legend for CRM data";

const chartData = [
  { date: "2024-07-15", leadsGenerated: 150, dealsClosed: 75 },
  { date: "2024-07-16", leadsGenerated: 120, dealsClosed: 90 },
  { date: "2024-07-17", leadsGenerated: 180, dealsClosed: 60 },
  { date: "2024-07-18", leadsGenerated: 130, dealsClosed: 100 },
  { date: "2024-07-19", leadsGenerated: 200, dealsClosed: 80 },
  { date: "2024-07-20", leadsGenerated: 170, dealsClosed: 110 },
];

const chartConfig = {
  leadsGenerated: {
    label: "Leads Generated",
    color: "hsl(var(--chart-1))",
  },
  dealsClosed: {
    label: "Deals Closed",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function CRMToolTip() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>CRM Performance</CardTitle>
        <CardDescription>
          Performance of leads generated and deals closed.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  weekday: "short",
                });
              }}
            />
            <Bar
              dataKey="leadsGenerated"
              stackId="a"
              fill="var(--color-leadsGenerated)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="dealsClosed"
              stackId="a"
              fill="var(--color-dealsClosed)"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    });
                  }}
                />
              }
              cursor={false}
              defaultIndex={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
