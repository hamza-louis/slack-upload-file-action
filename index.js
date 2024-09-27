const core = require('@actions/core');
const github = require('@actions/github');
const { WebClient } = require('@slack/web-api');

const token = core.getInput('slack_app_token');
const web = new WebClient(token);

async function uploadFile() {
    try {
      const slack_file_path = core.getInput('slack_file_path');
      const slack_channel_id = core.getInput('slack_channel_id');
      const slack_file_upload_initial_comment = core.getInput('slack_file_upload_initial_comment');
      const slack_file_upload_filename = core.getInput('slack_file_upload_filename');
      const result = await web.filesUploadV2({
        channel_id: slack_channel_id,
        initial_comment: slack_file_upload_initial_comment,
        file: slack_file_path,
        filename: slack_file_upload_filename,
      });
      core.setOutput("result", result);
      console.log(`The File ${slack_file_upload_filename} has been uploaded successfully:`, result);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }

uploadFile();
