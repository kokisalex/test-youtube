import {compose, unapply, partial} from 'ramda';

export default compose(unapply, partial);