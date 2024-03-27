import Chart from 'chart.js/auto';
import palette from 'google-palette';

(async function () {
    const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
    ];

    new Chart(
        document.getElementById('histogama'),
        {
            type: 'bar',
            data: {
                labels: data.map(row => row.year),
                datasets: [
                    {
                        label: 'Ventas por año',
                        data: data.map(row => row.count),
                        backgroundColor: palette('tol-dv', data.length).map(function (hex) {
                            return '#' + hex;
                        })
                    }
                ]
            }
        }
    );
})();
