import { Bar } from "react-chartjs-2";

export default function MacroChart() {
  const data = {
    labels: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
    datasets: [
      {
        label: 'Proteines',
        data: [80, 70, 90, 75, 85, 80, 95],
        backgroundColor: '#9E2384',
        barPercentage: 0.9,
      },
      {
        label: 'Glucides',
        data: [150, 130, 160, 140, 155, 150, 170],
        backgroundColor: '#2B0D84',
        barPercentage: 0.9,
      },
      {
        label: 'Lipides',
        data: [50, 45, 55, 48, 52, 50, 58],
        backgroundColor: '#D7964E',
        barPercentage: 0.9,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: false,
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Quantité (g)',
        },
      },
    },
  };

  return (
    <div className="grow bg-dark px-5 py-2 shadow rounded-2xl">
      <h3 className="text-center text-2xl font-bold mb-3">Daily Consumption</h3>
      <Bar data={data} options={options} />
    </div>
  );
};
