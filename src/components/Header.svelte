<script>
	export let y;

    let tabs=[
        {name: "Projects", link: "/projects"},
        {name: "Tutorials", link: "/tutorials"},
        {name: "About Me", link: "/about"},
        {name: "Bibliography", link: "/bib"}
    ]
</script>

<header class={"sticky z-[10] top-0 duration-400 w-full " + (y > 0 ? "py-4 bg-black border-b-2  border-cyan-500" : "py-6 bg-transparent border-transparent")}>
	<div class="max-w-[1400px] mx-auto px-5 flex items-center justify-between">
			<a href="/" class="duration-200 text-lg hover:text-fuchsia-500 text-cyan-500 hover:translate-y-[-2px]">
				<p>ICS4U Portfolio</p>
			</a>
		<div class="sm:flex items-center gap-8 hidden text-lg">
			{#each tabs as tab}
            <!-- make tab links bob upwards when hovered -->
				<a href={tab.link} class="duration-200 hover:text-fuchsia-500 text-cyan-500 hover:translate-y-[-2px]">
					<p>{tab.name}</p>
				</a>
			{/each}
		</div>
	</div>
</header>

