module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--c-bg)',
        fg: 'var(--c-fg)',
        brand: 'var(--c-brand)',
        muted: 'var(--c-muted)',
        accent: 'var(--c-accent)',
        surface: 'var(--c-surface)',
        border: 'var(--c-border)',
      },
    },
  },
  plugins: [],
}
