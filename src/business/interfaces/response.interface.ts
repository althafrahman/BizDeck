import { API_KEYS } from "../constants/common";

type StatementApiResponseModelType = {
    [key in API_KEYS]?: IndividualStatementModel;
  };

export interface StatementApiResponseModel extends StatementApiResponseModelType{ }

export interface IndividualStatementModel{
    total: string
    totalOrders?: string
    breakDowns: BreakdownsModel[]
}

export interface BreakdownsModel{
    breakDownName: string
    breakDownvalue: string
}