import { Button } from './Button';
import { Input } from './Input';

export function Table({
    filterWorkOrderList,
    onClick,
    setCreateWorkOrder,
    filter,
}) {
    function createWorkOrder() {
        setCreateWorkOrder(true);
    }

    return (
        <>
            <div className="container__table">
                <div
                    style={{ display: 'flex', gap: '20px', marginTop: '30px' }}
                >
                    <Input onInput={filter} name="Поиск" />

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
                        <input
                            onChange={(e) => {
                                filter(e);
                            }}
                            id="filterAll"
                            type="checkbox"
                        />{' '}
                        Все
                        <input
                            onChange={(e) => {
                                filter(e, 'not_finished');
                            }}
                            id="filterInWork"
                            type="checkbox"
                        />{' '}
                        В работе
                        <input
                            onChange={(e) => {
                                filter(e, 'is_finished');
                            }}
                            id="filterEnd"
                            type="checkbox"
                        />{' '}
                        Завершён
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
                        {filterWorkOrderList.map((item) => (
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
