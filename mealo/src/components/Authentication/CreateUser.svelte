<script>
    let { onFlip } = $props();

</script>

<div class="login-card">
    <div class="welcome-message">
        <p class="text-center text-3xl font-bold">CREATE A USER</p>
    </div>
    <input placeholder="Username" class="login-input login-size" />
    <input placeholder="Password" class="login-input login-size" />
    <button class="login-button login-size">CreateUser</button>
    <button onclick={onFlip} class="flip-button">Back to login</button>
</div>

<style>
    
</style>
