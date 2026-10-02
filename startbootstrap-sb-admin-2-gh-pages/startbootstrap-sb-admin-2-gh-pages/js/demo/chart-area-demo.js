// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Sebaran Grade Penilaian Mahasiswa (bar chart)
var ctx = document.getElementById("myAreaChart");
var myAreaChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Grade A", "Grade B+", "Grade B", "Grade C", "Grade D", "Grade E"],
        datasets: [{
            label: "Jumlah Mahasiswa",
            backgroundColor: "#4e73df",
            hoverBackgroundColor: "#2e59d9",
            borderColor: "#4e73df",
            data: [42, 35, 28, 12, 7, 4],
        }],
    },
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: { left: 10, right: 25, top: 25, bottom: 0 }
        },
        scales: {
            xAxes: [{
                gridLines: { display: false, drawBorder: false },
                maxBarThickness: 25,
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    maxTicksLimit: 5,
                    padding: 10,
                    precision: 0
                },
                gridLines: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                }
            }],
        },
        legend: { display: false },
        tooltips: {
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            callbacks: {
                label: function (tooltipItem, chart) {
                    var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                    return datasetLabel + ': ' + tooltipItem.yLabel;
                }
            }
        },
    }
});