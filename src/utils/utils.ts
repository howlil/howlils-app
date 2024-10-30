'use client';
import { usePathname } from 'next/navigation';

export function isPathActive(targetPath: string): boolean {
    const currentPath = usePathname();
    return currentPath === targetPath;
}
