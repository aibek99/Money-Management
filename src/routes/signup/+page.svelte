<script lang="ts">
	import Cookies from 'js-cookie';

	let email = "";
	let firstName = "";
	let lastName = "";
    let password = "";
    let passwordConfirmation = "";
    let passwordsMatch = true;

	async function handleRegister() {
		const response = await fetch('https://shohjahonh.pythonanywhere.com/register/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				first_name: firstName,
				last_name: lastName,
				password: password,
			})
		});

		if (response.ok) {
			const data = await response.json();
			const token = data.token;

			console.log('Successful register');
			console.log(token);
			Cookies.set('token', token, {expires: 1, secure: true});
			window.location.href = '/profile';
		} else {
			alert('Invalid credentials');
		}
	}

    function validatePassword() {
        passwordsMatch = password === passwordConfirmation;
        if (password === passwordConfirmation) {
            console.log("Passwords match");
        } else {
            console.log("Passwords don't match");
        }
    }
</script>


<div class="container">
	<h1>Register</h1>
	<form on:submit|preventDefault={handleRegister} method="post">
		<input type="text" bind:value={email} placeholder="Email" name="email" required />
		<input type="text" bind:value={firstName} placeholder="First name" name="firstname" required />
		<input type="text" bind:value={lastName} placeholder="Last name" name="lastname" required />
		<input type="password" bind:value={password} placeholder="Password" name="password" required />
        <input type="password" bind:value={passwordConfirmation} placeholder="Password confirmation" name="password" required />
        <button on:click={validatePassword} type="submit" formaction="?/register">Register</button>
		<a href="/login" class="ifthecase">If you have account, sign in with your account!</a>
        {#if !passwordsMatch}
            <p style="color: red;">Passwords don't match</p>
        {/if}
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
</style>

