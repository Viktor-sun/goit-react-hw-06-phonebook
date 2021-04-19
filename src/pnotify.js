import { alert, error, success, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

// eslint-disable-next-line
export default {
  sucess(text) {
    success({ title: 'Success!', text, delay: 1500 });
  },
  error(text) {
    error({ title: 'Error', text });
  },
  alert(text) {
    alert({
      title: 'Warning!',
      text,
    });
  },
};
