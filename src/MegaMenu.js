import React, { Component } from "react";
import PropTypes from "prop-types";

import MenuTree from "./MenuTree";
import "normalize.css";
import "./css/mega-menu.css";

const propTypes = {
  nodeList: PropTypes.array.isRequired,
  onNodeClick: PropTypes.func.isRequired,
  itemIdSeperator: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};

class MegaMenu extends Component {
  constructor(props) {
    super(props);
    this.mainContainerRef = React.createRef();
  }

  state = {
    mainContainerRef: null
  };

  handleNodeClick = itemId => {
    this.props.onNodeClick(itemId);
  };

  componentDidMount() {
    this.setState({ mainContainerRef: this.mainContainerRef });
  }

  maxVal = 0;

  traverseNode = (node, depthCount) => {
    let { nodes } = node;
    let nodeLength = nodes ? nodes.length : 0;
    if (nodes && nodeLength) {
      let depth = 0;
      for (let i = 0; i < nodeLength; i++) {
        depth = this.traverseNode(nodes[i], depthCount + 1);
        this.maxVal = this.maxVal < depth ? depth : this.maxVal;
      }
      return this.maxVal;
    } else {
      return depthCount;
    }
  };

  getMaxDepth = nodeList => {
    let maxDepth = 0;
    for (let i = 0; i < nodeList.length; i++) {
      this.maxVal = 0;
      let depth = this.traverseNode(nodeList[i], 0);
      if (depth > maxDepth) {
        maxDepth = depth;
      }
    }
    return maxDepth;
  };

  render() {
    let { nodeList, width, height, itemIdSeperator } = this.props;
    let maxDepth = this.getMaxDepth(nodeList);
    return (
      <div
        ref={this.mainContainerRef}
        style={{ width, height }}
        className="mega-menu-main-container"
      >
        {this.state.mainContainerRef && (
          <MenuTree
            mainContainerRef={this.state.mainContainerRef}
            nodeList={nodeList}
            onNodeSelect={this.handleNodeClick}
            level={1}
            maxDepth={maxDepth}
            itemIdSeperator={itemIdSeperator}
          />
        )}
      </div>
    );
  }
}

MegaMenu.propTypes = propTypes;
MegaMenu.defaultProps = {
  width: "100%",
  height: "100%",
  nodeList: [],
  itemIdSeperator: "/"
};

export default MegaMenu;
