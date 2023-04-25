<script>
	import type { TransactionData } from "../../lib/APIHandler/types"

    export let transaction : TransactionData
</script>


<p> {transaction.id} </p>
<p> {transaction.title} </p>
<p> {transaction.amount} </p>
<p> {transaction.author} </p>
<p> {transaction.description} </p>
<p> {transaction.datetime} </p>
<p> {transaction.tag} </p>