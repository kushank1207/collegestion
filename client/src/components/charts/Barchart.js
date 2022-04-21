import { Chart } from "react-google-charts";
import { useEffect,useState } from "react";
import axios from "axios";



export const options = {
  title: "Products From Different Countries",
	@@ -22,13 +17,51 @@ export const options = {
};

export function BarChart() {
  const [state,setState]=useState([]);
  const [orders,setOrders]=useState([]);




  const optionsBar = {
    title: "Net Profit In  Year 2021",
    legend: { position: "none" },
  };





  useEffect(()=>{
    async function ApiCall(){
      const promise1=axios.get("http://localhost:9091/products/chart");
      const promise2=axios.get("http://localhost:9091/order/chart");

      const data=await Promise.all([promise1,promise2]);
      setOrders(data[1].data);
      setState(data[0].data);
    }
    ApiCall();

  },[])
  return (
    <div>
 <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={state}
      options={options}
    />

<Chart
      chartType="Histogram"
      width="100%"
      height="400px"
      data={orders}
      options={optionsBar}
    />
    </div>

  );
}
