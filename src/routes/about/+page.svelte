<script>
	let activeTab = 'less'; // Default active tab

	const tabs = [
		{ id: 'tldr', label: 'TLDR' },
		{ id: 'less', label: 'Less' },
		{ id: 'full', label: 'Full' }
	];

	// Using objects with html property for each tab
	const tabContents = {
		tldr: {
			html: `<p>Hi! My name is Justin and I am a Grade 11 Student at <a class="text-cyan-500 hover:text-fuchsia-500" href="http://wlmac.ca/macsprogram/">William Lyon Mackenzie Collegiate Institute<a/>, in the MaCS program. I live in Toronto, Ontario. My hobbies include woodturning, cooking, gaming, reading, and occasionally, coding. I also have experience in both additive (3D printing) and subtractive (milling) CNC manufacturing techniques. I created this portfolio from scratch using  <a class="text-cyan-500 hover:text-fuchsia-500" href="https://npmjs.com">npm<a/>, <a class="text-cyan-500 hover:text-fuchsia-500" href="https://svelte.dev/tutorial/kit/introducing-sveltekit">SvelteKit<a/>, and <a class="text-cyan-500 hover:text-fuchsia-500" href="https://tailwindcss.com">TailwindCSS<a/>.</p>`
		},
		less: {
			html: `<p>Hello! My name is Justin. I currently attend the MaCS program at William Lyon Mackenzie Collegiate Institute. I live in Toronto, Ontario. Academically, my strengths are mostly in STEM topics, like Physics and Tech Design. In my spare time, I make wooden bowls, plates, and cups on my 2 woodturning lathes. I have been woodturning consistently for just over a year. Apart from that, I also dabble in cooking from around the world. I also have some experience designing, constructing, and programming CNC machines. I also own an SLA 3D printer. I have extensive experience in both Fusion360 and FreeCad. I am a hobby Linux user, running Arch Linux on both of my laptops.<br/> I created this portfolio from scratch for ICS4U using  <a class="text-cyan-500 hover:text-fuchsia-500" href="https://npmjs.com">npm<a/>, <a class="text-cyan-500 hover:text-fuchsia-500" href="https://svelte.dev/tutorial/kit/introducing-sveltekit">SvelteKit<a/>, and <a class="text-cyan-500 hover:text-fuchsia-500" href="https://tailwindcss.com">TailwindCSS<a/></p>`
		},
		full: {
			html: `Hello! My name is Justin. I currently attend the <a class="text-cyan-500 hover:text-fuchsia-500" href="http://wlmac.ca/macsprogram">MaCS program</a> at William Lyon Mackenzie Collegiate Institute. I live in Toronto, Ontario. <br/>
				My favourite courses are those in the STEM category, especially Physics, Mathematics, Technological Design (Wood Shop), and Computer Science.
				In my spare time, I make wooden bowls, plates, and cups on my 2 woodturning lathes. I am familliar with both carbide and HSS (high-speed steel) tooling. 
				I have been woodturning consistently for just over a year, but my first stint on a lathe was when I was about 7 years old. 
				I also do CTF (Capture the Flag) challenges on websites such as <a class="text-cyan-500 hover:text-fuchsia-500" href="https://picoctf.org">PicoCTF</a> and <a class="text-cyan-500 hover:text-fuchsia-500" href="https://ctf.mcpt.ca">mCTF</a>. 
				I specialize in forensics, which covers things like <a class="text-cyan-500 hover:text-fuchsia-500" href="https://en.wikipedia.org/wiki/Steganography">steganography</a>
				, <a class="text-cyan-500 hover:text-fuchsia-500" href="https://en.wikipedia.org/wiki/Open-source_intelligence">OSINT</a>
				, and more generally, <a class="text-cyan-500 hover:text-fuchsia-500" href="https://en.wikipedia.org/wiki/Cipher">ciphers</a>
				and encryption.
				<br/>
				Apart from that, I also dabble in cooking from around the world, especially Chinese, Japanese, Italian, and American. 
				My favourite foods are fried rice and pizza, both homemade.
				I make pizza as a hobby and plan to build my own brick pizza oven. <br/>
				I am also an avid gamer, with just under 1000 hours played on Terraria and around the same playtime on Factorio.<br/>
				I have experience designing, constructing, and programming CNC machines. My main CNC related project was building a small router for cutting keys. It had an automatic tool changer using a custom collet system, with a cutting area of 100x100x20mm. 
				It was operated by connecting a laptop with various GCode files, all brought together using GRBL. 
				It has since been replaced with a redesigned version with a built-in RasPi as well as an enclosure. <br/>
				I also own an Elegoo Mars Pro, which I use to print small parts for projects and fixing things. <br/>
				I have extensive experience in both Fusion360 and FreeCad, as well as creating technical drawings on paper. <br/>
				I am a hobby Linux user, running Arch Linux on both of my laptops. I have used Linux since 2022. I also run Ubuntu Server on a workstation as my "home lab", which I also use to host Minecraft servers. <br/>
				I created this portfolio from scratch for ICS4U using  <a class="text-cyan-500 hover:text-fuchsia-500" href="https://npmjs.com">npm<a/>, <a class="text-cyan-500 hover:text-fuchsia-500" href="https://svelte.dev/tutorial/kit/introducing-sveltekit">SvelteKit<a/>, and <a class="text-cyan-500 hover:text-fuchsia-500" href="https://tailwindcss.com">TailwindCSS<a/>. This is my first major web-based project.
				`		
		}
	};
</script>
<main class="flex flex-col flex-1 p-4">
	<section id="about" class="lg:grid-cols-2 gap-10 py-8 sm:py-14">
		<div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
			<h2 class="font-semibold jetbrains text-4xl sm:text-5xl md:text-6xl pb-8 border-b">
				About Me
			</h2>
			Here, you will find some information about me. Use the tabs below to choose how detailed a description you want.
			
			<!-- Combined Tab Group -->
			<div class="flex flex-col">
				<!-- Tab Navigation -->
				<div class="flex bg-neutral-700 rounded-tl-lg rounded-tr-lg">
					{#each tabs as tab}
					<button
					class={`py-2 px-8 font-medium text-sm focus:outline-none 
					  ${activeTab === tab.id 
						? 'border-t-2 border-cyan-500 text-cyan-400 bg-neutral-800 ' + 
						  (tab.id === 'tldr' ? 'rounded-tl-lg' : '')
						: 'text-gray-400 hover:text-gray-300 hover:border-gray-300'
					  }`}
					on:click={() => (activeTab = tab.id)}
				  >
					{tab.label}
				  </button>
					{/each}
				</div>

				<!-- Tab Content -->
				<div class="p-6 bg-neutral-800 rounded-bl-lg rounded-br-lg shadow-sm prose">
					{@html tabContents[activeTab].html}
				</div>
			</div>
		</div>
	</section>
</main>