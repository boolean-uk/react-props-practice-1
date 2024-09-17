import { reverse } from './helpers'

function Backwards(prop){
    
    return       <p className="name-reversed">
    Also, {prop.name} backwards is {reverse(prop.name)}
  </p>
}

export default Backwards