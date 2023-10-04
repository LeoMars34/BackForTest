import { useEffect } from 'react';

export function Select({ options, name, id, first }) {
    useEffect(() => {
        let inputBox__select = document.querySelectorAll('.inputBox__select');
        inputBox__select.forEach((select) => {
            select.onclick = function () {
                select.classList.toggle('active');
            };
        });
    }, []);
    return (
        <div className="inputBox inputBox__select">
            <select id={id} required="required">
                <option>{first}</option>
                {options
                    ? options.map((i) => (
                          <option value={i.id} key={i.id}>
                              {i.name}
                          </option>
                      ))
                    : ''}
            </select>
            <span>{name}</span>
        </div>
    );
}
