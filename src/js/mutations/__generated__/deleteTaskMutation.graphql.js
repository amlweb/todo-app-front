/**
 * @flow
 * @relayHash c7d59608d18a5b63e527381b32ef829b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteTaskMutationVariables = {|
  _id?: ?string
|};
export type deleteTaskMutationResponse = {|
  +deleteTask: ?{|
    +_id: ?string,
    +title: ?string,
    +content: ?string,
  |}
|};
export type deleteTaskMutation = {|
  variables: deleteTaskMutationVariables,
  response: deleteTaskMutationResponse,
|};
*/


/*
mutation deleteTaskMutation(
  $_id: ID
) {
  deleteTask(_id: $_id) {
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
    "name": "_id",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteTask",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "_id"
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
    "name": "deleteTaskMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "deleteTaskMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "deleteTaskMutation",
    "id": null,
    "text": "mutation deleteTaskMutation(\n  $_id: ID\n) {\n  deleteTask(_id: $_id) {\n    _id\n    title\n    content\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'de87c186cdeb909eb2a07ef6b2d3cec3';

module.exports = node;
