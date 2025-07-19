
import { useEffect } from 'react';

interface PreloadImage {
  src: string;
  priority?: boolean;
}

export const useImagePreloader = (images: PreloadImage[]) => {
  useEffect(() => {
    const preloadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        
        // Optimize Unsplash URLs for faster loading
        if (src.includes('unsplash.com')) {
          const baseUrl = src.split('?')[0];
          img.src = `${baseUrl}?q=80&w=800&auto=format&fit=crop&fm=webp`;
        } else {
          img.src = src;
        }
      });
    };

    // Preload high priority images first
    const highPriorityImages = images.filter(img => img.priority);
    const normalImages = images.filter(img => !img.priority);

    const preloadBatch = async (imageList: PreloadImage[]) => {
      const promises = imageList.map(img => 
        preloadImage(img.src).catch(() => {
          console.warn(`Failed to preload image: ${img.src}`);
        })
      );
      await Promise.allSettled(promises);
    };

    // Preload high priority images immediately
    if (highPriorityImages.length > 0) {
      preloadBatch(highPriorityImages);
    }

    // Preload normal images after a small delay
    if (normalImages.length > 0) {
      setTimeout(() => {
        preloadBatch(normalImages);
      }, 100);
    }
  }, [images]);
};

export const preloadCriticalImages = () => {
  const criticalImages = [
    '/homeheroimage.webp',
    '/Image9.webp',
    '/Telecomms_1.webp',
    '/digitechs_1.webp',
    '/mnmgmts_1.webp'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};
