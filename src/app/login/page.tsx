import {
  Center,
  Box,
  TextInput,
  PasswordInput,
  Button,
  Paper,
  Stack,
  Title,
} from "@mantine/core";

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
        </Stack>
      </Paper>
    </Center>
  );
}
