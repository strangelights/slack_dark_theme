

# A Minimalist Dark Theme For the Slack Desktop App

Copy the script within the slack_dark_theme.js file and append it to the bottom of /Applications/Slack.app/Contents/Resources/app.asar.unpacked/src/static/ssb-interop.js, beneath the existing code contained within the file, then restart Slack.

**QUICKTIP:** In Finder (Mac), press Shift + Command + G and paste in the above path into the field and press Go.

**NOTE:** When Slack updates, it's not uncommon for this file to be changed, requiring that the above process be repeated.

If sidebar customization is your thing, try sidebar colors: `#363636,#444A47,#D39B46,#FFFFFF,#434745,#FFFFFF,#99D04A,#DB6668`

While not necessary for this process, to enable Slack's developer menu enter the following via Terminal: `launchctl setenv SLACK_DEVELOPER_MENU true`, then restart Slack.

Acknowledgements:
This theme builds on the excellent theme created by [@laCour](https://github.com/laCour/) available here: https://github.com/laCour/slack-night-mode
