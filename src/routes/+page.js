import { glob } from '$lib/utils/markdown';

export async function load() {
  const modules = import.meta.glob('../../../content/concepts/*.md');
  const concepts = await glob(modules);
  const sortedConcepts = concepts.sort((a, b) => parseInt(a.id) - parseInt(b.id));
  
  return {
    props: {
      concepts: sortedConcepts
    }
  };
}