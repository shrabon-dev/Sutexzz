<template>
    <div class="chart-container">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { Chart } from 'chart.js';
  
  const chartCanvas = ref(null);
  
  onMounted(() => {
    if (chartCanvas.value) {
      new Chart(chartCanvas.value, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // X-axis labels
          datasets: [
            {
              label: 'Sales',
              data: [500, 700, 900, 1200, 1500, 1800], // Data for Sales
              backgroundColor: '#36A2EB'
            },
            {
              label: 'Expenses',
              data: [400, 600, 800, 1100, 1300, 1600], // Data for Expenses
              backgroundColor: '#FF6384'
            },
            {
              label: 'Profit',
              data: [100, 100, 100, 100, 200, 200], // Data for Profit
              backgroundColor: '#FFCE56'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, // Allows custom height
          scales: {
            x: {
              ticks: {
                font: {
                  size: 14 // Adjust label size
                }
              }
            }
          }
        }
      });
    }
  });
  </script>
  
  <style scoped>
  .chart-container {
    width: 100%; /* Adjust width */
    height: 275px; /* Adjust height */
    position: relative;
  }
  </style>
  