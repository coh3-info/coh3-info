import { ChartOptions } from 'chart.js';
import LineChartOfTwo from './LineChartOfTwo';

interface Data {
  label: string;
  data: number[];
}

interface PenetrationChanceChartOfTwoWeaponsProps {
  data1: Data;
  data2: Data;
}

const PenetrationChanceChartOfTwoWeapons = ({ data1, data2 }: PenetrationChanceChartOfTwoWeaponsProps) => {
  const labels = (data1.data.length > data2.data.length ? data1.data : data2.data).map((_, i) => i);
  const option: ChartOptions<'line'> = {
    animation: false,
    scales: {
      x: {
        type: 'linear',
        min: 0,
        grid: {
          lineWidth: 0.5,
        },
        title: { display: true, text: '거리' },
      },

      y: {
        type: 'linear',
        suggestedMax: 100,
        min: 0,
        title: { display: true, text: '관통확률(%)' },
      },
    },
  };
  return <LineChartOfTwo labels={labels} data1={data1} data2={data2} option={option} />;
};

export default PenetrationChanceChartOfTwoWeapons;
