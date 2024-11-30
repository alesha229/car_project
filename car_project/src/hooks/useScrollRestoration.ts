import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SCROLL_KEY = 'scroll_positions';

// Загрузка сохраненных позиций
const loadScrollPositions = (): Record<string, number> => {
  try {
    const saved = localStorage.getItem(SCROLL_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
};

// Сохранение позиций
const saveScrollPositions = (positions: Record<string, number>) => {
  try {
    localStorage.setItem(SCROLL_KEY, JSON.stringify(positions));
  } catch (error) {
    console.warn('Failed to save scroll positions:', error);
  }
};

export const useScrollRestoration = () => {
  const location = useLocation();
  const positions = loadScrollPositions();

  // Сохраняем позицию при закрытии/перезагрузке страницы
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Не сохраняем для главной страницы
      if (location.pathname === '/') return;
      
      positions[location.pathname] = window.scrollY;
      saveScrollPositions(positions);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [location.pathname]);

  // Обработка перехода между страницами
  useEffect(() => {
    // Сохраняем текущую позицию при уходе со страницы
    return () => {
      // Не сохраняем для главной страницы
      if (location.pathname === '/') return;

      positions[location.pathname] = window.scrollY;
      saveScrollPositions(positions);
    };
  }, [location.pathname]);

  // Восстанавливаем позицию при входе на страницу
  useEffect(() => {
    const timer = setTimeout(() => {
      // Для главной страницы всегда скролл вверх
      if (location.pathname === '/') {
        window.scrollTo(0, 0);
        return;
      }

      // Если есть сохраненная позиция - восстанавливаем её
      if (positions[location.pathname]) {
        window.scrollTo(0, positions[location.pathname]);
      } else {
        // Если позиция не сохранена - скролл вверх
        window.scrollTo(0, 0);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);
};
