<script>
	import "../app.css";
	import Header from "../components/Header.svelte";
	import Footer from "../components/Footer.svelte";
	let y;
	let innerHeight = 0;
	let innerWidth = 0;

	function goTop() {
		document.body.scrollIntoView({ behavior: "smooth" });
	}
</script>

<div class="flex flex-col min-h-screen">
	<Header y={y} />

	<main class="flex-1 relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base">
		<slot />
	</main>

	<Footer />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
