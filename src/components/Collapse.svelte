<script>
    let isOpen = false;
  </script>
  
  <div class="border-b border-gray-200 dark:border-gray-700">
    <button
      on:click={() => (isOpen = !isOpen)}
      class="flex items-center justify-between w-full p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      aria-expanded={isOpen}
    >
      <h3 class="text-lg font-medium text-left">
        <slot name="heading">Collapsible Section</slot>
      </h3>
      <svg
        class={`w-5 h-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    
    <div
      class="overflow-hidden transition-all duration-300 ease-in-out"
      style={`max-height: ${isOpen ? '1000px' : '0'}`}
    >
      <div class="p-4 pt-2">
        <slot />
      </div>
    </div>
  </div>