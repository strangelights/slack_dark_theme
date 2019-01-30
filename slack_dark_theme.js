
/* ------------ BEGIN DARK THEME ------------ */
// Everything above this line should be part of the original ssb-interop.js file DO NOT REMOVE IT. 
// Everything below is safe to edit as needed.

document.addEventListener("DOMContentLoaded", function() {
  $.ajax({
    url:
      "https://cdn.rawgit.com/laCour/slack-night-mode/master/css/raw/black.css",
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
        #client_body:not(.onboarding):not(.feature_global_nav_layout):before {
          background-color: #222222 !important;
        }
        .reply_input_container .inline_message_input_container .ql-container {
          border: 1px solid #222222 !important;
        }
        #threads_msgs .inline_message_input_container.with_file_upload.focus, #threads_msgs .inline_message_input_container.with_file_upload:active, #threads_msgs .inline_message_input_container.with_file_upload:hover {
          border-color: #363636 !important;
        }
        .modal .ql-editor p {
          color: #e6e6e6 !important;
        }
        .c-dialog__header {
          background: none !important;  
        }
        .c-dialog__footer {
          background: none !important;  
        }
        .c-dialog__title {
          color: #e6e6e6 !important;
        }
        .ReactModal__Overlay--after-open .c-dialog__content {
          background-color: #363636 !important;
        }
        .p-threads_footer__input--legacy .p-message_input_field {
          background-color: #222222 !important;
        }
        .p-threads_footer__input--legacy .p-message_input_plus {
          background-color: #222222 !important;
        }
        .p-threads_flexpane__header_channel_name {  
          color: #e6e6e6 !important;
        }
        .p-threads_flexpane__header_permalink:focus, .p-threads_flexpane__header_permalink:hover {
          color: #e6e6e6 !important;
        }  
        .p-threads_footer__input--legacy .p-message_input_field .ql-placeholder {
          color: #e6e6e6 !important;
        }
        #primary_file_button.active, #primary_file_button.focus-ring, #primary_file_button:focus, #primary_file_button:hover {
          border-color: #222222; !important;
        }
        #msg_input:focus + #primary_file_button:not(:hover):not(.active), #msg_input.focus + #primary_file_button:not(:hover):not(.active) {
          border-color: #222222;
        }
        #msg_form #msg_input {
          border-color: #222222; !important;
        }    
      `;
      $("<style></style>")
        .appendTo("head")
        .html(css);
    }
  });
});

/* ------------ END DARK THEME ------------ */
