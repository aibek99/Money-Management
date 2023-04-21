import type { Transaction } from "../types";

// TODO Edit Date format

export const transactions: Transaction[] = [
    {
        "id": 2,
        "title": "My Second",
        "amount": 324,
        "datetime": "2023-04-21T19:32:41Z",
        "transaction_type": "expense",
        "description": "i spent money",
        "tag": [
            {
                "id": 1,
                "name": "shop"
            }
        ]
    },
    {
        "id": 3,
        "title": "My Thirsd",
        "amount": 324,
        "datetime": "2023-03-21T19:32:41Z",
        "transaction_type": "expense",
        "description": "i spent money",
        "tag": [
            {
                "id": 1,
                "name": "shop"
            },
            {
                "id": 2,
                "name": "bus"
            },
            {
                "id": 3,
                "name": "car"
            }
        ]
    },
    {
        "id": 4,
        "title": "My Thirsd",
        "amount": 324,
        "datetime": "2023-03-21T19:32:41Z",
        "transaction_type": "expense",
        "description": "i spent money",
        "tag": [
            {
                "id": 2,
                "name": "bus"
            },
            {
                "id": 4,
                "name": "cool"
            }
        ]
    }
];


