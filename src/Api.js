/*Получение токена аутентификуации*/
export async function getToken() {
    let response = await fetch('http://127.0.0.1:8000/api/v1/api-token-auth/', {
        method: 'POST',
        body: JSON.stringify({ username: 'admin', password: '123' }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return await response.json();
}
/*Получение наряд-заказов*/
export async function getWorkOrderList({ token }) {
    let response = await fetch('http://127.0.0.1:8000/api/v1/workorders/', {
        headers: {
            AUTHORIZATION: `Token ${token}`,
        },
    });
    return await response.json();
}
/*Получение материалов*/
export async function getNomenclatures({ token }) {
    let response = await fetch('http://127.0.0.1:8000/api/v1/nomenclatures/', {
        headers: {
            AUTHORIZATION: `Token ${token}`,
        },
    });
    return await response.json();
}
/*Получение конкретного продукта*/
export async function getCurrentProduct(id, { authToken }) {
    let response = await fetch(
        `http://127.0.0.1:8000/api/v1/workorders/${id}/products/`,
        {
            headers: {
                AUTHORIZATION: `Token ${authToken}`,
            },
        }
    );
    return await response.json();
}
/*Создание заказ наряда*/
export async function addWorkOrder(formData, { authToken }) {
    let response = await fetch(`http://127.0.0.1:8000/api/v1/workorders/`, {
        headers: {
            AUTHORIZATION: `Token ${authToken}`,
        },
        body: formData,
        method: 'POST',
    });
    return await response.json();
}
/*Редактирование заказ наряда*/
export async function editWorkOrder(id, formData, { authToken }) {
    let response = await fetch(
        `http://127.0.0.1:8000/api/v1/workorders/${id}/`,
        {
            headers: {
                AUTHORIZATION: `Token ${authToken}`,
            },
            body: formData,
            method: 'PATCH',
        }
    );
    return await response.json();
}
/*Добавление продукта*/
export async function addProduct(id, formData, { authToken }) {
    let response = await fetch(
        `http://127.0.0.1:8000/api/v1/workorders/${id}/products/`,
        {
            headers: {
                AUTHORIZATION: `Token ${authToken}`,
            },
            body: formData,
            method: 'POST',
        }
    );
    return await response.json();
}
