import ProtoType from 'prop-types'

const NameLength = (props) => {
    NameLength.ProtoType = {
        name: ProtoType.string
    }

    const {name} = props ?? {}

    return (
        <p className="name-length">
        Did you know that {name} is {name.length} characters long?!
      </p>
    )
}

export default NameLength;