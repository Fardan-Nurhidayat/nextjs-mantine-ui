import {
  Center,
  TextInput,
  PasswordInput,
  Button,
  Paper,
  Stack,
  Title,
  Text,
  Anchor,
} from "@mantine/core";
import Link from "next/link";

export default function Login() {
  return (
    <Center
      h='100vh'
      bg='#f8f9fa'>
      <Paper
        shadow='md'
        p='xl'
        withBorder
        radius='md'
        style={{
          borderColor: "black",
          minWidth: 350,
          background: "white",
        }}>
        <Stack>
          <Title
            order={2}
            ta='center'
            mb='md'>
            Login
          </Title>
          <TextInput
            label='Email'
            placeholder='you@email.com'
            required
          />
          <PasswordInput
            label='Password'
            placeholder='Your password'
            required
          />
          <Button
            fullWidth
            mt='md'
            color='dark'>
            Login
          </Button>
          <Text
            ta='center'
            size='sm'
            mt='md'>
            Don't have an account?{" "}
            <Anchor
              component={Link}
              href='/register'
              c='dark'>
              Register here
            </Anchor>
          </Text>
        </Stack>
      </Paper>
    </Center>
  );
}
