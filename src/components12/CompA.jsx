import CompB from "./CompB";
import './Style.css';

const CompA = () => {
// const CompA = ({data}) => {
  return (
    <div  className='compa'>
        <h2>compA</h2>
        <CompB />
        {/* <CompB data={data}/> */}
        {/* <CompB result={data}/> */}
        {/* result ye ek key hai */}
      
    </div>
  )
}

export default CompA
