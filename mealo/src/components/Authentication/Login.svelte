<script>
    let { onFlip } = $props();
</script>


<div class="login-card">
    <div class="welcome-message">
        <h1 class="text-3xl font-bold">Welcome back!</h1>
        <p class="text-center">Log in to continue.</p>
    </div>
    <input placeholder="Username" class="login-input login-size" />
    <input placeholder="Password" class="login-input login-size" />
    <button class="login-button login-size">Login</button>
    <button onclick={onFlip} class="flip-button">Create account</button>
</div>

<style>
    
</style>
