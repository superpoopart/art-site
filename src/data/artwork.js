const modules = import.meta.glob('../assets/art/**/*.{png,jpg,jpeg,webp,gif}', {
  eager: true,
})

export const ARTWORK = Object.entries(modules)
  .map(([path, mod]) => {
    const nsfw = /[\\/]nsfw[\\/]/.test(path)
    const file = path.split(/[\\/]/).pop()
    const title = file
      .replace(/\.[^.]+$/, '')
      .replace(/[-_]+/g, ' ')
    return { id: path, title, src: mod.default, nsfw }
  })
  .sort((a, b) => a.title.localeCompare(b.title))
