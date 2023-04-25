<script lang="ts">
    import Balance from "../../lib/profile/Balance.svelte";
    import Income from "../../lib/profile/Income.svelte";
    import Expense from "../../lib/profile/Expense.svelte";
    import Chart from '../../lib/charts/pie.svelte';
    import Line from '../../lib/charts/line.svelte';
    import _ from '../../lib/APIHandler/fetchApi';
    import {onMount} from 'svelte';
    import type {responseUser, userData} from '../../lib/APIHandler/types';
    import type {Transaction} from "../../lib/types";

    import {transactions} from "../../lib/transactions/getTransactions";
    import {splitDate} from "../../lib/transactions/date";

    let name = 'DefaultName';
    let surname = 'DefaultSurname';
    let email = 'Default@mail.ru';

    let data: userData | null;

    let show_transactions: Transaction[] = transactions;

    const transactionDates = show_transactions.map((transaction) => splitDate(transaction.date));
    const transactionAmounts = show_transactions.map((transaction) => transaction.amount);

    onMount(async () => {
        const response: responseUser = await _.getUser();

        if (response.success) {
            data = response.data;
            if (data) {
                name = data.first_name;
                surname = data.last_name;
                email = data.email;
            }

        } else {
            console.log("Not Loaded")
        }
    });

    interface TagTotal {
        income: number;
        expense: number;
    }

    interface TagTotals {
        [tagName: string]: TagTotal;
    }

    const tagTotals: TagTotals = transactions.reduce((acc: TagTotals, transaction) => {
        transaction.tags.forEach((tagName) => {
            const existingTagTotal = acc[tagName.name] || {income: 0, expense: 0};
            if (transaction.type === "income") {
                existingTagTotal.income += transaction.amount;
            } else {
                existingTagTotal.expense += transaction.amount;
            }
            acc[tagName.name] = existingTagTotal;
        });
        return acc;
    }, {});

    const incomeTagNames: string[] = [];
    const incomeAmounts: number[] = [];
    const expenseTagNames: string[] = [];
    const expenseAmounts: number[] = [];

    for (const tagName in tagTotals) {
        const tagTotal = tagTotals[tagName];
        if (tagTotal.income > 0) {
            incomeTagNames.push(tagName);
            incomeAmounts.push(tagTotal.income);
        }
        if (tagTotal.expense > 0) {
            expenseTagNames.push(tagName);
            expenseAmounts.push(tagTotal.expense);
        }
    }
</script>

<svelte:head>
    <title>Profile</title>
</svelte:head>

<div class="profile-wrapper">
    <div class="profile-page">
        <div class="information">
            <p>Hi {name} {surname}</p>
            <p>email: {email}</p>
        </div>
    </div>
    <div class="cards">
        <Balance/>
        <Income/>
        <Expense/>
    </div>
    <div class="pie-charts">
        <Chart numbers={incomeAmounts} names={incomeTagNames} type="income"/>
        <Chart numbers={expenseAmounts} names={expenseTagNames} type="expense"/>
    </div>

    <div class="charts">


        <Line names={transactionDates} numbers={transactionAmounts}/>
    </div>
</div>

<style>
    .profile-wrapper {
        font-family: Kanit, sans-serif;
    }


    .profile-page {
        display: flex;
        justify-content: space-between;
        margin: 50px;
    }

    .information {
        border: 1px solid white;
        border-radius: 10px;
        background: linear-gradient(to bottom right, #444444, black);
        flex: 2;
        display: flex;
        flex-direction: column;
        padding: 15px;
        font-size: 20px;
        line-height: 8px;
    }

    .charts {
        flex: 2;
        margin: 20px;
    }

    .pie-charts {
        justify-content: space-evenly;
        display: flex;
        margin-top: 50px;
    }

    .cards {
        display: flex;
        justify-content: space-evenly;
    }

</style>
