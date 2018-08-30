

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

       ts-message.active:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply):not(.show_broadcast_indicator), ts-message.message--focus:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply):not(.show_broadcast_indicator), ts-message:hover:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply):not(.show_broadcast_indicator){
          background-color: #222222 !important;
       }

       ts-thread .view_all_replies_container:hover {
          background-color: #222222 !important;
      }

      .c-search_autocomplete {         
          background-color: #222222 !important;  
      }

      .c-search_autocomplete footer {
          background-color: #222222 !important;  
      }

      .c-search__input_box {
          background-color: #363636 !important;  
      }

      .dense_theme #reply_container.upload_in_threads .inline_message_input_container, .dense_theme #reply_container.upload_in_threads .reply_container_info, .light_theme #reply_container.upload_in_threads .inline_message_input_container, .light_theme #reply_container.upload_in_threads .reply_container_info{
          background-color: #222222 !important;
      }

      #threads_msgs .inline_message_input_container.with_file_upload .ql-container {
            background-color: #222222 !important;
      }

      #threads_msgs .inline_message_input_container.with_file_upload {
               background-color: #222222 !important;
      }

      .menu ul li a:not(.inline_menu_link) {
            color: #e6e6e6 !important;
      }
      .c-search_autocomplete__suggestion_item {
           color: #e6e6e6 !important;
      }
      .c-search_autocomplete__suggestion_item .token {
            color: #e6e6e6 !important;
      }
      .c-search__view {
            background-color: #363636 !important;
      }
      .c-tabs__tab_menu {
            background-color: #363636 !important;
      }
      .c-search__input_and_close {
        background-color: #363636 !important;
        border-bottom: 1px solid #545454; !important;
      }
      .c-search_message__body {
        color: #e6e6e6 !important;
      }
      .p-search_filter__title_text {
        background-color: #363636 !important;
      }
      .c-message_group {
        background-color: #222222 !important;
        border-color: #222222 !important;
      }
      .c-search_autocomplete header {
          margin-top: 0px !important;
      }

     `;
     $("<style></style>").appendTo('head').html(css);
   }
 });
});

 /*------------End Script------------*/
