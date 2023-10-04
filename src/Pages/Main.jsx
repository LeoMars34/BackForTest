import { useEffect, useState } from 'react';
import {
    getCurrentProduct,
    getNomenclatures,
    getToken,
    getWorkOrderList,
} from '../Api';
import { PopUp } from '../components/PopUp';
import { PopUpCreate } from '../components/PopUpCreate';
import { Table } from '../components/Table';

export function Main({ workOrder, setWorkOrder }) {
    const [workOrderList, setWorkOrderList] = useState([]);
    const [nomenclatures, setNomenclatures] = useState([]);
    const [authToken, setAuthToken] = useState();
    const [createWorkOrder, setCreateWorkOrder] = useState(false);
    const [currentProduct, setCurrentProduct] = useState([]);
    const [filterWorkOrderList, setFilterWorkOrderList] = useState([]);

    /*Функция показа конкретного заказ-наряда*/
    function showWorkOrder(item) {
        setWorkOrder(item);
        getCurrentProduct(item.id, { authToken }).then((data) => {
            setCurrentProduct(data);
        });
    }

    /*Функция фильтрации и поиска*/
    function filter(e, params = 'all') {
        document.querySelectorAll('input[type=checkbox]').forEach((item) => {
            if (e.target != item) {
                item.checked = false;
            }
        });
        setFilterWorkOrderList(() => {
            return workOrderList.filter((item) => {
                if (params == 'all') {
                    return item;
                } else if (params == 'is_finished') {
                    return item.is_finished;
                } else if (params == 'not_finished') {
                    return !item.is_finished;
                } else {
                    return item.number.includes(params);
                }
            });
        });
    }

    useEffect(() => {
        getToken().then((token) => {
            setAuthToken(token.token);
            getWorkOrderList(token).then((data) => {
                setWorkOrderList(data.results);
                setFilterWorkOrderList(data.results);
            });
            getNomenclatures(token).then((data) => {
                setNomenclatures(data.results);
            });
        });
    }, []);
    return (
        <div className="main">
            {workOrder && (
                <PopUp
                    nomenclatures={nomenclatures}
                    workOrder={workOrder}
                    setWorkOrder={setWorkOrder}
                    authToken={authToken}
                    setCurrentProduct={setCurrentProduct}
                    currentProduct={currentProduct}
                />
            )}

            {createWorkOrder && (
                <PopUpCreate
                    nomenclatures={nomenclatures}
                    setCreateWorkOrder={setCreateWorkOrder}
                    authToken={authToken}
                />
            )}

            <Table
                filter={filter}
                setCurrentProduct={setCurrentProduct}
                setCreateWorkOrder={setCreateWorkOrder}
                setWorkOrder={setWorkOrder}
                filterWorkOrderList={filterWorkOrderList}
                onClick={showWorkOrder}
            />
        </div>
    );
}
