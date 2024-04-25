import { reverse } from "../src/helpers"

export default function NameReversed({banana, kebab}) {
    return (
        <p className="name-reversed">
            Also, {banana} backwards is {reverse(banana)} <br/> ...Also {kebab}
        </p>
    )
}