import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Patrick Jean Meurer | Engenheiro de Software Sênior',
    short_name: 'Patrick Jean Meurer',
    description:
      'Com uma paixão por tecnologia e inovação, sou um Engenheiro de Software Sênior especializado em soluções que transformam ideias complexas em realidade. Explorando novas fronteiras com foco em eficiência e impacto social',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
