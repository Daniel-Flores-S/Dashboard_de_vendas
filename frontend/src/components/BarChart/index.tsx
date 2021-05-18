import Chart from 'react-apexcharts'
const BarChart = () => {
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        }
    };

    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-el', 'Logan', 'Trunks']
        },
        series: [
            {
                name: "% Sucesso",
                data: [40.6, 47.8, 62.7, 4.6, 71.1]
            }
        ]
    }

    return(
        <Chart
            options={{ ...options, xaxis: mockData.labels}}
            series={mockData.series}
            type="bar"
            height="240"
        />
);
}

export default BarChart;
