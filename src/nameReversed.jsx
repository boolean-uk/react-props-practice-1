import { reverse } from './helpers'
function Namereversed({username}) {
    return(
        <p className="name-reversed">
        Also, {username} backwards is {reverse(username)}
      </p>

    )
}
export default Namereversed;