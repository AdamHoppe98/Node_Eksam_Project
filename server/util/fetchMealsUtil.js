const BASE_URL = "https://www.themealdb.com/api/json/v1/1";


export async function fetchRandomMeal(){
    const response = await fetch(BASE_URL + "/random.php");
    return await response.json();
}

export async function fetchMealsWithQuery(query){
    const response = await fetch(`${BASE_URL}/search.php?s=${query}`);

    if(!response.ok) {
        throw new Error("Error fetching that query")
    }
    return await response.json();
}

