// My javascript file for the pie chart. I tried to make it as simple as possible. making sure to use the right names and variables


const canvas = document.getElementById('electionChartPercentage');
// I made the canvascontext 2d to make the pie chart look 2D, I think it looks better this way.
const ctx = canvas.getContext('2d');

//I hardcodied the resluts and data for the pie chart//
//TODO: learn how to get this data from a database or even input and displsay
 const partynames = ['ABC (42%)', 'BA (10%)', 'ACTIONPA (27%)', 'PFF (21%)'];
const votePercentages = [42, 10, 27, 21];
const colors = ['#FF1744', '#5CAF50', '#00E5FF', '#FFFF00'];


const electionChart = new Chart(ctx, {
  type: 'pie', 

  data: {
    labels: partynames, //I trired to change current party name
    datasets: [{
      data: votePercentages,
      backgroundColor: colors,
      borderColor: '#fff',
      borderWidth: 8
    }]

    
  },
  options: {
    responsive: true, //This makes it look good on all devices. These are just add on, to give it a bit more personiality and honestyly see else i could do. just to challenge myself a bit more
    plugins: {
      legend: {
        position: 'bottom', 
        labels: {
          color: '#333', 
          font: {
            size: 12
          }
        }
      },

      
      title: { //This is the title of the pie chart. Made it bold and big so it stands out
        display: true, 
        text: 'Votes Share by Party', 
        font: {
          size: 10,
          weight: 'bold'
        },
        color: '#333'
      
      }
    }
  }
});
