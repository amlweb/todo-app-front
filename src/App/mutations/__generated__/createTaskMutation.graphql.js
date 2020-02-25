/**
 * @flow
 * @relayHash 04582279667d60315088437bad690fee
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type createTaskMutationVariables = {|
  title?: ?string,
  content?: ?string,
|};
export type createTaskMutationResponse = {|
  +createTask: ?{|
    +_id: ?string,
    +title: ?string,
    +content: ?string,
  |}
|};
export type createTaskMutation = {|
  variables: createTaskMutationVariables,
  response: createTaskMutationResponse,
|};
*/


/*
mutation createTaskMutation(
  $title: String
  $content: String
) {
  createTask(title: $title, content: $content) {
    _id
    title
    content
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "title",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "content",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createTask",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "content",
        "variableName": "content"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      }
    ],
    "concreteType": "Task",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "_id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "content",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "createTaskMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "createTaskMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "createTaskMutation",
    "id": null,
    "text": "mutation createTaskMutation(\n  $title: String\n  $content: String\n) {\n  createTask(title: $title, content: $content) {\n    _id\n    title\n    content\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '156ff3dc3334f1ebce402b5dc25b8bb3';

module.exports = node;
