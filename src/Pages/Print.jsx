import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Print({ workOrder }) {
    const navigate = useNavigate();

    useEffect(() => {
        window.print();
        navigate(-1);
    }, []);
    return (
        <div className="main" style={{ flexDirection: 'column' }}>
            <h2>Название продукции</h2>
            {workOrder.product.name}
            <h2>Серийный номер</h2>
            {workOrder.number}
            <h2>Дата производства</h2>
            {workOrder.start_date}
        </div>
    );
}
