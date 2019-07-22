#! /usr/bin/env bash

SLACK_RESOURCES_DIR="/Applications/Slack.app/Contents/Resources"

SLACK_FILE_PATH="${SLACK_RESOURCES_DIR}/app.asar.unpacked/dist/ssb-interop.bundle.js"

EVENT_LISTENER="slack_dark_theme.js"

THEME_FILE_PATH="https://raw.githubusercontent.com/strangelights/slack_dark_theme/master/slack_dark_theme.css"

# Local Settings file if app downloaded from Slack website
SLACK_DIRECT_LOCAL_SETTINGS=~/Library/Application\ Support/Slack/local-settings.json

# Local Settings file if app downloaded from Mac App Store
SLACK_STORE_LOCAL_SETTINGS=~/Library/Containers/com.tinyspeck.slackmacgap/Data/Library/Application\ Support/Slack/local-settings.json

echo "Initializing Slack dark theme... "
echo "You may be prompted to enter your user password."

# Update Local Settings file to suppress error if shell script is re-ran
if [[ -f $SLACK_DIRECT_LOCAL_SETTINGS ]]; then sed -i "" 's/"bootSonic":"once"/"bootSonic":"never"/g' "$SLACK_DIRECT_LOCAL_SETTINGS"; fi

if [[ -f $SLACK_STORE_LOCAL_SETTINGS ]]; then sudo sed -i "" 's/"bootSonic":"unset"/"bootSonic":"never"/g' "$SLACK_STORE_LOCAL_SETTINGS"; fi

# Pass an "-u" flag to skip un/repacking steps and only update css file
UPDATE_ONLY="false"
if [[ "$1" == "-u" ]]; then 
    UPDATE_ONLY="true"; 
fi

if [[ "$UPDATE_ONLY" == "false" ]]; then
    # Unpack Slack asar bundle
    sudo npx asar extract ${SLACK_RESOURCES_DIR}/app.asar ${SLACK_RESOURCES_DIR}/app.asar.unpacked

    # Add JS Code to Slack
    sudo tee -a "$SLACK_FILE_PATH" > /dev/null < $EVENT_LISTENER

    # Insert the CSS File Location in JS
    sudo sed -i -e s@DARK_THEME_URL@$THEME_FILE_PATH@g $SLACK_FILE_PATH

    # Repack Slack asar bundle
    sudo npx asar pack ${SLACK_RESOURCES_DIR}/app.asar.unpacked ${SLACK_RESOURCES_DIR}/app.asar

    echo "Applying dark theme. Restarting slack..."
fi

if [[ "$UPDATE_ONLY" == "true" ]]; then
    echo "Update flag is not currently live. "
    # echo "Applying style updates. Restarting slack..."
    # TO DO:
    # Copy CSS to Slack Folder
    # sudo cp -af slack_dark_theme.css "$THEME_FILE_PATH"
fi  

# Close Slack
osascript -e 'tell application "Slack" to quit'
sleep 3

# Relaunch Slack 
open -a "Slack"