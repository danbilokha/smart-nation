
import {apiAuthPostFetch} from './ApiFetch';

const API_PATH = '/';

function statusChecker(response) {
    if(response.status >= 200 && response.status < 300)
        return Promise.resolve(response);
    return Promise.reject(response);
}

/*
    ================================================
                    MAIN BOOK SEARCH
    ================================================
*/
export function searchBooks(searchData) {
    return function() {
        return fetch(`${API_PATH}/Home/GetAllSearchedBooks`, {
            method: "POST",
            headers: {
                Accept: 'application/json, text/javascript, */*; q=0.01',
                'Content-type': 'application/json; charset=UTF-8',
            },
            mode: "cors",
            credentials: "include",
            body: JSON.stringify(searchData)
        })
        .then(statusChecker)
        .then(response => response.json())
        .then(json => {
            return {
                searchedBooks: json
            };
        });
    }
}

/*
    =================================================================
                            BOOK REQUEST
    =================================================================
*/
export function getOrderBookData(bookData) {
    return apiAuthPostFetch("Book/OrderBook", bookData);
}

/*
    ================================================================
                    USER LOGIN\LOGOUT\REGESTRATION
    ================================================================
*/
export function loginRequest(userData) {
    return function () {
        return fetch(`${API_PATH}/Account/Login`, {
            method: "POST",
            headers: {
                Accept: 'application/json, text/javascript, */*; q=0.01',
                'Content-type': 'application/json; charset=UTF-8',
            },
            mode: "cors",
            credentials: "include",
            body: JSON.stringify(userData)
        })
        .then(statusChecker)
        .then(response => response.json())
        .then(json => {
            return {
                username: json.login
                , name: json.name
                , surname: json.surname
                , role: json.role
            }
        });
    }
};

export function registrationRequest(userData) {
    return function() {
        return fetch(`${API_PATH}/Account/Register`, {
            method: "POST",
            headers: {
                Accept: 'application/json, text/javascript, */*; q=0.01',
                'Content-type': 'application/json; charset=UTF-8',
            },
            mode: "cors",
            credentials: "include",
            body: JSON.stringify(userData)
        })
        .then(statusChecker);
    }
}

export function logoutRequest() {
    return function() {
        return fetch(`${API_PATH}/Account/Logout`, {
            method: "POST", 
            headers: {
                Accept: 'application/json, text/javascript, */*; q=0.01',
                'Content-type': 'application/json; charset=UTF-8',
            },
            mode: "cors",
            credentials: "include",
        });
    }
}

/*
    ================================================
                    USER CABINET
    ================================================
*/
export function getCabinetData(data) {
    return function() {
        return {
            userId: 1,
            photo: null,
            description: 'My name is user and I like to read',
        }
    }
}

export function addBook(data) {
    return function() {
        return fetch(`${API_PATH}/PersonalCabinet/AddBook`, {
            method: "POST",
            headers: {
                Accept: 'application/json, text/javascript, */*; q=0.01',
                'Content-type': 'application/json; charset=UTF-8',
            },
            mode: "cors",
            credentials: "include",
            body: JSON.stringify(data)
        })
        .then(statusChecker)
        .then(response => response.json())
        .then(json => {
            // Doing something after adding book
            //console.log(json);
        })
    }
}

export function getBookShelfBooks() {
    return function() {
        return fetch(`${API_PATH}/PersonalCabinet/GetAllUserBooks`, {
            method: "POST",
            headers: {
                Accept: 'application/json, text/javascript, */*; q=0.01',
                'Content-type': 'application/json; charset=UTF-8',
            },
            mode: "cors",
            credentials: "include"
        })
        .then(statusChecker)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            return json;
        })
    }
}
