'use client';
import { usePathname } from 'next/navigation';

export function useIsPathActive(targetPath: string): boolean {
    const currentPath = usePathname();
    return currentPath === targetPath;
}
