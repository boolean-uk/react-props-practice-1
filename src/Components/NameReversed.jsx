import PropTypes from 'prop-types';
import { reverse } from '../helpers'

const NameReversed = ({name}) => {

    return (
        <p className="name-reversed">
        Also, {name} backwards is {reverse(name)}
        </p>
    )
}

NameReversed.propTypes = {
    name: PropTypes.string
}

export default NameReversed