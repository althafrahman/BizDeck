import { HttpHeaders } from "../interfaces/common.interface";


const headers: HttpHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

const BASE_URL = 'http://localhost:3000';
export async function getFetch(url: string, additionalHeaders:HttpHeaders = {}){
    const response = await fetch(`${BASE_URL}${url}`, {
        method: 'GET',
        headers: {
            ...headers,
            ...additionalHeaders
        },
    })

    if (!response.ok) {
        throw new Error(`GET ${url} failed: ${response.status}`);
      }
    
    return await response.json();
}

export async function postFetch(url: string, payload: unknown , additionalHeaders:HttpHeaders = {}){
    const response = await fetch(`${BASE_URL}${url}`, {
        method: 'POST',
        headers: {
            ...headers,
            ...additionalHeaders
        },
        body: JSON.stringify(payload)
    })
    if (!response.ok) {
        throw new Error(`POST ${url} failed: ${response.status}`);
      }
    
    return await response.json();
}