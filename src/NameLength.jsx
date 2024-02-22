import PropTypes from 'prop-types'
import { reverse } from './helpers'

function NameLength(props){
    const { name } = props

    return(
        <p className="name-reversed">
        Also, {name} backwards is {reverse(name)}
      </p>
    )
}

NameLength.propTypes = {
    name: PropTypes.string,
  }

export default NameLength