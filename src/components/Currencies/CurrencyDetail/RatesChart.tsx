import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getChartData } from '../../../utils/currency';
import { ChartRate } from '../../../types/ChartRate';


type Props = {
	rates: number[]
}
const RatesChart: React.FC<Props> = ({rates}: Props) => {
	const data: ChartRate[] = getChartData(rates);
  return (
		<ResponsiveContainer width="100%" height="75%">
			<LineChart
				width={500}
				height={250}
				data={data}
				margin={{
					top: 55,
					right: 20,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={false} />
				<XAxis dataKey="name" stroke='#cfb1c5' />
				<YAxis stroke='#cfb1c5' domain={['dataMin', 'dataMax']} />
				<Tooltip />
				<Line type="monotone" dataKey="value" stroke="#1e238f" activeDot={{ r: 8 }} />
			</LineChart>
		</ResponsiveContainer>
	);
}

export default RatesChart;