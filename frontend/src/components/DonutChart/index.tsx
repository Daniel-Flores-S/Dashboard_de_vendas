import Chart from "react-apexcharts";
import axios from 'axios';
import { BASE_URL } from "utils/Requests";
import { SaleSum } from "types/Sale";
import { useEffect, useState } from "react";

type ChartData = {
    labels: string[],
    series: number[]
}

const DonutChart = () => {

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() => {
        axios.get(BASE_URL + "/sales/sum-by-saller")
            .then(response => {
                const data = response.data as SaleSum[];
                const myLabels = data.map(x => x.sellerName);
                const mySeries = data.map(x => x.sum);

                setChartData({ labels: myLabels, series: mySeries });
            });
    }, []);

    const options = {
        legend: {
            show: true
        }
    };

    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;
