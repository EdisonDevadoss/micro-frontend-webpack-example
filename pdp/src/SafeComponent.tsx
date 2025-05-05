import React, { ReactNode } from 'react';

interface SafeComponentProps {
  children: ReactNode;
}

interface SafeComponentState {
  hasError: boolean;
}

export default class SafeComponent extends React.Component<
  SafeComponentProps,
  SafeComponentState
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): SafeComponentState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    // Optional: log error to an error reporting service
    console.log('Caught error in SafeComponent:', {
      message: error.message,
      stack: error.stack,
      componentStack: info.componentStack
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}
