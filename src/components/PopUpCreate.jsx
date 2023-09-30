import { Input } from './Input';
import { Button } from './Button';
import { Select } from './Select';
import { addWorkOeder } from '../Api';

export function PopUpCreate({ nomenclatures, setCreateWorkOrder, token }) {
    function createClient() {
        let formData = new FormData();
        if (document.getElementById('createProduct').value) {
            formData.append(
                'product',
                document.getElementById('createProduct').value
            );
        }
        if (document.getElementById('createNumber').value) {
            formData.append(
                'number',
                document.getElementById('createNumber').value
            );
        }
        if (document.getElementById('createMaterial').value) {
            formData.append(
                'material',
                document.getElementById('createMaterial').value
            );
        }
        if (document.getElementById('createDate').value) {
            formData.append(
                'start_date',
                document.getElementById('createDate').value
            );
        }

        addWorkOeder(formData, token).then((response) => {
            console.log(response);
        });
    }

    /*Закртие popUp workOrder*/
    function closePopUp(e) {
        {
            if (!e.target.closest('.container__PopUp')) {
                setCreateWorkOrder();
            }
        }
    }
    return (
        <div onClick={closePopUp} className="main__container">
            <div className="container__PopUp">
                <div className="content__Acts">
                    <h3 style={{ borderBottom: 'thick double var(--dark)' }}>
                        Заказ-наряд №
                    </h3>
                    <Input id="createProduct" name="Продукт" />
                    <Input id="createNumber" name="Номер" />

                    <Select
                        id="createMaterial"
                        name="Материал"
                        options={nomenclatures}
                    />

                    <Input id="createDate" type="date" name="Дата начала" />

                    <Button
                        onClick={createClient}
                        style="button_green"
                        name="Создать"
                    />
                </div>
            </div>
        </div>
    );
}
