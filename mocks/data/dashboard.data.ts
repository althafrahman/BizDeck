import { StatementApiResponseModel } from "@/src/business/interfaces/response.interface";

export const DASHBOARD_DATA: StatementApiResponseModel = {
    "totalSales": {
        "total": "165896",
        "totalOrders": "2000",
        "breakDowns": [
            {
                "breakDownName": "Customer Paid for Item",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Packaging Charge (+)",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Discount Given  By restaurant (+)",
                "breakDownvalue": "1200"
            }
        ]
    },
    "commissionableValue": {
        "total": "20000",
        "breakDowns": [
            {
                "breakDownName": "Customer Paid for Item",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Packaging Charge (+)",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Discount Given  By restaurant (+)",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Delivery charge for restaurants on self logistics (+)",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Delivery charge discount / Relisting discount  (-)",
                "breakDownvalue": "1200"
            }
        ]
    },
    "additionalAmount": {
        "total": "20000",
        "breakDowns": [
            {
                "breakDownName": "Cancellation refund",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Tips for Kitchen Staff",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "TDS Refund",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Commission rebate",
                "breakDownvalue": "1200"
            }
        ]
    },
    "netDeduction": {
        "total": "20000",
        "breakDowns": [
            {
                "breakDownName": "Service Fee",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Taxes on Commission + PG",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Advertisement",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Total Ads (inc. 18% GST)",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Government Charges",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Total Dining Ads (inc. 18% GST)",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Miscellaneous sevices",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "TCS",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "TDS",
                "breakDownvalue": "1200"
            }
        ]
    },
    "discountGivenByRestaurant": {
        "total": "20000",
        "breakDowns": [
            {
                "breakDownName": "Discounts Given By restaurant",
                "breakDownvalue": "1200"
            }
        ]
    },
    "orderLevelDeductions": {
        "total": "20000",
        "breakDowns": [
            {
                "breakDownName": "Customer Compensation/Recoupment",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Rejection Penalty",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Delivery Charges Recovery",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Credit note/(Debit Note) adjustment",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Promo recovery adjustments",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Extra Inventory Ads and Misc. (order level deduction)",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Brand loyalty points redemption",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Express Order Fee",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Amount received in cash (on self delivery orders)",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Adjustments from previous weeks",
                "breakDownvalue": "1200"
            }
        ]
    },
    "actualPayout":{
        "total": "20000",
        "breakDowns": [
            {
                "breakDownName": "Commissionable Value (-)",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Net Deductions (-)",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Other Order Level deductions",
                "breakDownvalue": "1200"
            }
        ]
    },
    "netPayout":{
        "total": "20000",
        "breakDowns": [
            {
                "breakDownName": "Actual Payout from the sales done in the respective month",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Additional Amount (Cancellation refund+ TDS Refund+ Tips for Kitchen Staff+ Commission rebate) (+)",
                "breakDownvalue": "1200"
            },
            {
                "breakDownName": "Gst On Goods Items Sold (+)",
                "breakDownvalue": "1200"
            }
        ]
    },
    "gstPaidBySourceApp":{
        "total": "20000",
        "breakDowns": [
            {
                "breakDownName": "GST paid by Zomato on behalf of restaurant ",
                "breakDownvalue": "1200"
            }
        ]
    }
}