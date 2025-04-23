<script>
	import "../app.css";
	import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";

	let y = 0;
	let innerHeight = 0;
	let innerWidth = 0;

	function goTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
</script>

<div class="flex flex-col min-h-screen">
	<Header y={y} />

	<main class="flex-1 relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base">
		<slot />
	</main>

	<Footer />

	<!-- Scroll to top button with proper transitions -->
	<button
		on:click={goTop}
		class="fixed bottom-6 right-6 p-3 rounded-full bg-gray-800 text-white shadow-lg
		       transition-all duration-300 ease-in-out"
		class:opacity-100={y > 300}
		class:opacity-0={y <= 300}
		class:translate-y-0={y > 300}
		class:translate-y-4={y <= 300}
		class:pointer-events-none={y <= 300}
		aria-label="Scroll to top"
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
		</svg>
	</button>
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
