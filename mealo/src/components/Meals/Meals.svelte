<script>
    import { meals } from "../../stores/meals/mealsStore.js";
    let { meal } = $props();

  

    
    const ingredients = $derived.by(() => {
        const tempMeal = meal;
        if (!tempMeal) return [];

        return Object.keys(tempMeal).filter(key => key.startsWith("strIngredient") && tempMeal[key]?.trim())
        .map(key => {
            const index = key.replace("strIngredient", "");
            return { id: index, name: tempMeal[key].trim(), measure: tempMeal[`strMeasure${index}`]?.trim() ?? "" }
        })
    });


</script>

<div id="meal-container">
    {#if meal}
        <h4>{meal.strMeal}</h4>
        <img src={meal.strMealThumb} alt={meal.strMeal} width="500" />
        <p>{meal.strCategory} | {meal.strArea}</p>
        <p>{meal.strInstructions}</p>
        <ul>
            {#each ingredients as { id, name, measure } (id)}
                <li>{name}{measure ? ` - ${measure}` : ""}</li>
            {/each}
        </ul>
    {/if}
</div>

<style>
    img {
        border-radius: 1rem;
    }

    #meal-container {
        width: 50%;
        margin: auto;
        align-items: center;
    }
</style>
