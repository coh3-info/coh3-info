import { Line } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import styled, { useTheme } from 'styled-components';

interface Data {
  label: string;
  data: number[];
}

interface LineChartOfTwoProps {
  labels: number[];
  data1: Data;
  data2: Data;
  axesOptions?: {
    x?: {
      min?: number;
      max?: number;
      suggestedMin?: number;
      suggestedMax?: number;
      title?: string;
    };
    y?: {
      min?: number;
      max?: number;
      suggestedMin?: number;
      suggestedMax?: number;
      title?: string;
    };
  };
}

const LineChartOfTwo = ({ labels, data1, data2, axesOptions }: LineChartOfTwoProps) => {
  const theme = useTheme();

  const defaultOptionOfData = { borderWidth: 2, pointRadius: 0, pointHoverRadius: 5, pointHitRadius: 10 };
  const options: ChartOptions<'line'> = {
    animation: false,
    scales: {
      x: {
        type: 'linear',
        min: axesOptions?.x?.min ?? 0,
        max: axesOptions?.x?.max,
        suggestedMin: axesOptions?.x?.suggestedMin,
        suggestedMax: axesOptions?.x?.suggestedMax,
        title: { display: true, text: axesOptions?.x?.title },
        grid: {
          lineWidth: 0.5,
        },
      },

      y: {
        type: 'linear',
        min: axesOptions?.y?.min ?? 0,
        max: axesOptions?.y?.max,
        suggestedMin: axesOptions?.y?.suggestedMin,
        suggestedMax: axesOptions?.y?.suggestedMax,
        title: { display: true, text: axesOptions?.y?.title },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <LineChartOfTwoWrapper>
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              ...defaultOptionOfData,
              label: data1.label,
              data: data1.data,
              borderColor: theme.colors.main.blue,
            },
            {
              ...defaultOptionOfData,
              label: data2.label,
              data: data2.data,
              borderColor: theme.colors.main.red,
            },
          ],
        }}
        options={options}
      />
    </LineChartOfTwoWrapper>
  );
};

export default LineChartOfTwo;

const LineChartOfTwoWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16/ 9;
`;
