//import { reverse } from './helpers'

function NameLength({name}){
    return(
        <p className="name-length">
        Did you know that {name} is {name.length} characters long?!
        {/** Did you know that {name} is {name.length} characters long?! */}
      </p>
    )
}

export default NameLength


