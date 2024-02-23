import { reverse } from "../helpers";

/* eslint-disable react/prop-types */
const NameReversed = ({ name }) => {
    return (
        <p className="name-reversed">
            Also, {name} backwards is {reverse(name)}
        </p>
    );
};

export default NameReversed;
