import './test.scss'
import img from './assets/react.svg'

type Props = {
    age: number;
}

function Test({age}: Props) {
  const name = "Alex";
  

  return (
    <div className="Hello">  
    <img src={img} width='100'/>
        <h2>{name}</h2>
        <p>Возраст: {age}</p>
    </div>
    )
}

export default Test;
