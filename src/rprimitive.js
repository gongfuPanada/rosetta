// Rosetta classes start with 'R' so as not to conflict with built-in types

import React from 'react';

// abstract class, don't export
class RPrimitive extends React.Component {
  render() {
    if (this.props.typeTag) {
      return (
        <div className="primitive">
          <div className="typeTag">{this.props.typeTag}</div>
          <div style={this.getStyle()}>{this.renderData()}</div>
        </div>
      );
    } else {
      return (
        <div className="primitive">
          <div style={this.getStyle()}>{this.renderData()}</div>
        </div>
      );
    }
  }

  // override to customize style
  getStyle() {
    if (this.props.customStyle) {
      return this.props.customStyle;
    } else {
      return {
        backgroundColor: 'gray'
      };
    }
  }
}

export class RNumber extends RPrimitive {
  renderData() {
    // d3's formatting functions are good for renderNumberFunc to
    // control how numbers are rendered
    return this.props.renderNumberFunc ?
           this.props.renderNumberFunc(this.props.data) :
           String(this.props.data); // no renderer
  }
}

export class RString extends RPrimitive {
  renderData() {
    // to add quotes and escape characters to keep the string rendered
    // in one single line
    return JSON.stringify(this.props.data);
  }
}

export class RSymbol extends RPrimitive {
  renderData() {
    return this.props.data;
  }
}
