<script>
    import '../app.css'
    import Login from '$lib/assets/login.svelte';
</script>

<div class="grid grid-cols-12 grid-rows-6 bg-gradient-to-b from-primary to-secondary w-screen h-screen">
    <div class="grid grid-cols-12 col-start-2 col-span-12 self-center items-end">
        <nav class="col-start-11">
            <a href="/" class="font-poppins text-white text-xl">
                <div class="flex items-center justify-around">
                    <p class="float-left">
                        log in 
                    </p>
                    <Login/>
                </div>
            </a>
        </nav>
    </div>

    <slot/>

</div> 