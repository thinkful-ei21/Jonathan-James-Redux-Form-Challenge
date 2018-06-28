import React from 'react';

export default class Input extends React.Component {
  render() {
    const Element = this.props.element || 'input';

    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div className="form-error">{this.props.meta.error}</div>;
    }

    return (
      <div>
        <label htmlFor={this.props.input.name}>
          {this.props.label}
          {error}
        </label>
        <Element
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          element={this.props.element}
          ref={input => (this.input = input)}
        >
          {this.props.children}
        </Element>
      </div>
    );
  }
}
