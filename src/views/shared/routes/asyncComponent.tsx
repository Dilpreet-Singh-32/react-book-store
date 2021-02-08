import React, { Component } from 'react';

type DynamicImport = () => Promise<{
  default: React.ComponentType<any>;
}>;

interface AsyncComponentState {
  component: React.ComponentType<any> | null;
}

export const asyncComponent = (importComponent: DynamicImport) => {
  return class extends Component<any, any> {
    state: AsyncComponentState = {
      component: null,
    };

    componentDidMount() {
      importComponent().then(cmp => {
        this.setState({ component: cmp.default });
      });
    }

    render() {
      const C: React.ComponentType<any> | null = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
