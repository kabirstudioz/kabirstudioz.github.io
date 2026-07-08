export type Service = {
  slug: string
  number: string
  title: string
  description: string
  video?: string
}

export const services: Service[] = [
  {
    slug: 'video-editing',
    video: '/videos/services/video-editing.mp4',
    number: '01',
    title: 'Video Editing',
    description:
      'Retention-first edits built around pacing, rhythm, and story. From short-form hooks to long-form narratives, every cut is made to keep the viewer watching.',
  },
  {
    slug: 'colour-grading',
    video: '/videos/services/colour-grading.mp4',
    number: '02',
    title: 'Colour Grading',
    description:
      'Cinematic color pipelines in DaVinci Resolve. Mood-driven grades that give footage a distinct, filmic identity — from golden-hour warmth to cold thriller palettes.',
  },
  {
    slug: '3d-modeling-rendering',
    video: '/videos/services/3d-modeling.mp4',
    number: '03',
    title: '3D Modeling & Rendering',
    description:
      'Assets, environments, and product renders built in Maya and ZBrush. Modeling, texturing, and lighting handled end to end for stills or motion.',
  },
  {
    slug: 'motion-designing',
    video: '/videos/services/motion-designing.mp4',
    number: '04',
    title: 'Motion Designing',
    description:
      'Titles, kinetic type, and animated graphics in After Effects. Motion that supports the story instead of distracting from it.',
  },
  {
    slug: 'applied-ai-tools',
    video: '/videos/services/applied-ai.mp4',
    number: '05',
    title: 'Applied AI Tools',
    description:
      'Practical AI in the pipeline — faster rotoscoping, upscaling, voice cleanup, and generative assets. Modern tools used with an editor\u2019s judgment.',
  },
]

export const contactEmail = 'kabirrajsinghmavi13@gmail.com'
export const contactPhone = '9988613229'
