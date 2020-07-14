import Moment from 'moment';

export const formatDate = (content) => {
  require('moment/locale/id');
  Moment.locale('id');

  const text = Moment(content).startOf('minutes').fromNow();
  return text;
};
