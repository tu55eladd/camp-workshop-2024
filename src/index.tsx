/* @refresh reload */
import './index.css';

import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import App from './app';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

import('./mocks/browser').then(({ worker }) => {
  return worker.start()
  /*
  worker.start({
      serviceWorker: {
        url: "/public/mockServiceWorker.js",
        options: {
          scope: '/asdsa/asdas'
        }
      },
      onUnhandledRequest: (req, print) => {
        print.warning();
      },
    })
    */
}).then(() => {
    render(
        () => (
            <Router>
                <App />
            </Router>
        ),
        root,
    );
})

