export function Input({ name, value, type, id }) {
    return (
        <div className="inputBox inputBox__standart">
            <input
                id={id}
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
