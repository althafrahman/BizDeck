import { API_ENPOINTS } from "../constants/apiEndpoints";
import { postFetch } from "./api.service";


function getMonthStatement(payload:unknown){
    const url = API_ENPOINTS.statement
    return postFetch(url, payload)
}

export const DashboardService = {
    getMonthStatement
}