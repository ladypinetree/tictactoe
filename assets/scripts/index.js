'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const events = require('./auth/events.js');
const gameEvents = require('./gameAPI/events.js');

// adds events and game events
$(() => {
  setAPIOrigin(location, config);
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

// use require without a reference to ensure a file is bundled
require('./assets/scripts/index.js');

// styles
require('./assets/styles/index.scss');

$(() => {
  // TODO add handlers
  events.addHandlers();
  gameEvents.addHandlers();
});
