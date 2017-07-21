app.controller('cntrl', function ($rootScope, $scope, $http) {

    $scope.textToClassify = undefined;
    $scope.chat = [];
    $scope.method = 'POST';
    $scope.url = 'https://watson-api-explorer.mybluemix.net/conversation/api/v1/workspaces/780b266b-dbc4-48fb-b1cc-d5233f8a56f3/message?version=2017-02-03';
   

    $scope.queryClassify = function () {
        $scope.response = null;
        $scope.data = {
            "input": {
                "text": $scope.textToClassify
            },
            "context": {
                "conversation_id": "62a0c55f-a833-4ca5-aaee-9f0d3ccf875b",
                "system": {
                    "dialog_stack": [
                        {
                            "dialog_node": "root"
                        }
                    ],
                    "dialog_turn_counter": 1,
                    "dialog_request_counter": 1
                }
            },
            "alternate_intents": true
        }

        // Chat message push into chatbox
        $scope.chat.push($scope.textToClassify);

        $scope.textToClassify = "";
        $http({
            method: $scope.method,
            url: $scope.url,
            data: $scope.data,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic OTk3NTc1NzktOGJlNy00ZDFjLWFkZDYtNWE3YzRlZmE2ZTg2Om5hWDhPU0w2SFNYZg==',
            },
        }).
        then(function (response) {
            $scope.status = response.status;
            $scope.data = response.data;
            console.log($scope.status);
            console.log("$scope.data==>", $scope.data);
            console.log("Intents==>", $scope.data.intents);
            $scope.intents = $scope.data.intents;
            //            $scope.entity = $scope.data.entities;
            //            $scope.input_1 = $scope.data.input;
            //            $scope.output_1 = $scope.data.output.text[0];
            //            console.info('output', $scope.output_1);
            //            $scope.context_1 = $scope.data.context;
            if ($scope.intents[0].intent == "greeting") {
                $scope.getAnswer = false;
            } else {
                $scope.servercall($scope.intents[0].intent)
                $scope.getAnswer = true;
            }


        }, function (response) {
            $scope.data = response.data || 'Request failed';
            $scope.status = response.status;
            console.log($scope.status);
        });

    }


   