<script lang="ts">
	import { onMount } from 'svelte';
	import Cookies from 'js-cookie';

	let email = '';
	let password = '';

	async function handleLogin() {
		const response = await fetch('https://shohjahonh.pythonanywhere.com/login/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		});

		if (response.ok) {
			const data = await response.json();
			const token = data.token;

			console.log('Successful login');
			console.log(token);
			Cookies.set('token', token, {expires: 1, secure: true});
			window.location.href = '/profile';
		} else {
			alert('Invalid credentials');
		}
	}

	onMount(() => {
		const token = Cookies.get('token');
		console.log(token);

		if (token) {
//			check.set(true);
		} else {
//			check.set(false);
		}
	});
</script>

<div class="container">
	<h1>Login</h1>
	<form on:submit|preventDefault={handleLogin}>
		<input type="email" bind:value={email} placeholder="Email" name="email" required />
		<input type="password" bind:value={password} placeholder="Password" name="password" required />
		<button class="is-primary" type="submit" formaction="?/login">Login</button>
		<a href="/signup" class="ifthecase">If you don't have account, register new account!</a>
	</form>
</div>

<style>
	.container {
		background-size: cover;
		color: #fff;
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - 150px);
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}
	form {
		background-color: rgba(255, 255, 255, 0.8);
		border-radius: 0.5rem;
		display: flex;
		flex-direction: column;
		padding: 2rem;
		width: 100%;
		max-width: 400px;
	}
	h1 {
		font-size: 2rem;
		margin-bottom: 2rem;
		text-align: center;
	}
	input {
		border-radius: 0.25rem;
		border: none;
		font-size: 1rem;
		margin-bottom: 1rem;
		padding: 0.75rem;
	}
	button {
		background-color: #007bff;
		border: none;
		border-radius: 0.25rem;
		color: #fff;
		cursor: pointer;
		font-size: 1rem;
		margin-top: 1rem;
		padding: 0.75rem;
	}
	button:hover {
		background-color: #0062cc;
	}
	.container {
		padding: 1rem;
	}
</style>

