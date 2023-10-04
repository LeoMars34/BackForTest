export function Input({ name, value, type, id, defaultValue, step, onInput }) {
    return (
        <div className="inputBox inputBox__standart">
            <input
                onInput={(e) => {
                    onInput(e, e.target.value);
                }}
                step={step}
                required
                id={id}
                value={defaultValue}
                defaultValue={value}
                type={type ? type : undefined}
            />
            <span>{name}</span>
        </div>
    );
}
