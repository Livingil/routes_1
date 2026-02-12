import { Button, Container, Stack, Text, Title } from "@mantine/core";
import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container size="sm" py="xl">
          <Stack gap="md">
            <Title order={2}>Что-то пошло не так</Title>
            <Text c="red">
              {this.state.error ? this.state.error.toString() : "Unknown error"}
            </Text>
            <Button
              variant="light"
              onClick={() => this.setState({ hasError: false, error: null })}
            >
              Попробовать снова
            </Button>
          </Stack>
        </Container>
      );
    }

    return this.props.children;
  }
}
