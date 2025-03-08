'use client';
import dynamic from 'next/dynamic';

// Dynamically import the Chart component to avoid SSR issues
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const LineChart = (props) => {
  const { chartData, chartOptions } = props;

  return (

    <Chart
      options={chartOptions}
      type="line" // Specify that this is a line chart
      width="100%" // Set width
      height="100%" // Set height
      series={chartData} // Pass the series data to the chart
    />
  );
};

export default LineChart;
