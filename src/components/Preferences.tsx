import { type FC } from 'react';
import styles from './Preferences.module.scss';

export const Preferences: FC = () => <div>
    <h2>Preferences</h2>
    <form id="preferences">
        <div className={styles.options}>
            <fieldset>
                <label htmlFor="temperature-unit">Temperature unit</label>
                <select id="temperature-unit" name="temperature-unit">
                    <option value="C" selected>Celcius</option>
                    <option value="F">Fahrenheit</option>
                </select>
            </fieldset>
        </div>
    </form>
</div>;

export default Preferences;