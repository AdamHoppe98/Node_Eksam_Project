import { writable } from "svelte/store";

const BASE_URL = "/api/meals";

async function getRandomMeal() {
        try {
            const response = await fetch(BASE_URL + "/random");
            if (!response.ok) throw new Error(`Error getting the meal: ${response.status}`);
            const result = await response.json();
            return result.data.meals[0];
        } catch (error) {
            console.error(error);
        }
    }

async function searchMeals(query = ""){
    try {
        const response = await fetch(`${BASE_URL}?search=${encodeURIComponent(query)}`)
        if(!response.ok) throw new Error(`Error getting the meal: ${response.status}`);
        const result = await response.json();

        return result.data;
    } catch(error) {
        console.error(error);
    }
}


function mealsCustomStore() {
    const { subscribe, set, update } = writable();

    return {
        subscribe,
        set,
        update,
        getRandomMeal,
        searchMeals,
    }
}

export const meals = mealsCustomStore();