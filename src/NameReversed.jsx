import { reverse } from './helpers'

export default function nameReversed(name, reversed) {
    return (
        <p className="name-reversed">
        Also, {name} backwards is {reverse(reversed.name)}
      </p>
    )
}