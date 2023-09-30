// function checkErrors(response) {
//     if (!response.ok) {
//         InfoPopUp(`Неизвестная ошибка № ${response.status}`, "popup__Info_red");
//     }
// }

export async function getToken() {
    let response = await fetch('http://127.0.0.1:8000/api/v1/api-token-auth/', {
        method: 'POST',
        body: JSON.stringify({ username: 'admin', password: '123' }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // checkErrors(response);

    return await response.json();
}
/*Получение наряд-заказов*/
export async function getWorkOrderList({ token }) {
    let response = await fetch('http://127.0.0.1:8000/api/v1/workorders/', {
        headers: {
            AUTHORIZATION: `Token ${token}`,
        },
    });

    // checkErrors(response);

    return await response.json();
}
/*Получение материалов*/
export async function getNomenclatures({ token }) {
    let response = await fetch('http://127.0.0.1:8000/api/v1/nomenclatures/', {
        headers: {
            AUTHORIZATION: `Token ${token}`,
        },
    });

    // checkErrors(response);

    return await response.json();
}
export async function addWorkOeder(fornData, token) {
    let response = await fetch(`http://127.0.0.1:8000/api/v1/workorders/`, {
        headers: {
            AUTHORIZATION: `Token ${token}`,
        },
        body: fornData,
        method: 'POST',
    });
    // checkErrors(response);
    return await response.json();
}
