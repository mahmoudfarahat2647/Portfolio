'use client';

import { motion } from 'framer-motion';
import { Clock, Play, BarChart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface TutorialAuthor {
  name: string;
  avatar: string;
  role: string;
}

interface TechStack {
  name: string;
  color: string;
}

export interface Tutorial {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  author: TutorialAuthor;
  techStack: TechStack[];
  videoUrl?: string;
}

interface TutorialCardProps {
  tutorial: Tutorial;
  index: number;
}

const difficultyConfig = {
  beginner: {
    color: 'bg-emerald-100 text-emerald-800',
    label: 'Beginner',
  },
  intermediate: {
    color: 'bg-amber-100 text-amber-800',
    label: 'Intermediate',
  },
  advanced: {
    color: 'bg-red-100 text-red-800',
    label: 'Advanced',
  },
};

export function TutorialCard({ tutorial, index }: TutorialCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video">
        <Image
          src={tutorial.thumbnail}
          alt={tutorial.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
            >
              <Play className="w-8 h-8 text-white fill-current" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 mb-3 text-sm">
          {/* Duration */}
          <div className="flex items-center gap-1 text-gray-500">
            <Clock className="w-4 h-4" />
            {tutorial.duration} min
          </div>

          {/* Difficulty */}
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${difficultyConfig[tutorial.difficulty].color}`}>
            <BarChart className="w-3 h-3" />
            {difficultyConfig[tutorial.difficulty].label}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {tutorial.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">
          {tutorial.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tutorial.techStack.map((tech) => (
            <span
              key={tech.name}
              className="text-sm px-2 py-1 rounded"
              style={{
                backgroundColor: `${tech.color}20`,
                color: tech.color,
              }}
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* Author */}
        <div className="flex items-center gap-3">
          <Image
            src={tutorial.author.avatar}
            alt={tutorial.author.name}
            width={32}
            height={32}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-900">
              {tutorial.author.name}
            </p>
            <p className="text-sm text-gray-500">
              {tutorial.author.role}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
