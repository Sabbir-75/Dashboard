import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const data = [
  { name: 'Mon', uv: 80 },
  { name: 'Tue', uv: 60 },
  { name: 'Wed', uv: 40 },
  { name: 'Thu', uv: 25 },
  { name: 'Fri', uv: 90 },
  { name: 'Sat', uv: 70 },
  { name: 'Sun', uv: 95 },
];

const SimpleAreaChart = () => {
  return (
    <AreaChart
      style={{ width: '100%', maxWidth: '1120px', maxHeight: '300px', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 20,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis domain={[0, 100]} />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#3b83f6cc" fill="#3b83f6cc" />
    </AreaChart>
  );
};

export default SimpleAreaChart;