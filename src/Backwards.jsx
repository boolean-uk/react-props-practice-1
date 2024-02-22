import PropTypes from 'prop-types'

function Backwards(props){
    const { name } = props

    return(
        <p className="name-length">
        Did you know that {name} is {name.length} characters long?!
      </p>
    )
}

Backwards.propTypes = {
    name: PropTypes.string,
  }

export default Backwards