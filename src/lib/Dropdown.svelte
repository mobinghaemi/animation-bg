<script>
    import Background from "./Background.svelte";

    let active = "Emoji";

    let emoji = ['🗿','🗿'];
    $: count = 50
    $: colour = 'rgba(0, 0, 0, 0.2)';
    $: colour2 = 'white';

    $: deg = 45;
    $: colours = ['#ee7752, #e73c7e, #23a6d5, #23d5ab']

    console.log(emoji);

    const handler = () => {
        console.log(count);
    }
</script>

<div class="sec-center dropdown">
    <input class="dropdown" type="checkbox" id="dropdown" name="dropdown" />
    <label class="for-dropdown" for="dropdown">
        Animation : {active}
    </label>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="section-dropdown">
        <p on:click={(_) => (active = "Emoji")}>Emoji</p>
        <p on:click={(_) => (active = "Box")}>Box</p>
        <p on:click={(_) => (active = "Bubble")}>Bubble</p>
        <p on:click={(_) => (active = "Gradient")}>Gradient</p>
    </div>
</div>

{#if active === "Emoji"}
    <input type="text" placeholder="['🗿','🗿']" bind:value={emoji} />
    <input type="number" bind:value={count}/>
    <Background characters={emoji} count={count}/>
    <!-- <button on:click={handler}>Edit</button> -->
{:else if active === "Box"}
    <input type="text" placeholder="red" bind:value={colour}/>
    <Background name="box" colour={colour}/>
{:else if active === "Bubble"}
    <input type="text" placeholder="red" bind:value={colour2}/>
    <Background name="bubble" colour={colour2}/>
{:else if active === "Gradient"}
    <input type="text" placeholder="['red','black']" bind:value={colours}/>
    <input type="number" placeholder="deg" bind:value={deg} />
    <Background name="gradient" colours={colours} deg={deg} />
{/if}

<style>
    input {
        margin-top: 1rem;
        border-radius: 4px;
        outline: none;
        border: none;
        padding: 1rem;
        background-color: #222222d7;
        color: white;
        font-size: 1rem;
    }
    :global(body) {
        background-color: #333;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    .sec-center {
        position: relative;
        max-width: 100%;
        text-align: center;
        z-index: 200;
    }
    [type="checkbox"]:checked,
    [type="checkbox"]:not(:checked) {
        position: absolute;
        left: -9999px;
        opacity: 0;
        pointer-events: none;
    }

    .dropdown:checked + label,
    .dropdown:not(:checked) + label {
        position: relative;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 15px;
        line-height: 2;
        height: 50px;
        transition: all 200ms linear;
        border-radius: 4px;
        width: 220px;
        letter-spacing: 1px;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-align-items: center;
        -moz-align-items: center;
        -ms-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        -moz-justify-content: center;
        -ms-justify-content: center;
        justify-content: center;
        -ms-flex-pack: center;
        text-align: center;
        border: none;
        background-color: #ffeba7;
        cursor: pointer;
        color: #102770;
        box-shadow: 0 12px 35px 0 rgba(255, 235, 167, 0.15);
    }
    .dropdown:checked + label:before,
    .dropdown:not(:checked) + label:before {
        position: fixed;
        top: 0;
        left: 0;
        content: "";
        width: 100%;
        height: 100%;
        z-index: -1;
        cursor: auto;
        pointer-events: none;
    }
    .dropdown:checked + label:before {
        pointer-events: auto;
    }
    /* .dropdown:not(:checked) + label .uil {
        font-size: 24px;
        margin-left: 10px;
        transition: transform 200ms linear;
    }
    .dropdown:checked + label .uil {
        transform: rotate(180deg);
        font-size: 24px;
        margin-left: 10px;
        transition: transform 200ms linear;
    } */
    .section-dropdown {
        position: absolute;
        padding: 5px;
        background-color: #111;
        top: 70px;
        left: 0;
        width: 100%;
        border-radius: 4px;
        display: block;
        box-shadow: 0 14px 35px 0 rgba(9, 9, 12, 0.4);
        z-index: 2;
        opacity: 0;
        pointer-events: none;
        transform: translateY(20px);
        transition: all 200ms linear;
    }
    .dropdown:checked ~ .section-dropdown {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
    }
    .section-dropdown:before {
        position: absolute;
        top: -20px;
        left: 0;
        width: 100%;
        height: 20px;
        content: "";
        display: block;
        z-index: 1;
    }
    .section-dropdown:after {
        position: absolute;
        top: -7px;
        left: 30px;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid #111;
        content: "";
        display: block;
        z-index: 2;
        transition: all 200ms linear;
    }

    p {
        position: relative;
        color: #fff;
        transition: all 200ms linear;
        font-family: "Roboto", sans-serif;
        font-weight: 500;
        font-size: 15px;
        border-radius: 2px;
        padding: 0.75rem 0;
        /* padding-left: 3.2rem; */
        /* padding-right: 15px; */
        margin: 2px 0;
        text-align: center;
    }
    p:hover {
        color: #102770;
        background-color: #ffeba7;
        cursor: pointer;
    }
    .dropdown-sub:checked + label .uil,
    .dropdown-sub:not(:checked) + label .uil {
        font-size: 22px;
    }
    .dropdown-sub:not(:checked) + label .uil {
        transition: transform 200ms linear;
    }
    .dropdown-sub:checked + label .uil {
        transform: rotate(135deg);
        transition: transform 200ms linear;
    }
</style>
