<script>
    import CreateUser from "./CreateUser.svelte";
    import Login from "./Login.svelte";

    let flipped = $state(false);

    function handleOnFlip() {
        flipped = !flipped;
    }
</script>

<div class="login-page">
    <div class="flip-card">
        <div class="flip-card-inner" class:flipped>
            <div class="flip-card-front">
                <Login onFlip={handleOnFlip} />
            </div>
            <div class="flip-card-back">
                <CreateUser onFlip={handleOnFlip} />
            </div>
        </div>
    </div>
</div>

<style>
    .login-page {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 95vh;
    }

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    .flip-card-inner.flipped {
        transform: rotateY(180deg);
    }
    .flip-card-front,
    .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
    }

    .flip-card-back {
        transform: rotateY(180deg);
    }
    .flip-card {
        height: 25vw;
        width: 25vw;
        perspective: 1000px;
    }
</style>
