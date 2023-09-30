export function Button({ name, onClick, style }) {
    return (
        <button className={style} onClick={onClick}>
            <span>{name}</span> <i></i>
        </button>
    );
}
