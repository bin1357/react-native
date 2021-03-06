/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Footer
 */

var React = require('React');

function getGitHubPath(path) {
  return 'https://github.com/egeshi/react-native/blob/master/' + path;
}

var Footer = React.createClass({
  render: function() {
    return (
      <p className="edit-page-block">
        Вы можете <a target="_blank" href={getGitHubPath(this.props.path)}>отредактировать перевод на GitHub</a> и создать pull request!
      </p>
    );
  }
});

module.exports = Footer;
