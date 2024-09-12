import { reverse } from './helpers'

export default function NameReversed(props){
    return (
        <p className="name-reversed">
        Also, {props.name} backwards is {reverse(props.name)}
      </p>
    )
}