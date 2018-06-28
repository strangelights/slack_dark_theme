

 /*------------Start Script------------*/

  const loadSettings = window.loadSettings = assignIn({},
    remote.getGlobal('loadSettings'),
    { windowType: 'webapp' }
  );

  window.perfTimer = assignIn({}, remote.getGlobal('perfTimer'));
  window.perfTimer.PRELOAD_STARTED = preloadStartTime;

  if (!window.perfTimer.isInitialTeamBooted) {
    ipcRenderer.send('SLACK_PRQ_INITIAL_TEAM_BOOTED');
  }

  const resourcePath = path.join(__dirname, '..', '..');
  const mainModule = require.resolve('../ssb/main.ts');
  const isDevMode = loadSettings.devMode && isPrebuilt();

  init(resourcePath, mainModule, !isDevMode);
}

document.addEventListener('DOMContentLoaded', function() {
 $.ajax({
   url: 'https://cdn.rawgit.com/laCour/slack-night-mode/master/css/raw/black.css',
   success: function(css) {
     css += `
       div.c-virtual_list__scroll_container {
           background-color: #222222 !important;
       }
       .p-message_pane .c-message_list:not(.c-virtual_list--scrollbar), .p-message_pane .c-message_list.c-virtual_list--scrollbar > .c-scrollbar__hider {
            z-index: 0;
       }
       div.c-message__content:hover {
           background-color: #222222 !important;
       }

       div.c-message:hover {
           background-color: #222222 !important;
       }
     `;
     $("<style></style>").appendTo('head').html(css);
   }
 });
});

 /*------------End Script------------*/
