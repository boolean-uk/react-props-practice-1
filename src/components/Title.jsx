import ProtoType from 'prop-types'

const Title = (props) => {
    Title.ProtoType = {
        name: ProtoType.string
    }

    const {name} = props ?? {}
    
    return (
        <h1 className="title">Welcome, {name}!</h1>
    )
}

export default Title;