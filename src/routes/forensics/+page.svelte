<script>
    import C1 from '../../content/forensics/1.md';
    import C2 from '../../content/forensics/2.md';
    import C3 from '../../content/forensics/3.md';
	import C4 from '../../content/forensics/4.md';
	import C5 from '../../content/forensics/5.md';
</script>

<main class="flex flex-col flex-1 p-4">
	<div class="flex flex-col lg:justify-center text-center lg:text-left gap-3 md:gap-3 lg:gap-5">
		<h2 class="font-semibold jetbrains text-4xl sm:text 5xl md:text-6xl pb-5 border-b">Forensics</h2>
		<p class="text-lg pb-5">
			CTF, or Capture the Flag, is a digital jeopardy-style challenge where contestants are tasked with retrieving a hidden "flag" (string of text). It can be obscured in simple ways, like a caesar cipher, or require many layers of operations involving math, coding, and even geolocation. <br/>
			My specialty in CTF challenges is forensics - the art of analyzing digital artifacts to retrieve the flag. Some basic examples are metadata, network captures, file modification, steganography, and memory dumps.
		</p>
		<div class="rounded-md bg-neutral-800 p-6 w-72">
			<h3 class="font-semibold text-2xl sm:text pb-5 text"><u>Quick Navigation</u></h3>
			<a class="text-lg text-cyan-500 hover:text-fuchsia-500" href="#metadata">1. Metadata</a> <br/>
			<a class="text-lg text-cyan-500 hover:text-fuchsia-500" href="#steg">2. Steganography</a><br/>
			<a class="text-lg text-cyan-500 hover:text-fuchsia-500" href="#osint">3. OSINT</a><br/>
			<!-- svelte-ignore element_invalid_self_closing_tag -->
			<div class="pb-3"/>
			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<!-- svelte-ignore a11y_missing_attribute -->
			<a class="text-lg text-cyan-0 hover:text-fuchsia-500 cursor-pointer" href="/tutorials"> ← Back </a>
		</div>
		<section id="metadata">
			<h3 class="font-semibold jetbrains text-3xl sm:text pb-5">01. Metadata</h3>
			Metadata is data that is embedded within an image file that describes info that is not neccessarily visible in the image. If an image is taken using a phone or digital camera, it very likely has metadata attached. <br/>
			It can have information such as:
			<br/>
			- Camera info (model, make, lens)
			<br/>
			- Camera settings (aperture, shutter speed, ISO, flash)
			<br/>
			- Date and time (when the image was taken)
			<br/>
			- Location (GPS coordinates)
			<br/>
			- File Details (resolution, color depth, format)
			<br/> and more.
			Metadata may also contain a comment, which is often very useful for CTF challenges.

			<br/>
			The primary method for viewing metadata in CTF challenges is known as <a class="text-cyan-500 hover:text-fuchsia-500" href="https://exiftool.org/">exiftool</a>. It was developed by Phil Harvey as a way to view, modify, and remove image metadata.
			In order to view all available metadata in an image using Exiftool, you can use the following command:
			<C1/>
		</section>
			
		<section id="steg">
			<h3 class="font-semibold jetbrains text-3xl sm:text pt-5 pb-5">02. Steganography</h3>
			Steganography is the art of hiding information inside other information. Consider this puzzle:
			<br/>
			Below, you will find a letter that was written to a high profile inmate in on death row. This probably apocryphal story has actual roots in WWII when a high ranking officer name John Trevanion used a letter similar to this one to escape a prison.
Find the hidden message that managed to sneak past the prison guards.
<C2/>
<br/>
The answer was to apply the Trevanion cipher to the letter. A Trevanion cipher is a cipher which hides information in the n-th letter after each punctuation mark. In this case, the key was 4. <br/>
If you take the 4th letter after each punctuation mark, you get the following message:
<C3/>
<br/> Cleaning it up a bit, you get the message "Vent in lav[atory] by death room leads out [of the prison]"
<br/>
Whilst this particular example is rather uncommon (and so are Trevanion cipher problems), it still demonstrates an important concept - you can hide important information in otherwise innocent looking media.
<br/> Now, consider the following image: 
<!-- svelte-ignore a11y_img_redundant_alt -->
<img src="/fractal.png" alt="Image of a fractal" title="Image of a fractal">
As it is conventiently a .png file, this means that it has no compression. We can use this to our advantage. After running exiftool gives no results, we look to the random pixels in the top left corner. 
<br/> This image hides information using those pixels! <br/>
Digital pixels are usually represented using RGB values, which can be expressed in base 10 (0-255, 0-255, 0-255), hexadecimal (000000-ffffff), or binary (00000000-11111111, 00000000-11111111, 00000000-11111111)
<br/> In this case, the solution was to take the pixel data, in binary, combine the n-th bit of each value, then convert it to ASCII. 
<br/> Here is the pixel data (obtained using the python image processing library Pillow): 
<C4/>
<br/> Using the below Java code to extract the n-th bit from each byte:
<C5/>and decoding into ASCII, we get the flag: "0n3_tW0_THR33_F0ur_fiV3_5IX_53v3N_3i9Ht!"
This is just a basic introduction to steganography, and there are many more techniques that can be used to hide information in images, such as LSB (Least Significant Bit) and MSB (Most Significant Bit).
		</section>

		<section id="osint">
			<h3 class="font-semibold jetbrains text-3xl sm:text pt-5 pb-5">03. OSINT</h3>
			OSINT, or Open Source INTelligence, is basically stalking, but it's technical and has a fancy name. Beyond using search engines like Google and social media platforms like Instagram and Twitter, there are a few tools that can be used to gather OSINT:
			<br/>
			- <a href="https://github.com/TermuxHackz/X-osint" class="hover:text-fuchsia-500 text-cyan-500" >X-OSINT</a>: Open source tool for gathering all sorts of information about a person, based on their phone number, email address, and more.
			<br/>
			- <a href="https://github.com/sherlock-project/sherlock" class="hover:text-fuchsia-500 text-cyan-500" >Sherlock</a>: Used to find usernames across over 400 social networks, from chess.com and Fiverr to Github and last.fm and more.

		</section>
	</div>
</main>
