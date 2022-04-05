import { LineChart, Line, CartesianGrid, XAxis, ResponsiveContainer } from "recharts";

export const SmallChart = ({ data, className }) => {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={41}>
        <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="rgb(55, 56, 58)" horizontal={false} />
          <Line
            type="linear"
            dataKey="price"
            stroke="rgb(95, 254, 148)"
            dot={false}
            strokeWidth={1.5}
            zIndex={20}
          />
          <XAxis dataKey={{}} tickSize={0} height={1} stroke="rgb(55, 56, 58)" zIndex={10} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
