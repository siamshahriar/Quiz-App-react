import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import './statistics.css';

const Statistics = () => {
  const barData = useLoaderData();
  return (
    <div className="stat-chart">
        {/* <ResponsiveContainer width="100%" height="100%"> */}
      <BarChart
        width={500}
        height={500}
        data={barData.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#8884d8" />
      </BarChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default Statistics;
