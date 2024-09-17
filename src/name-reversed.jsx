import { reverse } from './helpers.js'


//function nameReverse({ name }) {
//    return(
//    <p className="name-reversed">
//        Also, {name} backwards is {reverse(name)}
//    </p>
//    )
//}


// or other method


function NameReverse({ name }) {
    return (
      <p className="name-reversed">
        Also, {name} backwards is {reverse(name)}
      </p>
    );
  }
  
  export default NameReverse;