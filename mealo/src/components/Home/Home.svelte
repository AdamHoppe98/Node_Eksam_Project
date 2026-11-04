
<script>
    import Authentication from "../Authentication/Authentication.svelte";
    import RandomMeals from "../Meals/RandomMeals.svelte";
    import SearchMeals from "../Meals/SearchMeals.svelte";


</script>


<!-- <Authentication /> -->
<!-- <RandomMeals /> -->
<div class="content">
    <SearchMeals />

</div>


<style>
.content {
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>