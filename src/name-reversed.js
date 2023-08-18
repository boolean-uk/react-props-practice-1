import { reverse } from "./helpers"

function Namereversed(props) {
    return <p>Also, {props.name} backwards is {reverse(props.name)}</p>
}

export default Namereversed