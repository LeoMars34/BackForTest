import { useEffect, useState } from 'react';
import { Table } from './components/Table';
import { getNomenclatures, getToken, getWorkOrderList } from './Api';
import { InfoPopUp } from './components/InfoPopUp';
import { PopUp } from './components/PopUp';
import { PopUpCreate } from './components/PopUpCreate';

function App() {
    const [workOrderList, setWorkOrderList] = useState([]);
    const [nomenclatures, setNomenclatures] = useState([]);
    const [workOrder, setWorkOrder] = useState(false);
    const [createWorkOrder, setCreateWorkOrder] = useState(false);
    const [token, setToken] = useState();

    function showWorkOrder(item) {
        setWorkOrder(item);
    }

    useEffect(() => {
        getToken().then((token) => {
            setToken(token.token);
            getWorkOrderList(token).then((data) => {
                setWorkOrderList(data.results);
            });
            getNomenclatures(token).then((data) => {
                setNomenclatures(data.results);
            });
        });
    }, []);
    console.log(token.token);

    return (
        <div className="main">
            {workOrder && (
                <PopUp
                    nomenclatures={nomenclatures}
                    workOrder={workOrder}
                    setWorkOrder={setWorkOrder}
                />
            )}
            {createWorkOrder && (
                <PopUpCreate
                    nomenclatures={nomenclatures}
                    setCreateWorkOrder={setCreateWorkOrder}
                    token={token}
                />
            )}

            <Table
                setCreateWorkOrder={setCreateWorkOrder}
                setWorkOrder={setWorkOrder}
                workOrderList={workOrderList}
                onClick={showWorkOrder}
            />
        </div>
    );
}

export default App;
