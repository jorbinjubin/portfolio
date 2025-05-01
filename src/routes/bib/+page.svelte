<script>
	const tutorialLinks = [
		"https://www.w3schools.com/java/java_conditions.asp",
		"https://www.w3schools.com/java/java_while_loop.asp",
        "https://www.w3schools.com/java/java_for_loop.asp",
        "https://www.geeksforgeeks.org/arrays-in-java/",
        "https://www.geeksforgeeks.org/arraylist-in-java/",
        "https://en.wikipedia.org/wiki/Gnome_sort",
        "https://en.wikipedia.org/wiki/Quicksort",
        "https://www.geeksforgeeks.org/quick-sort-algorithm/",
        "https://www.geeksforgeeks.org/classes-objects-java/",
        "https://www.geeksforgeeks.org/inheritance-in-java/",
        "https://www.geeksforgeeks.org/polymorphism-in-java/",
        "https://www.geeksforgeeks.org/abstract-classes-in-java/",
        "https://www.geeksforgeeks.org/interfaces-in-java/",
        "https://www.w3schools.com/java/java_oop.asp",
        "https://www.w3schools.com/java/java_interface.asp"



	];

	const websiteLinks = [
		"https://tailwindcss.com/docs/installation/using-vite",
		"https://svelte.dev/tutorial/kit/introducing-sveltekit",
        "https://github.com/TermuxHackz/X-osint",
        "https://github.com/sherlock-project/sherlock",
        "https://exiftool.org/"
	];
</script>

<main class="flex flex-col flex-1 p-4">
	<div class="flex flex-col lg:justify-center text-center lg:text-left gap-3 md:gap-3 lg:gap-5">
		<h2 class="font-semibold jetbrains text-4xl sm:text 5xl md:text-6xl pb-5 border-b">Bibliography</h2>
		<p class="text-lg pb-5">
			The following sources are resources I used to compile information for the website, as well as information and components used to build the website itself.
    
		</p>
        
		<section class="mb-10 w-full">
            <h2 class="text-2xl font-semibold mb-4">Tutorial References</h2>
            <ul class="list-disc list-inside space-y-2 text-cyan-500">
                {#each tutorialLinks as link}
                    <li><a href={link} class="hover:text-fuchsia-500">{link}</a></li>
                {/each}
            </ul>
        </section>
    
        <!-- Website Resources Section -->
        <section class="w-full">
            <h2 class="text-2xl font-semibold mb-4">Website References</h2>
            <ul class="list-disc list-inside space-y-2 text-cyan-500">
                {#each websiteLinks as link}
                    <li><a href={link} class="hover:text-fuchsia-500">{link}</a></li>
                {/each}
            </ul>
        </section>
        
	</div>
</main>
