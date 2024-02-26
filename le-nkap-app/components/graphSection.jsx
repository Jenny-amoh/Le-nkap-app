import { useState } from "react";
import { utilities } from "../src/assets/Utilities/utilities";
import { images } from "../src/assets/images/images";
// import ReactApexChart from 'react-apexcharts';
// import Apexcharts from 'apexcharts';

function GraphSection(){

    const[state, setState] = useState({
          
        series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
        }, {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
        }],
        options: {
          chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },}
        })

    return(
        <div style={{display: "flex", justifyContent: "space-between"}}>
            {/* <div className="incomeData" style={{width: "200px",backgroundColor: "#09a969",justifyContent: "space-evenly", padding: "20px 15px 10px 0px", borderRadius: "1rem"}}>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    <div><img src={utilities.Brate} alt="balance" style={{height:"60px"}} /></div>
                    <div>
                        <div style={{fontSize:"20px", fontWeight: "bold"}}>18,450</div>
                        <div>Balance</div>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div> */}
            <div>
                <h2>Graph</h2>
                <div id="chart">
                    {/* <Apexcharts/> */}
                    {/* <Apexcharts options={state.options} series={state.series} type="area" height={350} /> */}
              </div>
            </div>
        </div>
    )
}
export default GraphSection;