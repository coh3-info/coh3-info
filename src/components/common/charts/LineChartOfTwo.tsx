import { Line } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';

interface Data {
  label: string;
  data: number[];
}

interface LineChartOfTwoProps {
  labels: number[];
  data1: Data;
  data2: Data;
  option?: ChartOptions<'line'>;
}

const LineChartOfTwo = ({ labels, data1, data2, option }: LineChartOfTwoProps) => {
  const defaultOptionOfData = { borderWidth: 2, pointRadius: 0, pointHoverRadius: 5, pointHitRadius: 10 };

  return (
    <Line
      data={{
        labels: labels,
        datasets: [
          {
            ...defaultOptionOfData,
            label: data1.label,
            data: data1.data,
            borderColor: '#5f68c8',
          },
          {
            ...defaultOptionOfData,
            label: data2.label,
            data: data2.data,
            borderColor: '#ff5e5e',
          },
        ],
      }}
      options={option}
    />
  );
};

export default LineChartOfTwo;
