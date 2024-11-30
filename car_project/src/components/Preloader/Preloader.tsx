import { useEffect, useState } from 'react';
import mainScreenImg from '../MainSection/img/main-screen.png';
import arrowDownImg from '../MainSection/img/arrow-down.svg';
import './Preloader.scss';

interface PreloaderProps {
  onLoadingComplete: () => void;
}

const Preloader = ({ onLoadingComplete }: PreloaderProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      const fonts = [
        new FontFace('Gilroy-Bold', 'url(/src/assets/fonts/Gilroy/Gilroy-Bold.ttf)'),
        new FontFace('Gilroy-Regular', 'url(/src/assets/fonts/Gilroy/Gilroy-Regular.ttf)'),
        new FontFace('Montserrat-Regular', 'url(/src/assets/fonts/Montserrat/Montserrat-Regular.ttf)'),
        new FontFace('Montserrat-Medium', 'url(/src/assets/fonts/Montserrat/Montserrat-Medium.ttf)'),
        new FontFace('Montserrat-Bold', 'url(/src/assets/fonts/Montserrat/Montserrat-Bold.ttf)')
      ];

      try {
        const loadedFonts = await Promise.all(fonts.map(font => font.load()));
        loadedFonts.forEach(font => document.fonts.add(font));
      } catch (error) {
        console.error('Error loading fonts:', error);
      }
    };

    const checkAndLoadImages = async () => {
      const images = [mainScreenImg, arrowDownImg];
      
      const isImageCached = async (src: string) => {
        try {
          const cache = await caches.open('image-cache');
          const response = await cache.match(src);
          return !!response;
        } catch {
          return false;
        }
      };

      const loadImage = (src: string) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = async () => {
            try {
              const cache = await caches.open('image-cache');
              const response = await fetch(src);
              await cache.put(src, response.clone());
              
              if (img.complete) {
                resolve(img);
              } else {
                img.onload = () => resolve(img);
              }
            } catch (error) {
              console.error('Error caching image:', error);
              resolve(img);
            }
          };
          img.onerror = reject;
          img.src = src;
        });
      };

      try {
        await Promise.all([
          loadFonts(),
          (async () => {
            const cachedStates = await Promise.all(images.map(isImageCached));
            const allCached = cachedStates.every(cached => cached);

            if (!allCached) {
              await Promise.all(images.map(loadImage));
            } else {
              await Promise.all(images.map(src => {
                const img = new Image();
                return new Promise((resolve) => {
                  img.onload = resolve;
                  img.src = src;
                });
              }));
            }
          })()
        ]);

        await new Promise(resolve => setTimeout(resolve, 500));

        setFadeOut(true);
        onLoadingComplete();
        
        setTimeout(() => {
          setRemove(true);
        }, 1000);
      } catch (error) {
        console.error('Error handling assets:', error);
        setFadeOut(true);
        onLoadingComplete();
        setTimeout(() => {
          setRemove(true);
        }, 1000);
      }
    };

    checkAndLoadImages();
  }, [onLoadingComplete]);

  if (remove) {
    return null;
  }

  return (
    <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader__spinner"></div>
    </div>
  );
};

export default Preloader;
