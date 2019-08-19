export default class Api {
    //static token;
    static BASE_URL = 'http://bilemo.goodup302.fr';

    // static tokenIsfind() {
    //     if (!Api.token) {
    //         return fetch(Api.BASE_URL+'/token', {
    //             headers: {'Content-Type': 'application/json'},
    //             method: "POST",
    //             body: JSON.stringify(API_LOGIN)
    //         })
    //             .then((res) => res.json())
    //             .then((res) =>
    //                 Api.token = 'Bearer '+res.token
    //             ).catch((error) => console.error(error))
    //     } else {
    //         return new Promise((resolve) => {
    //             resolve(Api.token)
    //         });
    //     }
    // }

    static getProductList(link = '/api/products') {
        return fetch(Api.BASE_URL+link, {
            headers: {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/json',
                //'Authorization': Api.token,
            },
            method: "GET",
        })
            .then((res) => res.json())
            .catch((error) => console.error(error))
    }

    static getSingleProduct(link) {
        return fetch(Api.BASE_URL+link, {
            headers: {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/json',
                //'Authorization': Api.token,
            },
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => res.data)
            .catch((error) => console.error(error))
    }
}