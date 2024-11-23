import dayjs from 'dayjs';
import 'moment/locale/ar';
import TextHelper from './TextHelper';
import mrvLogs from './mrvLogs';

export default {
  _isToday(date) {
    var isToday = require('dayjs/plugin/isToday');

    dayjs.extend(isToday);

    return dayjs(date)?.isToday();
  },
  _isYesterday(date) {
    var isYesterday = require('dayjs/plugin/isYesterday');

    dayjs.extend(isYesterday);

    return dayjs(date).isYesterday(); // true
  },
  _fromNow(date) {
    var relativeTime = require('dayjs/plugin/relativeTime');
    dayjs.extend(relativeTime);
    return dayjs(date).fromNow();
  },

  _formatDate(txt) {
    return !dayjs(txt).isValid() ? txt : dayjs(txt)?.format('MMM DD YYYY');
  },

  _dateToPersian(txt) {
    try {
      const date = !!txt ? new Date(txt) : new Date();

      return {
        InEnglish: new Intl.DateTimeFormat('en-u-ca-persian', {
          dateStyle: 'full',
        }).format(date),
        InPersian: new Intl.DateTimeFormat('fa-u-ca-persian', {
          dateStyle: 'short',
          day: '2-digit',
        }).format(date),
        // +          ' ' +          new Intl.DateTimeFormat('fa-u-ca-persian', { weekday: 'long' }).format(date)
        InPersianLatinNumbers: new Intl.DateTimeFormat(
          'fa-u-ca-persian-nu-latn',
          {dateStyle: 'full'},
        ).format(date),
        InArabic: new Intl.DateTimeFormat('ar-u-ca-persian', {
          dateStyle: 'full',
        }).format(date),
      };
    } catch (error) {
      return {};
    }
  },

  _formatDateWithDayName(txt) {
    return !dayjs(txt).isValid() ? txt : dayjs(txt)?.format('ddd, MMM DD YYYY');
  },
  _formatTime(txt) {
    return !dayjs(txt).isValid() ? txt : dayjs(txt).format('hh:mm A');
  },

  _dateTitle(d1, d2) {
    d2 = !TextHelper.empty(d2)
      ? ` - ${this._formatTime(d2)} (${this._dateDifference(d1, d2)} min)`
      : '';

    return `${this._formatTime(d1)} ${d2}`;
  },

  _dateDifference(d1, d2) {
    // mrvTxtTest.log(d1, d2);
    d1 = dayjs(d1);
    d2 = dayjs(d2);
    // return d1.diff(d2);

    if (!d1.isValid() || !d2.isValid()) {
      return -1;
    } else {
      return d1.diff(d2, 'd');
    }
  },
  _isAfterByDay(d1, d2) {
    return this._dateDifference(d1, d2) > 0;
  },
  _isAfterOrSameByDay(d1, d2) {
    return this._dateDifference(d1, d2) >= 0;
  },
  _isBeforeByDay(d1, d2) {
    return this._dateDifference(d1, d2) < 0;
  },
  _isBeforeOrSameByDay(d1, d2) {
    return this._dateDifference(d1, d2) <= 0;
  },
  _dateDifferenceMiliSec(d1, d2) {
    // mrvTxtTest.log(d1, d2);
    d1 = dayjs(d1);
    d2 = dayjs(d2);
    // return d1.diff(d2);
    return Math.floor(d1.diff(d2));
  },
  _dateDifferenceSec(d1, d2) {
    // mrvTxtTest.log(d1, d2);
    d1 = dayjs(d1);
    d2 = dayjs(d2);
    // return d1.diff(d2);
    return Math.floor(d1.diff(d2, 's'));
  },
  _dateDifferenceHour(d1, d2) {
    // mrvTxtTest.log(d1, d2);
    d1 = dayjs(d1);
    d2 = dayjs(d2);
    // return d1.diff(d2);
    return Math.floor(d1.diff(d2, 'h'));
  },
  numberTextStandard(n, len) {
    const o = len - n.toString()?.length;
    if (o < 0) {
      return '';
    }

    const os = '0'.repeat(o);
    return os + n;
  },

  _formatter(t) {
    return this.numberTextStandard(t, 2);
  },

  _timeCalculation(time) {
    const hour = Math.floor(time / 3600);
    const min = Math.floor((time - hour * 3600) / 60);
    const sec = time - (hour * 3600 + min * 60);

    return {
      hour: this._formatter(hour) || '00',
      min: this._formatter(min) || '00',
      sec: this._formatter(sec) || '00',
      total:
        this._formatter(hour) +
        'h:' +
        this._formatter(min) +
        'm:' +
        this._formatter(sec) +
        's',
    };
  },

  today() {
    var firstDay = new Date(); //.toUTCString();
    var lastDay = new Date(); //.toUTCString();
    return {firstDay, lastDay};
  },

  thisWeek() {
    var curr = new Date(); // get current date
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6

    var firstDay = new Date(curr.setDate(first)); //.toUTCString();
    var lastDay = new Date(curr.setDate(last)); //.toUTCString();
    return {firstDay, lastDay};
  },

  thisMonth() {
    var date = new Date(),
      y = date.getFullYear(),
      m = date.getMonth();
    var firstDay = new Date(y, m, 2);
    var lastDay = new Date(y, m + 1, 1);
    return {firstDay, lastDay};
  },

  lastMonth() {
    var date = new Date(),
      y = date.getFullYear(),
      m = date.getMonth() - 1;
    var firstDay = new Date(y, m, 2);
    var lastDay = new Date(y, m + 1, 1);
    return {firstDay, lastDay};
  },
  nextDay(day) {
    var day = new Date(day);
    console.log(day); // Apr 30 2000

    var nextDay = new Date(day);
    nextDay.setDate(day.getDate() + 1);
    return nextDay.toString();
  },
};
