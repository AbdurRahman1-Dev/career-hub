import React from 'react';
import Banner from './Banner';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';



const Statistics = () => {

  const student = [
    {aNumber: 'A1', mark: 60},
    {aNumber: 'A2', mark: 59},
    {aNumber: 'A4', mark:60},
    {aNumber: 'A5', mark:52},
    {aNumber: 'A3', mark:58},
    {aNumber: 'A6', mark:53},
    {aNumber: 'A7', mark:60},
    {aNumber: 'A8', mark:60}
  ]

  return (
    <div>
      <Banner details={"Statistics"}/>
      <div className='my-container text-center'>
        <h1 className='text-3xl font-bold text-indigo-500 my-8'>My Previous Assignment Marks</h1>
        <ComposedChart
          width={500}
          height={400}
          data={student}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        className='mx-auto'>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="aNumber" scale="band" />
          <YAxis label={{ value: 'mark', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="mark" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="mark" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="aNumber" stroke="#ff7300" />
        </ComposedChart>

      </div>
    </div>
  );
};

export default Statistics;