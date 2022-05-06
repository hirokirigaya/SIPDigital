import React from 'react'
import './styles.css'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  pointDotRadius: 1,
  pointDotStrokeWidth: 8,
  pointDot: false,
  pointHitDetectionRadius: 20,
  datasetFill: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      align: 'end'
    },
    title: {
      display: false,
      text: 'Relatório de vendas',
    },
  },
  hover : {
    mode: 'index',
    intersec: true
  },
  scales: {
    y: {
      min: 0,
      max: 300,
      ticks: {
        stepSize: 50
      }
    }
  }
};

const labels = ['2020-08', '2020-09', '2020-10', '2020-11', '2020-12', '2021-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06', '2020-07'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Vendas de 2020',
      data: [50, 120, 100 ,160 ,110, 115, 155, 140, 170, 100, 110, 190],
      borderColor: '#FF00C7',
      backgroundColor: '#FF00C7',
      tension: 0.4,
    },
    {
      label: 'Vendas de 2021',
      data: [140, 130, 150 ,210 ,130, 150, 180, 170, 140, 210, 190, 250],
      borderColor: '#5AB1F3',
      backgroundImage: '#5AB1F3',
      tension: 0.4,
    },
  ],
};


function index() {
  return (
    <section className='containerGrafico'>
      <div className='grafico'>
        <h2>Relatório de Vendas</h2>
        <Line options={options} data={data} height='80px'/>
      </div>
    </section>
  )
}

export default index