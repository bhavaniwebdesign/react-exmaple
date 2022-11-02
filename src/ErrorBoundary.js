/* @flow */
import * as React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    return error;
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>Error: An unhandled error occured in React application "</div>
      );
    }

    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
export { ErrorBoundary };
