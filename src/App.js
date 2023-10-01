import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import { Main } from './Pages/Main';
import { Print } from './Pages/Print';
import { useState } from 'react';

function App() {
    const [workOrder, setWorkOrder] = useState(false);
    return (
        <div className="main">
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/Main" />} />
                    <Route
                        path="/Main"
                        element={
                            <Main
                                setWorkOrder={setWorkOrder}
                                workOrder={workOrder}
                            />
                        }
                    />
                    <Route
                        path="/Print"
                        element={
                            <Print
                                setWorkOrder={setWorkOrder}
                                workOrder={workOrder}
                            />
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
