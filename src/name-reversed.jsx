import { reverse } from './helpers'


//function nameReverse({ name }) {
//    return(
//    <p className="name-reversed">
//        Also, {name} backwards is {reverse(name)}
//    </p>
//    )
//}


// or other method


function nameReverse({ props }) {
    return(
    <p className="name-reversed">
        Also, {props.name} backwards is {reverse(props.name)}
    </p>
    )
}

export default nameReverse