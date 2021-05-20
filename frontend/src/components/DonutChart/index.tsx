import Chart  from "react-apexcharts";
import axios from 'axios';
import { BASE_URL } from "utils/Requests";
import { SaleSum } from "types/Sale";
type ChartData = {
    labels: string[] ,
    series:number[]
}

const DonutChart = () => {
    let chartData : ChartData = {labels: [], series: []};

    axios.get(BASE_URL+'/sales/sum-by-saller').then(response => {
       const data = response.data as SaleSum[];
       const myLabels = data.map(x => x.sellerName);
       const mySeries = data.map(x => x.sum);

       chartData = {labels: myLabels, series: mySeries}
    });
    const options = {
        legend: {
            show: true
        }
    };


    /*
    const mockData = {
        labels:  ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Trunks'],
        series: [5006, 4588, 6000, 5000, 4999]
    }*/

    return(
        <Chart
        options={{ ...options, labels: chartData.labels}}
        series={chartData.series}
        type="donut"
        height="240"
    />
);
}

export default DonutChart;
