import type {Actions} from '@sveltejs/kit';
import {addPeriod} from './add-period';

export {addPeriod} from './add-period';

export const execLogActions: Actions = {
    addPeriod
};
