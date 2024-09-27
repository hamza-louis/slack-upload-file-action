## Slack Upload File Github Action
> This action can be used to upload a file to a specific Slack channel, this action utilizing the new version of files.upload Slack API documented here -> https://api.slack.com/messaging/files#uploading_files


## Description

Upload a file from within a Github Workflow to a Slack channel



## Inputs

| name | description | required | default |
| --- | --- | --- | --- |
| `slack_file_path` | <p>Path to the file to upload</p> | `true` | `""` |
| `slack_app_token` | <p>Slack token to be used to auth</p> | `true` | `""` |
| `slack_channel_id` | <p>Target Slack channel ID</p> | `true` | `""` |
| `slack_file_upload_initial_comment` | <p>A text to be added to the message</p> | `true` | `""` |
| `slack_file_upload_filename` | <p>The filename with a the proper file extension</p> | `true` | `""` |



## Outputs

| name | description |
| --- | --- |
| `result` | <p>Upload file result from slack</p> |



## Runs

This action is a `node20` action.



## Usage

```yaml
- uses: <project>@<version>
  with:
    slack_file_path:
    # Path to the file to upload
    #
    # Required: true
    # Default: ""

    slack_app_token:
    # Slack token to be used to auth
    #
    # Required: true
    # Default: ""

    slack_channel_id:
    # Target Slack channel ID
    #
    # Required: true
    # Default: ""

    slack_file_upload_initial_comment:
    # A text to be added to the message
    #
    # Required: true
    # Default: ""

    slack_file_upload_filename:
    # The filename with a the proper file extension
    #
    # Required: true
    # Default: ""
```
