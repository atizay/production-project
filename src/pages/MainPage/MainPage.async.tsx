import { lazy } from 'react';

// нужно делать так
// export const MainPageAsync = lazy(() => import('./AboutPage'));


// НА РЕАЛЬНОМ ПРОЕКТЕ ТАК ДЕЛАТЬ НЕ НУЖНО! Это только для курса, чтобы показать как асинхронно подгружаются файлы
export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 1500)
}));