import app from './app';

const APP_PORT = process.env.PORT || 3000;
const APP_HOST = process.env.HOST || '0.0.0.0';

app.listen(APP_PORT, APP_HOST, () => {
  if (__DEV__) {
    console.log('> in development');
  }

  console.log(`> listening on port ${APP_PORT}`);
});
