import { type FC, lazy } from 'react';
import styles from './App.module.scss';

const Preferences = lazy(() => import('./components/Preferences'));

export const App: FC = () => (
    <>
        <h1>Phasmo Helper</h1>
        <div className={styles['top-flex']}>
            <Preferences />
        </div>
    </>
);

export default App;