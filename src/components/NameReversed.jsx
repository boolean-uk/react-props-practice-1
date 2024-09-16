import ProtoType from 'prop-types'
import { reverse } from '../helpers'

const NameReversed = (props) => {
    NameReversed.ProtoType = {
        name: ProtoType.string
    }

    const {name} = props ?? {}

    return (
        <p className="name-reversed">
        Also, {name} backwards is {reverse(name)}
      </p>
    )
}

export default NameReversed;