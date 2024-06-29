import CompC from "./CompC";
import './Style.css';

// const CompB = ({data}) => {
const CompB = () => {
  return (
    <div  className='compb'>
        <h2>comp b</h2>
      {/* <CompC data={data}/> */}
      <CompC />
    </div>
  )
}

export default CompB
