
import { PropTypes } from 'prop-types';

export default function NameLength({ length }) {
    return (
        <p className="name-length">
            Your name has {length} letters
        </p>
    )
}

PropTypes.propTypes = {
    length: PropTypes.number.isRequired
}