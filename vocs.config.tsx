import { defineConfig } from 'vocs'

export default defineConfig({
  iconUrl: '/logo.png', 
  baseUrl: 'https://mahendra.page', 
  title: 'mahendra.page',
  description: "I'm a Software Engineer. Write in Go, PHP, and sometimes JS. Love classical music.",
  theme: { 
    colorScheme: 'dark',
    accentColor: '#1ceaed' 
  },
  sidebar: {
    '/': primarySidebar(),
    '/blog': blogSidebar(),
  },
  head() {
    return (
      <>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mahendra · Software Engineer" />
	      <meta property="og:image" content="https://mahendra.page/thumbnail.png" />
        <meta property="og:site_name" content="Mahendra's Page"/>
        <meta property="og:url" content="https://mahendra.page/"/>
        <meta property="og:description" content="I'm a Software Engineer. Write in Go, PHP, and sometimes JS. Love classical music."/>
        <meta name="twitter:site" content="@mahendrasyathi"/>
      </>
    )
  },
  topNav: [ 
    { text: 'Works', link: '/works', match: '/docs' }, 
    { text: 'Blog', link: '/blog' }, 
    { text: 'CV', link: 'https://mahendra.page/Mahendra Dwi Syathi - Software Engineer - CV.pdf' }, 
  ],
  socials: [ 
    { 
      icon: 'github', 
      link: 'https://github.com/mahendra2448', 
    }, 
    { 
      icon: 'x', 
      link: 'https://twitter.com/mahendrasyathi', 
    }, 
  ], 
  font: { 
    google: 'Raleway'
  }, 
})

// Sidebar
function primarySidebar() {
  return [
    {
      text: 'My Works',
      link: '/works',
    },
    {
      text: 'Blog',
      link: '/blog',
    },
  ]
}

function blogSidebar() {

  const blogPath2024 = '/blog/2024'
  const march2024 = {
    text: 'March',
    collapsed: true,
    items: [
      {
        text: 'My March Post',
        link: blogPath2024 + '/march/my-first-post'
      }
    ]
  }

  return [
    {
      text: '2024',
      items: [
        march2024
      ]
    }
  ]
}