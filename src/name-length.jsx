function NameLength(props) {
    return (
      <div>
        <p className="name-length">
          Did you know that {props.name} is {props.name.length} characters long?!
        </p>
      </div>
    );
}

export default NameLength;