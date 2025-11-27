function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector('#profile img')

  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute('content', '#ffffff')
  } else {
    img.setAttribute('src', './assets/avatar.png')
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute('content', '#121214')
  }
}

// Adicionar meta tag para theme-color dinâmico
const metaThemeColor = document.createElement('meta')
metaThemeColor.name = 'theme-color'
metaThemeColor.content = '#121214'
document.head.appendChild(metaThemeColor)

// Adicionar loading="lazy" para imagens
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('img')
  images.forEach((img) => {
    img.setAttribute('loading', 'lazy')
  })
})
