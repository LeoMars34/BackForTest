import { useEffect } from 'react';

export function Select({ options, name, firstValue }) {
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
            <select required="required">
                {options ? options.map((i) => <option>{i.name}</option>) : ''}
            </select>
            <span>{name}</span>
        </div>
    );
}
