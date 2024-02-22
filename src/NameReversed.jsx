import { reverse } from "./helpers";
import PropTypes from "prop-types";

export default function NameReversed({ name }) {
	return (
		<p className="name-reversed">
			Also, {name} backwards is {reverse(name)}
		</p>
	);
}

NameReversed.propTypes = {
	name: PropTypes.string,
};
