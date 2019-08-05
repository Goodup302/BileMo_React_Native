export let API_TOKEN = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NjUwMTc3MDEsImV4cCI6MTU2NTEwNDEwMSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiU0ZSLTVkNDgzZGNiMGFkNjUifQ.CwNr1NhFjTOI88EOScneUk2UtOSFIRjIi7PUWO7pQCbkVReMIzcy1iZLHq2PjuSlsWOgbZD-oY8J3dey4DxFgUPHZdKqJzDJ2ZnUGxLLX96FKjZK8nrihD645IJwfJBGJRthx5_dOYdzOiETNquq1ORE8TjDAeMMO-mhY86xIzUVOY6dWZFwfuQ4JMG2NFESHNgjVXVtIGpf7qNNZIEai0btXwdDugjqXLhyalEO1dnJiQ8mwvC0Cj-NlObKaHcG7gHVEa22dxIdr8F-tfn-jORUJ6shyer8ra5cVtqmsq_HgEsGa-nTTzuOnRcs_c3MprY95JxsLhBeWwMLXSUf3VTb0bHJ71XmwudPuM0lkhAjsFr6plkwrvAMf2AtuuNnhEyaMiZCY4FPCqV61kne1deNbK7KHRxfI9kYtiGtvkRgyrp0UW_jBtsYQhuMvqbGPpxis1VfKjMeQk-Pvt-SnHKFIaZ1SGHUaS5qZP6L1bl_hlnxyb2yKBedDtt7Ez105evEg_9uGO_-Gb9lKSBbb6K1XNawp-w8s_YfmvcrXwYtreGokTU5XRaxPXc3OFDFVa5Eri4N9WvgRbB4J0YED4atEXGAdUlgWurkfqY9Mkzjkq_HNZFubstNzCGntmvQJdOA317K4AV_K5VDkBnALrQ0Te4uSNiKiYPwIfHiR5k';
export const API_URL = 'http://bilemo.goodup302.fr';
export const API_LOGIN = {
    username: "SFR-5d483dcb0ad65",
    password: "admin"
};


class Api {
    constructor() {
        this.getToken()
    }

    getToken() {
        return fetch(API_URL+'/token', {
            headers: {'Content-Type': 'application/json'},
            method: "POST",
            body: JSON.stringify(API_LOGIN)
        })
            .then((res) => res.json())
            .then((res) => {
                API_TOKEN = 'Bearer '+res.token;
                //console.log(API_TOKEN);
            }).catch((error) => console.error(error))
    }

    getProductList(link = '/api/products?page=1') {
        //console.log('token: '+API_TOKEN);
        return fetch(API_URL+link, {
            headers: {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/json',
                'Authorization': API_TOKEN,
            },
            method: "GET",
        })
            .then((res) => res.json())
            .catch((error) => console.error(error))
    }

    getSingleProduct(link) {
        return fetch(API_URL+link, {
            headers: {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/json',
                'Authorization': API_TOKEN,
            },
            method: "GET",
        })
            .then((res) => {res.json().data.attributes})
            .catch((error) => console.error(error))
    }
}

export let API = new Api();