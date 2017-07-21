var watson = require('watson-developer-cloud/conversation/v1');

var conversation = watson.conversation({
   username: '843b8244-6627-4e1b-986d-280447c83b8f', // replace with username from service key
  password: 'AfMbL1crgCQv', // replace with password from service key
  path: { workspace_id: '1af94458-95d2-42ec-a9c7-49b140687906' }, // replace with workspace ID
  version_date: '2017-05-26'
});

// Replace with the context obtained from the initial request
var context = {};

conversation.message({
  workspace_id: '1af94458-95d2-42ec-a9c7-49b140687906',
  input: {'text': ''},
  context: context
},  function(err, response) {
  if (err)
    console.log('error:', err);
  else
    console.log(JSON.stringify(response, null, 2));
});