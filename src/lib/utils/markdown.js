export async function glob(modules) {
    const promises = Object.entries(modules).map(async ([path, resolver]) => {
      const { metadata, default: content } = await resolver();
      const filename = path.split('/').pop().replace('.md', '');
      return { id: filename, metadata, content };
    });
    
    return Promise.all(promises);
  }