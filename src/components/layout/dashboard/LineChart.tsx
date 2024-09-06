"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A line chart with dots"

// CRM data: Leads vs Conversions by month
const chartData = [
  { month: "January", leads: 150, conversions: 45 },
  { month: "February", leads: 180, conversions: 55 },
  { month: "March", leads: 200, conversions: 70 },
  { month: "April", leads: 170, conversions: 60 },
  { month: "May", leads: 220, conversions: 80 },
  { month: "June", leads: 250, conversions: 90 },
]

const chartConfig = {
  leads: {
    label: "Leads",
    color: "hsl(var(--chart-1))",
  },
  conversions: {
    label: "Conversions",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>CRM Line Chart - Leads vs Conversions</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
  dataKey="desktop"
  type="natural"
  stroke="var(--color-desktop)"  // Correct stroke color
  strokeWidth={2}
  dot={{ fill: "var(--color-desktop)" }}  // Dot fill color matches line stroke
  activeDot={{ r: 6 }}
/>
<Line
  dataKey="mobile"
  type="natural"
  stroke="var(--color-mobile)"  // Ensure mobile line is also rendered
  strokeWidth={2}
  dot={{ fill: "var(--color-mobile)" }}
  activeDot={{ r: 6 }}
/>

          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 10% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing leads and conversions for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
