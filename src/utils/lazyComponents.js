import { lazy } from 'react';

// Lazy load heavy components
export const LazyHome = lazy(() => import('../pages/Home'));
export const LazyAbout = lazy(() => import('../pages/About'));
export const LazyProjects = lazy(() => import('../pages/Projects'));
export const LazySkills = lazy(() => import('../pages/Skills'));
export const LazyContact = lazy(() => import('../pages/Contact'));

// Lazy load 3D components
export const LazyModernBackground = lazy(() => import('../components/ModernBackground'));
export const LazyCard3D = lazy(() => import('../components/Card3D'));
