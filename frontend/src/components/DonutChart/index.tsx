import Chart  from "react-apexcharts";

const DonutChart = () => {
    const options = {
        legend: {
            show: true
        }
    };

    const mockData = {
        labels:  ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Trunks'],
        series: [5006, 4588, 6000, 5000, 4999]
    }

    return(
        <Chart
        options={{ ...options, labels: mockData.labels}}
        series={mockData.series}
        type="donut"
        height="240"
    />
);
}

export default DonutChart;
