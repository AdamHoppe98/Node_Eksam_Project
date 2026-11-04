<script>
    import Meals from "./Meals.svelte";
    import { meals } from "../../stores/meals/mealsStore.js";
    let mealPromise = $state(meals.getRandomMeal());

    async function handleRandomMeal() {
        mealPromise = await meals.getRandomMeal();
    }
</script>
<button onclick={handleRandomMeal}>Get random meal</button>
{#await mealPromise}
    <p>Loading...</p>
{:then meal}
    <Meals {meal} />
{/await}
