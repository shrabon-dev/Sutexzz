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
        type: 'line',
        data: {
            labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`), 
          datasets: [
            {
              label: 'Subscription Summary',
              data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100)), 
              backgroundColor: '#36A2EB',
              borderColor: 'white',
            },
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
  