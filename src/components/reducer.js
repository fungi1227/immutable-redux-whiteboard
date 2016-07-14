import { List, Map } from 'immutable';

const init = List([]);

export default function reducer(records=init, action) {
  switch(action.type) {
    case 'SEARCH_USER':
      return records.push(Map(action.payload));
    case 'SEARCH_DATE':
      return records.push(Map(action.payload));
    default:
      return records;
  }
}
