import { lazy } from 'react';

// нужно делать так
// export const AboutPageAsync = lazy(() => import('./AboutPage'));


// НА РЕАЛЬНОМ ПРОЕКТЕ ТАК ДЕЛАТЬ НЕ НУЖНО! Это только для курса, чтобы показать как асинхронно подгружаются файлы
export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}));