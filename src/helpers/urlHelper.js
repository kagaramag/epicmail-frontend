import 'dotenv/config';

const { location } = window;
const protocol = location.protocol && location.protocol;
const hostname = location.hostname && location.hostname;
const port = (location.port && `:${location.port}`) || '';

const frontend = {
  appUrl: process.env.APP_URL_FRONTEND,
  herokuUrl: 'https://epicmailbox-frontend.herokuapp.com',
  defaultUrl: `${protocol}//${hostname}${port ? `:${port}` : ''}`
};

const backend = {
  appUrl: process.env.APP_URL_BACKEND,
  defaultUrl: `${protocol}//${hostname}${port ? `:${port}` : ''}`,
  herokuUrl: 'https://epicmailbox.herokuapp.com'
};

export { frontend, backend };
