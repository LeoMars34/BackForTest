import { useEffect } from 'react';
import { Button } from './Button';
import { Input } from './Input';

export function Table({ workOrderList, onClick, setCreateWorkOrder }) {
    useEffect(() => {
        let checkboxAll = document.getElementById('filterAll');
        let checkboxInWork = document.getElementById('filterInWork');
        let checkboxEnd = document.getElementById('filterEnd');
        checkboxAll.checked = true;
    }, []);
    function createWorkOrder() {
        setCreateWorkOrder(true);
    }
    console.log(workOrderList);
    return (
        <>
            <div className="container__table">
                <div
                    style={{ display: 'flex', gap: '20px', marginTop: '30px' }}
                >
                    <Input name="Поиск" />

                    <div className="search">
                        <ion-icon name="search-outline"></ion-icon>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                        }}
                    >
                        <input id="filterAll" type="checkbox" /> Все
                        <input id="filterInWork" type="checkbox" /> В работе
                        <input id="filterEnd" type="checkbox" /> Завершён
                    </div>

                    <Button
                        style="button_green"
                        onClick={createWorkOrder}
                        name="Создать заказ наряд"
                    />
                </div>
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
                                key={item.id}
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
