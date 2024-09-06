"use client";

import { TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radial chart with stacked sections for CRM data";

const chartData = [
  { month: "January", leadsClosed: 340, dealsInProgress: 160 },
];

const chartConfig = {
  leadsClosed: {
    label: "Leads Closed",
    color: "hsl(var(--chart-1))",
  },
  dealsInProgress: {
    label: "Deals In Progress",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function CRmRadialChart() {
  const totalActivities =
    chartData[0].leadsClosed + chartData[0].dealsInProgress;

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0 ">
        <CardTitle>CRM Activities - Radial Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0 ">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[250px]"
        >
          <RadialBarChart
          className="scale-125"
            data={chartData}
            endAngle={180}
            innerRadius={80}
            outerRadius={130}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalActivities.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-muted-foreground"
                        >
                          CRM Activities
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="leadsClosed"
              stackId="a"
              cornerRadius={5}
              fill="var(--color-leadsClosed)"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="dealsInProgress"
              fill="var(--color-dealsInProgress)"
              stackId="a"
              cornerRadius={5}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total CRM activities for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
