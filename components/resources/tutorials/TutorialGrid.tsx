'use client';

import { TutorialCard, Tutorial } from './TutorialCard';
import { avatars, thumbnails } from '@/lib/placeholders';

// Mock tutorial data
const mockTutorials: Tutorial[] = [
  {
    id: 1,
    title: 'Building a Modern Dashboard with Next.js and TailwindCSS',
    description: 'Learn how to create a responsive admin dashboard with real-time data visualization and dark mode support.',
    thumbnail: thumbnails.dashboard,
    duration: 45,
    difficulty: 'intermediate',
    author: {
      name: 'Sarah Chen',
      avatar: avatars.sarah,
      role: 'Senior Frontend Developer'
    },
    techStack: [
      { name: 'Next.js', color: '#000000' },
      { name: 'TailwindCSS', color: '#06B6D4' },
      { name: 'React Query', color: '#FF4154' }
    ],
    videoUrl: '/tutorials/dashboard-video'
  },
  {
    id: 2,
    title: 'Getting Started with Template Customization',
    description: 'A beginner-friendly guide to customizing our templates and making them your own.',
    thumbnail: thumbnails.customization,
    duration: 25,
    difficulty: 'beginner',
    author: {
      name: 'Mike Johnson',
      avatar: avatars.mike,
      role: 'Developer Advocate'
    },
    techStack: [
      { name: 'HTML', color: '#E34F26' },
      { name: 'CSS', color: '#1572B6' },
      { name: 'JavaScript', color: '#F7DF1E' }
    ],
    videoUrl: '/tutorials/customization-video'
  },
  {
    id: 3,
    title: 'Advanced Animation Techniques with Framer Motion',
    description: 'Master complex animations and transitions to create engaging user experiences.',
    thumbnail: thumbnails.animations,
    duration: 60,
    difficulty: 'advanced',
    author: {
      name: 'Lisa Taylor',
      avatar: avatars.lisa,
      role: 'UI/UX Engineer'
    },
    techStack: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Framer Motion', color: '#FF0055' },
      { name: 'TypeScript', color: '#3178C6' }
    ],
    videoUrl: '/tutorials/animations-video'
  },
  {
    id: 4,
    title: 'Implementing Authentication in Next.js Applications',
    description: 'Learn how to add secure authentication to your Next.js applications using NextAuth.js.',
    thumbnail: thumbnails.auth,
    duration: 35,
    difficulty: 'intermediate',
    author: {
      name: 'Alex Rivera',
      avatar: avatars.alex,
      role: 'Full Stack Developer'
    },
    techStack: [
      { name: 'Next.js', color: '#000000' },
      { name: 'NextAuth.js', color: '#2F855A' },
      { name: 'Prisma', color: '#2D3748' }
    ],
    videoUrl: '/tutorials/auth-video'
  }
];

export function TutorialGrid() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {mockTutorials.map((tutorial, index) => (
          <TutorialCard
            key={tutorial.id}
            tutorial={tutorial}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
