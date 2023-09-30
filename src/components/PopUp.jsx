import { Input } from './Input';
import { Button } from './Button';
import { Select } from './Select';

export function PopUp({ setWorkOrder, workOrder, nomenclatures }) {
    /*Закртие popUp workOrder*/
    function closePopUp(e) {
        {
            if (!e.target.closest('.container__PopUp')) {
                setWorkOrder();
            }
        }
    }
    return (
        <div onClick={closePopUp} className="main__container">
            <div className="container__PopUp">
                <div className="content__Acts">
                    <h3 style={{ borderBottom: 'thick double var(--dark)' }}>
                        Заказ-наряд № {workOrder.id}
                    </h3>
                    <Input name="Продукт" value={workOrder.product.name} />
                    <Input name="Номер" value={workOrder.number} />

                    <Select name="Материал" options={nomenclatures} />

                    <Input
                        type="date"
                        name="Дата начала"
                        value={workOrder.start_date}
                    />
                    <Input
                        name="Статус"
                        value={
                            workOrder.is_finished == false
                                ? 'В работе'
                                : 'Завершён'
                        }
                    />

                    <Button
                        // onClick={createClient}
                        style="button_green"
                        name="Сохранить"
                    />
                </div>
            </div>
        </div>
    );
}
