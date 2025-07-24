import Feed from "@/components/Feed";
import { client } from "@/lib/sanity";

export default async function DashboardHome() {
    const query = `*[_type == "dailyInfo"]{ title, rate, caseName }`;
    const data = await client.fetch(query);

    const queryAreaChart = `*[_type == "areaChart"]{
  title,
  "chartData":dataPoints
}`;
    const chartData = await client.fetch(queryAreaChart);

    const queryBarChart = `*[_type == "barchart"]{
  title,
  "chartData":BarChart,
  statsData
}`;

    const BarChartData = await client.fetch(queryBarChart);

    return (
        <div className="">
            <Feed
                fallbackData={data}
                chartData={chartData}
                BarChartData={BarChartData}
            />
        </div>
    );
}
