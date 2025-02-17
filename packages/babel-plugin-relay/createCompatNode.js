/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

/**
 * Relay Compat transforms graphql definitions into objects with `modern` and
 * `classic` keys, each containing the resulting transforms.
 */
function createCompatNode(
  t: $FlowFixMe,
  modernNode: ?Object,
  classicNode: Object,
): Object {
  return t.objectExpression(
    modernNode != null
      ? [
          t.objectProperty(t.identifier('modern'), modernNode),
          t.objectProperty(t.identifier('classic'), classicNode),
        ]
      : [t.objectProperty(t.identifier('classic'), classicNode)],
  );
}

module.exports = createCompatNode;
