import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const TwoAreaChartExample = ({ backgroundColor, color1 }) => {
  const { userType, userId, token, email } = useSelector((state) => state.auth);

  const defaultBackgroundColor = "linear-gradient(to right, #0C2443, #2A5687)";
  const colorOne = color1 ? color1 : "ffd9d8";
  const chartStyle = backgroundColor
    ? { background: backgroundColor }
    : { background: defaultBackgroundColor };
  const [data, setData] = useState([]);
  // const data = [
  //   { name: "Aug", value1: 7, value2: 1 },
  //   { name: "Sep", value1: 20, value2: 25 },
  //   { name: "Oct", value1: 5, value2: 8 },
  //   { name: "Nov", value1: 50, value2: 30 },
  //   { name: "Aug", value1: 7, value2: 1 },
  //   { name: "Sep", value1: 20, value2: 25 },
  // ];
  if (userType == "bloodbank") {
    useEffect(() => {
      // Function to fetch data from the API

      const fetchData = async () => {
        try {
          const response = await axios.get(
            process.env.NEXT_PUBLIC_SERVER_URL + `/bloodbank/map`
          );
          console.log(response.data);
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, [userId]);
  }
  return (
    <AreaChart
      width={489}
      height={300}
      data={data}
      margin={{ top: 30, right: 40, left: 0, bottom: 10 }}
      style={chartStyle}
      className="rounded-lg"
    >
      <CartesianGrid stroke="gray" horizontal={true} vertical={false} />
      <XAxis dataKey="name" stroke="gray" />
      <YAxis stroke="gray" axisLine={false} />
      <Tooltip />
      <Legend />
      <Area
        type="monotone"
        dataKey="value1"
        fill="#ffd9d8" // Set the fill color to white
        stroke="#ffd9d8"
        name="Donated"
      />
      <Area
        type="monotone"
        dataKey="value2"
        fill={colorOne} // Set the fill color to white
        stroke={colorOne}
        name="Requested"
      />
    </AreaChart>
  );
};

export default TwoAreaChartExample;
