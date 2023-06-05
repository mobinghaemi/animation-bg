<script>
    import { onMount } from "svelte";

    // Animation: Emojis

    // Props
    export let name = "emoji";
    export let characters = ["🗿"];
    export let count = 50;


    // Variables
    $: confetti = new Array(count)
        .fill()
        .map((_, i) => {
            return {
                character: characters[i % characters.length],
                x: Math.random() * 100,
                y: -20 - Math.random() * 100,
                r: 0.1 + Math.random() * 1,
            };
        })
        .sort((a, b) => a.r - b.r);

    onMount(() => {
        let frame;

        function loop() {
            frame = requestAnimationFrame(loop);

            confetti = confetti.map((emoji) => {
                emoji.y += 0.7 * emoji.r;
                if (emoji.y > 120) emoji.y = -20;
                return emoji;
            });
        }

        loop();

        return () => cancelAnimationFrame(frame);
    });

    // Emoji End

    // Anime: Box
    // Props
    // export let box_count = 10;
    export let colour = "rgba(0, 0, 0, 0.5)";

    // Variables
    let boxItems = new Array(10).fill();
    let innerHeight;

    // Anime: Bubbling
    let bubblesItem = new Array(15).fill();

    // Anime:Gradient
    export let colours = ['#ee7752, #e73c7e, #23a6d5, #23d5ab']
    $: useColours = colours.join(',')
    export let deg = 45

</script>

<!-- Get Page Height -->
<svelte:window bind:innerHeight />

{#if name === "emoji"}
    <div class="emoji" style={`height : ${innerHeight / 1}px`}>
        {#each confetti as c}
            <span style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})"
                >{c.character}</span
            >
        {/each}
    </div>
{:else if name === "box"}
    <ul class="circles" style={`height : ${innerHeight}px`}>
        {#each boxItems as box}
            <li style={`background: ${colour}`} />
        {/each}
    </ul>
{:else if name === "bubble"}
    <div class="wrapper" style={`height : ${innerHeight}px`}>
        {#each bubblesItem as bubble}
            <div style={`border: 2px solid ${colour}`}>
                <span class="dot" style={`background: ${colour}`} />
            </div>
        {/each}
    </div>
{:else if name === "gradient"}
    <div class="body" style={` background: linear-gradient(-${deg}deg, ${useColours});`}/>
{/if}

<style>
    .emoji {
        width: 98%;
        position: fixed;
        /* position: relative; */
        /* height: 475px; */
        z-index: -1;
    }

    .body {
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    @keyframes wave {
        2% {
            transform: translateX(1);
        }

        25% {
            transform: translateX(-25%);
        }

        50% {
            transform: translateX(-50%);
        }

        75% {
            transform: translateX(-25%);
        }

        100% {
            transform: translateX(1);
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :global(body) {
        /* overflow: hidden; */
        overflow: auto;
    }

    span {
        position: absolute;
        font-size: 5vw;
        user-select: none;
    }
    ul {
        list-style-type: none;
    }

    .circles {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    .circles li {
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        /* background: red; */
        animation: animate 35s linear infinite;
        bottom: -150px;
    }

    .circles li:nth-child(1) {
        left: 25%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
    }

    .circles li:nth-child(1) {
        left: 25%;
        width: 80px;
        height: 80px;
        animation-delay: 2s;
    }

    .circles li:nth-child(2) {
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
        animation-duration: 12s;
    }

    .circles li:nth-child(3) {
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 6s;
    }

    .circles li:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 2s;
        animation-duration: 18s;
    }

    .circles li:nth-child(5) {
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
    }

    .circles li:nth-child(6) {
        left: 75%;
        width: 110px;
        height: 110px;
        animation-delay: 5s;
    }

    .circles li:nth-child(7) {
        left: 35%;
        width: 150px;
        height: 150px;
        animation-delay: 9s;
    }

    .circles li:nth-child(8) {
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 17s;
        animation-duration: 45s;
    }

    .circles li:nth-child(9) {
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 4s;
        animation-duration: 35s;
    }

    .circles li:nth-child(10) {
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 2s;
        animation-duration: 11s;
    }

    @keyframes animate {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
        }

        100% {
            transform: translateY(-2000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
        }
    }

    .wrapper {
        height: 100%;   
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }
    .wrapper div {
        height: 60px;
        width: 60px;
        border: 2px solid rgba(255, 255, 255, 0.7);
        border-radius: 50px;
        position: absolute;
        top: 10%;
        left: 10%;
        animation: 4s linear infinite;
    }
    .wrapper div .dot {
        height: 10px;
        width: 10px;
        border-radius: 50px;
        background: rgba(255, 255, 255, 0.5);
        opacity: 0.5;
        position: absolute;
        top: 20%;
        right: 20%;
    }
    .wrapper div:nth-child(1) {
        top: 20%;
        left: 20%;
        animation: animate2 8s linear infinite;
    }
    .wrapper div:nth-child(2) {
        top: 60%;
        left: 80%;
        animation: animate2 10s linear infinite;
    }
    .wrapper div:nth-child(3) {
        top: 40%;
        left: 40%;
        animation: animate2 3s linear infinite;
    }
    .wrapper div:nth-child(4) {
        top: 66%;
        left: 30%;
        animation: animate2 7s linear infinite;
    }
    .wrapper div:nth-child(5) {
        top: 90%;
        left: 10%;
        animation: animate2 9s linear infinite;
    }
    .wrapper div:nth-child(6) {
        top: 30%;
        left: 60%;
        animation: animate2 5s linear infinite;
    }
    .wrapper div:nth-child(7) {
        top: 70%;
        left: 20%;
        animation: animate2 8s linear infinite;
    }
    .wrapper div:nth-child(8) {
        top: 75%;
        left: 60%;
        animation: animate2 10s linear infinite;
    }
    .wrapper div:nth-child(9) {
        top: 50%;
        left: 50%;
        animation: animate2 6s linear infinite;
    }
    .wrapper div:nth-child(10) {
        top: 45%;
        left: 20%;
        animation: animate2 10s linear infinite;
    }
    .wrapper div:nth-child(11) {
        top: 10%;
        left: 90%;
        animation: animate2 9s linear infinite;
    }
    .wrapper div:nth-child(12) {
        top: 20%;
        left: 70%;
        animation: animate2 7s linear infinite;
    }
    .wrapper div:nth-child(13) {
        top: 20%;
        left: 20%;
        animation: animate2 8s linear infinite;
    }
    .wrapper div:nth-child(14) {
        top: 60%;
        left: 5%;
        animation: animate2 6s linear infinite;
    }
    .wrapper div:nth-child(15) {
        top: 90%;
        left: 80%;
        animation: animate2 9s linear infinite;
    }
    @keyframes animate2 {
        0% {
            transform: scale(0) translateY(0) rotate(70deg);
        }
        100% {
            transform: scale(1.3) translateY(-100px) rotate(360deg);
        }
    }
</style>
