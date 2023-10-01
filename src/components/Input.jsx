export function Input({ name, value, type, id, defaultValue, step }) {
    return (
        <div className="inputBox inputBox__standart">
            <input
                step={step}
                required
                id={id}
                value={defaultValue}
                defaultValue={value}
                type={type ? type : undefined}
                // onInput={(e) => {
                //     validate(e);
                // }}
                // onBlur={onBlur}
                // id={setId}
                // type={type ? type : "text"}
                // required
                // step={step ? step : ""}
                // onKeyDown={onKeyDown}
            />
            <span>{name}</span>
        </div>
    );
}
