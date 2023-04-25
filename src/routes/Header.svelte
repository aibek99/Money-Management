<script>
	import Cookies from 'js-cookie';

	let header;

	function handleSignOut() {
		console.log(Cookies.get('token'));
		Cookies.remove('token', {secure: true});
		console.log(Cookies.get('token'));
		window.location.href = '/login';
	}
</script>
<header class="header-container" bind:this={header}>
	<div class="header-left">
		<img src="favicon.png" alt="Logo" class="header-logo"/>
		<span class="header-title">Money Management</span>
	</div>
	<nav class="header-nav">
		<a href="/" class="header-link">Home</a>
		{#if Cookies.get('token')}
			<a href="/profile" class="header-link">Profile</a>
			<a href="/history" class="header-link"> Transactions </a>
		{/if}
		<a href="/about" class="header-link">About</a>
	</nav>
	<div class="header-right">
		{#if Cookies.get('token')}
			<button class="header-button" on:click={handleSignOut}>Sign Out</button>
		{:else}
			<a href="/login" class="header-button">Sign In</a>
		{/if}
	</div>
</header>

<style>
	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px;
		background-color: black;
		color: silver;
		font-family: 'Kanit', sans-serif;
		font-size: 20px;
	}

	.header-left {
		display: flex;
		align-items: center;
	}

	.header-logo {
		width: 32px;
		height: 32px;
		margin-right: 8px;
	}

	.header-title {
		font-weight: bold;
	}

	.header-nav {
		display: flex;
		align-items: center;
	}

	button {
		all: unset;
	}

	.header-link {
		margin-left: 24px;
		color: silver;
		text-decoration: none;
		cursor: pointer;
	}

	.header-link:hover {
		text-decoration: underline;
	}

	.header-button {
		color: silver;
		margin-right: 10px;
	}
</style>
