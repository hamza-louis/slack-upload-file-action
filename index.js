const core = require('@actions/core');
const github = require('@actions/github');
const { WebClient } = require('@slack/web-api');

const token = core.getInput('slack_app_token');
const web = new WebClient(token);

async function uploadFile() {
    try {
      const path = core.getInput('path');
      const channel_id = core.getInput('slack_channel_id');
      const initial_comment = core.getInput('initial_comment');
      const filename = core.getInput('filename');
      const result = await web.filesUploadV2({
        channel_id: channel_id,
        initial_comment: initial_comment,
        file: path,
        filename: filename,
      });
      core.setOutput("result", result);
      console.log(`The File ${file} has been uploaded successfully:`, result);
    } catch (error) {
      console.error(`Error uploading file => ${file}:`, error);
    }
  }

uploadFile();
