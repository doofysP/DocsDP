---
head:
  - - meta
    - name: og:description
      content: Créditos del proyecto
    - name: description
      content: Créditos del proyecto
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/5114873?v=4',
    name: 'Daniel Rodriguez',
    title: 'Fundador del proyecto',
    links: [
      { icon: 'youtube', link: 'https://www.youtube.com/DanielRodriguezDoofy' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/85186792?v=4',
    name: 'DisoQ',
    title: 'Desarrollador',
    links: [
      { icon: 'github', link: 'https://github.com/DisoQ' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/31357533?v=4',
    name: 'CarmeloCampos',
    title: 'Colaborador externo',
    links: [
      { icon: 'github', link: 'https://github.com/CarmeloCampos' },
      { icon: 'twitter', link: 'https://twitter.com/CarmeloAlone' }
    ]
  },
]
</script>

# Creditos

<VPTeamMembers size="small" :members="members" />

