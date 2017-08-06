import React, { Component } from 'react';
import { Classes, Tooltip, Tree } from '@blueprintjs/core';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';

const tooltipLabel = (
  <Tooltip content="An eye!">
    <span className="pt-icon-standard pt-icon-eye-open" />
  </Tooltip>
);

const longLabel =
  'Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.';

export default class TreeExample extends Component {
  constructor() {
    super();
    this.state = {
      nodes: [
        {
          hasCaret: false,
          iconName: 'dashboard',
          label: (
            <NavLink to="/" activeClassName="pt-tree-node-selected" exact>
              <FormattedMessage id="label.dashboard" />
            </NavLink>
          ),
        },
        {
          hasCaret: false,
          iconName: 'people',
          label: (
            <NavLink
              to="/clients"
              activeClassName="pt-tree-node-selected"
              exact
            >
              <FormattedMessage id="label.clients" />
            </NavLink>
          ),
        },
        {
          iconName: 'folder-close',
          isExpanded: true,
          label: <Tooltip content="I'm a folder <3">Folder 1</Tooltip>,
          childNodes: [
            {
              iconName: 'document',
              label: 'Item 0',
              secondaryLabel: tooltipLabel,
            },
            { iconName: 'pt-icon-tag', label: longLabel },
            {
              hasCaret: true,
              iconName: 'pt-icon-folder-close',
              label: <Tooltip content="foo">Folder 2</Tooltip>,
              childNodes: [
                { label: 'No-Icon Item' },
                { iconName: 'pt-icon-tag', label: 'Item 1' },
                {
                  hasCaret: true,
                  iconName: 'pt-icon-folder-close',
                  label: 'Folder 3',
                  childNodes: [
                    { iconName: 'document', label: 'Item 0' },
                    { iconName: 'pt-icon-tag', label: 'Item 1' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
    let i = 0;
    this.forEachNode(this.state.nodes, n => (n.id = i++));
  }

  handleNodeClick = (nodeData, _nodePath, e) => {
    const originallySelected = nodeData.isSelected;
    if (!e.shiftKey) {
      this.forEachNode(this.state.nodes, n => (n.isSelected = false));
    }
    nodeData.isSelected =
      originallySelected == null ? true : !originallySelected;
    this.setState(this.state);
  };

  handleNodeCollapse = nodeData => {
    nodeData.isExpanded = false;
    this.setState(this.state);
  };

  handleNodeExpand = nodeData => {
    nodeData.isExpanded = true;
    this.setState(this.state);
  };

  forEachNode(nodes, callback) {
    if (nodes == null) {
      return;
    }

    for (const node of nodes) {
      callback(node);
      this.forEachNode(node.childNodes, callback);
    }
  }

  render() {
    return (
      <Tree
        contents={this.state.nodes}
        onNodeClick={this.handleNodeClick}
        onNodeCollapse={this.handleNodeCollapse}
        onNodeExpand={this.handleNodeExpand}
        className={Classes.ELEVATION_0}
      />
    );
  }
}
