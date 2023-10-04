import { Input } from './Input';
import { Button } from './Button';
import { Select } from './Select';
import { addProduct, editWorkOrder } from '../Api';
import { Link } from 'react-router-dom';

export function PopUp({
    setWorkOrder,
    workOrder,
    nomenclatures,
    authToken,
    currentProduct,
}) {
    /*Закртие popUp*/
    function closePopUp(e) {
        {
            if (!e.target.closest('.container__PopUp')) {
                setWorkOrder();
            }
        }
    }
    /*Функция редактирования заказ-наряда*/
    function redactorWorkOrder() {
        let formData = new FormData();
        if (document.getElementById('editProduct').value) {
            formData.append(
                'product',
                document.getElementById('editProduct').value
            );
        }
        if (document.getElementById('editNumber').value) {
            formData.append(
                'number',
                document.getElementById('editNumber').value
            );
        }
        if (document.getElementById('editMaterial').value) {
            formData.append(
                'material',
                document.getElementById('editMaterial').value
            );
        }
        if (document.getElementById('editDate').value) {
            formData.append(
                'start_date',
                document.getElementById('editDate').value
            );
        }

        editWorkOrder(workOrder.id, formData, { authToken }).then(
            (response) => {}
        );
    }
    /*Функция создания продукта*/
    function newProduct() {
        let formData = new FormData();
        if (document.getElementById('addWeightProduct').value) {
            formData.append(
                'weight',
                document.getElementById('addWeightProduct').value
            );
        }
        addProduct(workOrder.id, formData, { authToken }).then((response) => {
            document.getElementById('addWeightProduct').value = '';
        });
    }

    return (
        <div onClick={closePopUp} className="main__container">
            <div className="container__PopUp">
                <div className="content__Acts">
                    <h3 style={{ borderBottom: 'thick double var(--dark)' }}>
                        Заказ-наряд № {workOrder.id}
                    </h3>
                    <Select
                        id="editProduct"
                        name="Продукт"
                        first={workOrder.product.name}
                        options={nomenclatures}
                    />
                    <Input
                        id="editNumber"
                        name="Номер"
                        value={workOrder.number}
                    />
                    <Select
                        id="editMaterial"
                        name="Материал"
                        options={nomenclatures}
                        first={workOrder.material.name}
                    />
                    <Input
                        id="editDate"
                        type="date"
                        value={workOrder.start_date}
                    />
                    <div>
                        <Button
                            onClick={redactorWorkOrder}
                            style="button_green"
                            name="Сохранить"
                        />
                    </div>

                    <h3 style={{ borderBottom: 'thick double var(--dark)' }}>
                        Продукция по заказ-наряду № {workOrder.id}
                    </h3>
                    <div style={{ display: 'flex' }}>
                        <Input
                            id="addWeightProduct"
                            step="0.1"
                            name="Вес продукта"
                            type="number"
                        />
                        <Button onClick={newProduct} name="Добавить" />
                    </div>
                    <div className="container__table container__table_products">
                        <table className="table">
                            <thead className="table_thead">
                                <tr>
                                    <th>Серийный №</th>
                                    <th>Масса</th>
                                    <th>Дата</th>
                                    <th>Сохранить</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentProduct.map((item) => (
                                    <tr key={item.serial}>
                                        <td>{item.serial}</td>
                                        <td>{item.weight}</td>
                                        <td>{item.date.slice(0, 10)}</td>
                                        <td>
                                            <Link to="/Print">
                                                <ion-icon name="save-outline"></ion-icon>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
