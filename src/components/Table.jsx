import { Button } from './Button';

export function Table({ workOrderList, onClick, setCreateWorkOrder }) {
    function createWorkOrder() {
        setCreateWorkOrder(true);
    }
    return (
        <>
            <div className="container__table">
                <Button onClick={createWorkOrder} name="Создать" />
                <h2 className="heading">Заказ-наряды</h2>

                <table className="table">
                    <thead className="table_thead">
                        <tr>
                            <th>Продукт</th>
                            <th>Номер</th>
                            <th>Материал</th>
                            <th>Дата начала</th>
                            <th>Статус</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workOrderList.map((item) => (
                            <tr
                                onClick={() =>
                                    onClick ? onClick(item) : <></>
                                }
                                id={item.id}
                            >
                                <td>{item.product.name}</td>
                                <td>{item.number}</td>
                                <td>{item.material.name}</td>
                                <td>{item.start_date}</td>
                                {item.is_finished == false ? (
                                    <td>В работе</td>
                                ) : (
                                    <td>Завершён</td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
