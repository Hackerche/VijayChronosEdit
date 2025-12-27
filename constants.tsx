
import React from 'react';
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'First To Fly',
    client: 'Instagram Creator',
    category: 'Social Media',
    duration: '00:45',
    thumbnail: 'https://files.catbox.moe/qmfndb.jpg',
    description: 'Fast-paced lifestyle edit with trending transitions and text overlays. Focused on high-retention storytelling.',
    tags: ['CapCut', 'Motion', 'Trending'],
    videoUrl: 'https://streamable.com/vfre2a'
  },
  {
    id: 'p2',
    title: 'Domestic Violence',
    client: 'Awareness Campaign',
    category: 'Podcast',
    duration: '00:15',
    thumbnail: 'https://files.catbox.moe/n6et38.jpg',
    description: 'A powerful, emotion-driven edit designed to raise awareness about domestic violence, using subtle transitions, dramatic pacing, and focused visual emphasis to reinforce the message.',
    tags: ['Awareness', 'DomesticViolence', 'PodcastEdit', 'SocialImpact'],
    videoUrl: 'https://streamable.com/f2mf8s'
  },
  {
    id: 'p3',
    title: 'Ethnic Clothing',
    client: 'Local Boutique',
    category: 'Commercial',
    duration: '00:30',
    thumbnail: 'https://files.catbox.moe/f3h9b0.jpg',
    description: 'A culturally rich and elegant showcase highlighting traditional ethnic wear with warm tones, graceful motion, and refined text accents to emphasize craftsmanship and heritage.',
    tags: ['EthnicWear', 'Traditional', 'Fashion', 'Cultural', 'ProductShowcase'],
    videoUrl: 'https://streamable.com/w5kanl'
  },
];

export const TIMELINE_MARKERS = Array.from({ length: 20 }, (_, i) => `${(i * 5).toString().padStart(2, '0')}:00`);
