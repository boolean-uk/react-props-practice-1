export default function NameLength(prop) {
    return (
        <p className="name-length">
            Did you know that {prop.name} is {prop.name.length} characters long?!
        </p>
    )
}