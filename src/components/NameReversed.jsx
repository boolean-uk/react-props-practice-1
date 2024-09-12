import React from "react";
import { reverse } from "../helpers";

export default function NameReversed({ name }) {
  return (
    <p className="name-reversed">
      Also, {name} backwards is {reverse(name)}
    </p>
  );
}
