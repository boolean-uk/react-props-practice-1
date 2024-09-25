import PropTypes from "prop-types"

function NameLength({name})
{
    return (
        <p className="name-length">
        Did you know that {name} is {name.length} characters long?!
      </p>
    )
}

NameLength.PropTypes = {
    name:PropTypes.string
}
export default NameLength