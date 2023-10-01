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

    function showWorkOrder(item) {
        setWorkOrder(item);
        getCurrentProduct(item.id, { authToken }).then((data) => {
            setCurrentProduct(data);
        });
    }

    useEffect(() => {
        getToken().then((token) => {
            setAuthToken(token.token);
            getWorkOrderList(token).then((data) => {
                setWorkOrderList(data.results);
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
                setCurrentProduct={setCurrentProduct}
                setCreateWorkOrder={setCreateWorkOrder}
                setWorkOrder={setWorkOrder}
                workOrderList={workOrderList}
                onClick={showWorkOrder}
            />
        </div>
    );
}
