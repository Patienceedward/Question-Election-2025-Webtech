// Get the 2D rendering context of the canvas element with ID 'electionChartPercentage'
const ctx = document.getElementById('electionChartPercentage').getContext('2d');

// Create a new Chart instance using Chart.js
const electionChartPercentage = new Chart(ctx, {
  type: 'pie', // Define chart type as pie
  data: {
    // Labels for each slice of the pie chart
    labels: ['DAD (45%)', 'PPP (5%)', 'CCCC (27%)', 'MCD (23%)'],
    datasets: [{
      // Data values corresponding to each label
      data: [45, 5, 27, 23],
      // Colors for each pie slice
      backgroundColor: ['#FF1744', '#5CAF50', '#00E5FF', '#FFFF00'],
      // Border color for pie slices
      borderColor: '#fff',
      borderWidth: 2 // Width of border between slices
    }]
  },
  options: {
    responsive: true, // Make the chart responsive to screen size
    plugins: {
      // Configure the legend
      legend: {
        position: 'bottom', // Position legend below the chart
        labels: {
          color: '#333', // Legend text color
          font: {
            size: 14 // Legend text size
          }
        }
      },
      // Add and configure the chart title
      title: {
        display: true, // Display the title
        text: 'Votes Share by Party', // Title text
        font: {
          size: 18 // Title font size
        }
      }
    }
  }
});
