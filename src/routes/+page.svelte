<script>
    import Background from "$lib/Background.svelte";
    import Dropdown from "$lib/Dropdown.svelte";
    import '../assets/style.css'
</script>

<div class="app dropdown">
    <!-- <Background name="gradient" /> -->
    <Dropdown />
</div>

<style>
    * {
        margin: 0;
        padding: 0;
    }
    .app {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 90vh;
    }
   .dropdown {
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 15px;
        line-height: 1.4;
        color: #fff;
        overflow-x: hidden;
        background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat-back.svg");
        background-position: center;
        background-repeat: repeat;
        background-size: 4%;
        width: 100%;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-pack: center;
        justify-content: center;
        /* padding-top: 100px; */
        /* padding-bottom: 300px; */
        user-select: none;
    }
</style>
