<script>
	import C1 from '../../../content/concepts/1.md';
	import C2 from '../../../content/concepts/2.md';
	import C3 from '../../../content/concepts/3.md';
	import C4 from '../../../content/concepts/4.md';
	import C5 from '../../../content/concepts/5.md';
	import C6 from '../../../content/concepts/6.md';
	import C7 from '../../../content/concepts/7.md';
	import C8 from '../../../content/concepts/8.md';
	import C9 from '../../../content/concepts/9.md';
	import C10 from '../../../content/concepts/10.md';
	import C11 from '../../../content/concepts/11.md';
	import C12 from '../../../content/concepts/12.md';


	import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  
  function goBack() {
    if (window.history.length > 1) {
      history.back();
    } else {
      const segments = $page.url.pathname.split('/').filter(Boolean);
      segments.pop();
      goto(segments.join('/') || '/');
    }
  }
</script>

<main class="flex flex-col flex-1 p-4">
	<div class="flex flex-col lg:justify-center text-center lg:text-left gap-3 md:gap-3 lg:gap-5">
		<h2 class="font-semibold jetbrains text-4xl sm:text 5xl md:text-6xl pb-5 border-b">Concepts</h2>
		<p class="text-lg pb-5">
			Concepts describe basic programming knowledge like conditionals, loops, and more. They apply
			to all programming languages.
		</p>
		<div class="rounded-md bg-neutral-800 p-6 w-72">
			<h3 class="font-semibold text-2xl sm:text pb-5 text"><u>Quick Navigation</u></h3>
			<a class="text-lg text-cyan-500 hover:text-fuchsia-500" href="#conditionals">1. Conditionals</a> <br/>
			<a class="text-lg text-cyan-500 hover:text-fuchsia-500" href="#loops">2. Loops</a><br/>
			<a class="text-lg text-cyan-500 hover:text-fuchsia-500" href="#arrays">3. Arrays</a><br/>
			<a class="text-lg text-cyan-500 hover:text-fuchsia-500" href="#arraylists">4. ArrayLists</a><br/>
			<!-- svelte-ignore element_invalid_self_closing_tag -->
			<div class="pb-3"/>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<!-- svelte-ignore a11y_missing_attribute -->
			<a class="text-lg text-cyan-0 hover:text-fuchsia-500 cursor-pointer" on:click|preventDefault={goBack}> ← Back </a>
		</div>
		<div class="pb-3"/>
		<section id="conditionals">
			<h3 class="font-semibold jetbrains text-3xl sm:text pb-5">01. Conditionals</h3>
		</section>
			Conditionals can be used to adjust the flow of a program based on certain conditions.<br />
			To use an if statement, the syntax is as follows:
			<C1 />
			For example:
			<C2 />

			<div class="pb-10" />
			That's fantastic, but what if you also wanted to know if 'i' was not equal to 4? This is where
			the 'else' statement comes in.
			<C3 />
			<div class="pb-18" />
			Finally, to have multiple conditions you want to check for, the 'else if' clause can be used like
			so:
			<C4 />
			<div class="pb-8" />
			There are 2 more ways to write if statements. One is a shortened version, whilst the other is known
			as a ternary statement. All of the following implementations are functionally identical to a regular
			if-else statement.
			<C5 />
			<div class="pb-8" />
		

		<section id="loops">
			<h3 class="font-semibold jetbrains text-3xl sm:text pt-5 pb-5">02. Loops</h3>
			Loops are great for doing related tasks, multiple times. For example - let's say you needed to
			search the contents of 10 lockers. You could do:
			<C10 />
			But what if you needed to search 100 lockers? Or 1000? No trivial copy-paste solution would work.
			Instead, you could use a loop!
			<C11 />
			<div class="pb-3" />
			The other type of loop is a while loop. It executes the contents of the loop as long as the condition
			that is passed to it is true. For example:
			<C12 />
			In this case, the program will end when 'guess' becomes 5, but while loops can go on forever if
			the condition never becomes false, so use them carefully!
		</section>

		<section id="arrays">
			<h3 class="font-semibold jetbrains text-3xl sm:text pt-5 pb-5">03. Arrays</h3>
			Arrays can be used to store multiple values of the same data type efficiently. Suppose you had
			5 eggs of different sizes and you wanted to store those sizes. Instead of storing them as individual
			variables, it would be smarter to store them in an array like so:
			<C6 />
			<div class="pb-10" />
			The entries in the array are called elements (5,6,2,7,9 in the above example) and their places
			in the array are called indices. They interact like so:
			<C7 />
			<div class="pb-10" />
			They can also be iterated through using for- and for-each loops:
			<C8 />
			<div class="pb-10" />
		</section>

		<section id="arraylists">
			<h3 class="font-semibold jetbrains text-3xl sm:text pt-5 pb-5">04. ArrayLists</h3>
			ArrayLists are a Java class that needs to be imported. They are a more flexible version of arrays.
			They allow you to dynamically increase the size, at the cost of extra memory and performance. Their
			basic methods are as follows:
			<C9 />
			An ArrayList will dynamically change its size by doubling it when full.
			<div class="pb-10" />
		</section>
	</div>
</main>
