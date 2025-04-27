<script>
    import { slide } from 'svelte/transition';
    import C1 from '../../../content/algorithms/1.md';
    import C2 from '../../../content/algorithms/2.md';
    import C3 from '../../../content/algorithms/3.md';
    import C4 from '../../../content/algorithms/4.md';
    import C5 from '../../../content/algorithms/5.md';
    import C6 from '../../../content/algorithms/6.md';
    import C7 from '../../../content/algorithms/7.md';
    import C8 from '../../../content/algorithms/8.md';

  
    let searchingOpen = false;
    let sortingOpen = false;
    let recursionOpen = false;

  </script>
  
  <main class="flex flex-col flex-1 p-4">
    <div class="flex flex-col lg:justify-center text-center lg:text-left gap-3 md:gap-3 lg:gap-5">
      <h2 class="font-semibold jetbrains text-4xl sm:text-5xl md:text-6xl pb-5 border-b">
        Algorithms
      </h2>
  
      <p class="text-lg pb-5">
        Algorithms are a sequence of instructions that are designed to solve a problem. They use
        combinations of concepts to quickly or efficiently do a task. Some examples are searching, sorting, and calculation.
      </p>
  
      <div class="rounded-md bg-neutral-800 p-6 w-72">
        <h3 class="font-semibold text-2xl sm:text pb-5 text"><u>Quick Navigation</u></h3>
  
        <!-- Dropdown: Searching -->
        <div class="relative">
          <button
            on:click={() => (searchingOpen = !searchingOpen)}
            class="flex items-center text-lg text-cyan-500 hover:text-fuchsia-500 focus:outline-none"
          >
            <span>
              <a href="#searching">1. Searching</a>
            </span>
            <span
              class="ml-1 transform transition-transform duration-200"
              class:rotate-180={searchingOpen}>▼</span
            >
          </button>
  
          {#if searchingOpen}
            <div
              class="mt-2 ml-4 bg-neutral-700 rounded-md shadow-md p-2 w-full"
              transition:slide={{ duration: 300 }}
            >
              <div class="flex flex-col space-y-2">
                <a
                  href="#sequential-search"
                  class="block text-sm text-cyan-500 hover:text-fuchsia-500 p-2 rounded ml-4"
                  >• Sequential Search</a
                >
                <a
                  href="#binary-search"
                  class="block text-sm text-cyan-500 hover:text-fuchsia-500 p-2 rounded ml-4"
                  >• Binary Search</a
                >
              </div>
            </div>
          {/if}
        </div>
  
        <!-- Dropdown: Sorting -->
        <div class="relative mt-1">
          <button
            on:click={() => (sortingOpen = !sortingOpen)}
            class="flex items-center text-lg text-cyan-500 hover:text-fuchsia-500 focus:outline-none"
          >
            <span>
              <a href="#sorting">2. Sorting</a>
            </span>
            <span
              class="ml-1 transform transition-transform duration-200"
              class:rotate-180={sortingOpen}>▼</span
            >
          </button>
  
          {#if sortingOpen}
            <div
              class="mt-2 ml-4 bg-neutral-700 rounded-md shadow-md p-2"
              transition:slide={{ duration: 300 }}
            >
              <div class="flex flex-col space-y-2">
                <a
                  href="#gnome-sort"
                  class="block text-sm text-cyan-500 hover:text-fuchsia-500 hover:bg-neutral-700 p-2 rounded ml-4"
                  >• Gnome Sort</a
                >
                <a
                  href="#quicksort"
                  class="block text-sm text-cyan-500 hover:text-fuchsia-500 hover:bg-neutral-700 p-2 rounded ml-4"
                  >• Quicksort</a
                >
              </div>
            </div>
          {/if}
        </div>
  
        <!-- Recursion -->
        <div class="relative mt-1">
          <a class="text-lg text-cyan-500 hover:text-fuchsia-500" href="#recursion">3. Recursion</a>
        </div>
  
        <!-- Back Link -->
        <a class="text-lg " href="/tutorials">
          ← Back
        </a>
      </div>
  
      <div class="pb-3"></div>
  
      <section id="searching">
        
        <h3 class="font-semibold jetbrains text-3xl sm:text pb-5">01. Searching</h3>
        When you are presented with an array of data and need to find the location of a certain element,
        there are 2 common methods:<br />
        <a
          href="https://en.wikipedia.org/wiki/Linear_search"
          class="text-cyan-500 hover:text-fuchsia-500">Sequential Search</a
        >
        and
        <a
          href="https://en.wikipedia.org/wiki/Binary_search"
          class="text-cyan-500 hover:text-fuchsia-500">Binary Search</a
        >. Both of these algorithms determine the index of a certain value, or return some sort of default if not found. 
        <div class="pb-10"/>
        <section id="sequential-search">
            <h3 class="text-2xl jetbrains font-semibold">Sequential Search</h3>
            Sequential search, also known as linear search, loops through the array one by one and stops if it finds a match. <br/> The most basic implementation looks like this:
            <C1/>
            Sequential search works in O(n) time since the time it takes is directly proportional to the size of the array. <br/> Additionally, the array does not have to be sorted.
        </section>
        <div class="pb-10"/>
        <section id="binary-search">
            <h3 class="text-2xl jetbrains font-semibold">Binary Search</h3>
            Binary search works by splitting the array into progressively smaller partitions depending on where the element should be. <br/>
            It does this by determining if the target is above or below the median of the current array, and repeating the process on whichever half the target should be in. <br/>
            Because of this, the array MUST be sorted before using binary search.<br/>
            There are 2 variations of binary search: iterative and recursive.
            <div class="pb-5"/>
            Iterative method:
            <C2/>
            <div class="pb-5"/>
            Recursive method:
            <C3/>
            <div class="pb-5"/>
            The most common error made when using binary search is not sorting the array. <br/>
            This can be easily fixed by the methods in the next section: sorting.
        </section>
      </section>
  
      <section id="sorting">
        <h3 class="font-semibold jetbrains text-3xl sm:text pt-5 pb-5">02. Sorting</h3>
        Sorting algorithms are used to arrange data in a certain order.<br/>
        This tutorial will cover 2 sorting algorithms: Gnome Sort and Quicksort. Gnome sort is a bit of a historical artifact than anything due to its poor performance, whilst Quicksort is fast and efficient. <br/>
        A variant of it is used for the Java Arrays.sort on primitive types, called Dual-Pivot Quicksort.
        <div class="pb-10"/>
        <section id="gnome-sort">
            <h3 class="text-2xl jetbrains font-semibold">Gnome Sort</h3>
            Gnome sort is one of the first sorting algorithms ever created. It named as such because the way it works resembles how a garden gnome would sort its flower pots. <br/>
            It works by comparing adjacent elements and swapping them if they are out of order. If they are out of order, it will backtrack to the previous element and repeat until the elements are in order.
            <br/>
            Pseudocode:
            <C4/>
            Note that when implemented in Java, the code is slightly more complex due to swapping.
            <C5/>
            <div class="pb-5"/>
            Visualization and in-depth explanation:
            <iframe width="720" height="410" title="Gnome Sort Video"src="https://www.youtube.com/embed/Iv3i8M42Mm4" frameborder="0" allowfullscreen></iframe>
            The time complexity of Gnome sort is O(n^2), which is worse than the more common algorithms such as quicksort and mergesort, with O(n log n) time complexity.
            However, one selling point of this algorithm is that it has very low auxillary memory requirements, needing one 1 extra swap variable, making it O(1) memory.
      </section>
      <div class="pb-10"/>
      <section id="quicksort">
        <h3 class="text-2xl jetbrains font-semibold">Quicksort</h3>
        <div class="pb-5"/>
        Quicksort works by selecting a pivot element, then moving all the elements with value greater than the pivot to the right of it, and vice versa for the left. <br/>
        It then repeats this process until the array is sorted.
        The most common implementation of Quicksort is recursive, which is as follows:
        <C6/>
        As you can see, the implementation is quite long, so generally when sorting data in Java, you can simply call Arrays.sort() on the array.
      <section id="recursion">
        <h3 class="font-semibold jetbrains text-3xl sm:text pt-5 pb-5">03. Recursion</h3>
        Recursion is a type of algorithm that calls itself repeatedly. Recursive algorithms are useful for dealing with problems that are easily broken down into sub-problems.<br/>
        <br/>
        All recursive algorithms must follow 3 rules: <br/>
        1. All recursive algorithms must have a base case, which is the simplest case that can be solved without recursion. <br/>
        2. All recursive algorithms must have a recursive case, which is the case that calls itself.<br/>
        3. All recursive algorithms must move towards the base case by modifiny the input parameters to approach the base case.<br/>
        <br/>
        The following functions demonstrate examples of poorly implemented recursive algorithms:
        <C7/>
        <div class="pb-5"/>
        The following functions demonstrate examples of well implemented recursive algorithms:
        <C8/>
        As shown previously, recursion is also used in sorting algorithms like Quicksort.
      </section>
    </div>
  </main>
  