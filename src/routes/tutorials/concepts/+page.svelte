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
</script>

<main class="flex flex-col flex-1 p-4">
	<div class="flex flex-col lg:justify-center text-center lg:text-left gap-3 md:gap-3 lg:gap-5">
		<h2 class="font-semibold jetbrains text-4xl sm:text 5xl md:text-6xl pb-5 border-b">Concepts</h2>
		<p class="text-lg pb-5">
			Concepts describe basic programming knowledge like conditionals, loops, and more. They apply
			to all programming languages.
		</p>

		<section id="conditionals">
			<h3 class="font-semibold jetbrains text-3xl sm:text pb-5">01. Conditionals</h3>
			Conditionals can be used to adjust the flow of a program based on certain conditions.<br />
			To use an if statement, the syntax is as follows:
			<C1 />
			For example:
			<C2 />

			<div class="pb-10" />
			That's fantastic, but what if you also wanted to know if 'i' was not equal to 4? This is where
			the 'else' statement comes in.
			<C3 />
			<div class="pb-10" />
			Finally, to have multiple conditions you want to check for, the 'else if' clause can be used like
			so:
			<C4 />
			<div class="pb-10" />
			There are 2 more ways to write if statements. One is a shortened version, whilst the other is known
			as a ternary statement. All of the following implementations are functionally identical to a regular
			if-else statement.
			<C5 />
			<div class="pb-10" />
		</section>

		<section id="arrays">
			<h3 class="font-semibold jetbrains text-3xl sm:text pt-5 pb-5">02. Arrays</h3>
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
			<h3 class="font-semibold jetbrains text-3xl sm:text pt-5 pb-5">03. ArrayLists</h3>
			ArrayLists are a Java class that needs to be imported. They are a more flexible version of arrays.
			They allow you to dynamically increase the size, at the cost of extra memory and performance. Their
			basic methods are as follows:
			<C9 />
			An ArrayList will dynamically change its size by doubling it when full.
			<div class="pb-10" />
		</section>
	</div>
</main>
