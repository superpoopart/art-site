import { copyFileSync } from 'node:fs'

// GitHub Pages serves 404.html for unknown paths; copying index.html there
// lets the SPA router handle deep links like /art-site/about.
copyFileSync('dist/index.html', 'dist/404.html')
