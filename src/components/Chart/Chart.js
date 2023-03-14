import './Chart.css';
import ChartBar from './ChartBar';


const Chart = (props) =>{

    const datapointValues = props.datapoints.map(datapoint => datapoint.value);
    const totalmax = Math.max(...datapointValues);

    return (
        <div className='chart'>
            {props.datapoints.map(datapoint => <ChartBar value={datapoint.value} key={datapoint.label} maxValue={totalmax} label={datapoint.label} />)}
        </div>
    )

}
export default Chart;