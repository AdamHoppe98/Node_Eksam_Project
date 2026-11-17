<script>
    let { onFlip } = $props();

    let usernameInput = $state("");
    let passwordInput = $state("");
    let emailInput = $state("")
    async function signup() {
        const response = await fetch("/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ username: usernameInput, password: passwordInput, email: emailInput }),
        });

        const result = await response.json();
        console.log(result);
    }
</script>

<div class="login-card">
    <div class="welcome-message">
        <p class="text-center text-3xl font-bold">CREATE A USER</p>
    </div>
    <input placeholder="Username" bind:value={usernameInput} class="login-input login-size" />
    <input placeholder="Email" type="email" bind:value={emailInput} class="login-input login-size" />
    <input placeholder="Password" type="password" bind:value={passwordInput} class="login-input login-size" />

    <button class="login-button login-size" onclick={signup}>CreateUser</button>
    <button onclick={onFlip} class="flip-button">Back to login</button>
</div>

<style>
</style>
