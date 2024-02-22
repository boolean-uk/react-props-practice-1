import PropTypes from 'prop-types'

export default function LenghtName({name})
{
    return (
        <>
        <p className="name-length">
        Did you know that {name} is {name.length} characters long?!
      </p>
        </>
    )
}

LenghtName.propTypes = 
{
    name: PropTypes.string
}