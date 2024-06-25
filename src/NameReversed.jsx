// src/NameReversed.jsx
import { reverse } from './helpers';

function NameReversed(props) {
  return <p>Also, {props.name} backwards is {reverse(props.name)}</p>;
}

export default NameReversed;
