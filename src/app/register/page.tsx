import {
  Center,
  Box,
  TextInput,
  PasswordInput,
  Button,
  Paper,
  Stack,
  Title,
  Checkbox,
  Text,
  Anchor,
} from "@mantine/core";
import Link from "next/link";

export default function Register() {
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
            Register
          </Title>
          <TextInput
            label='Username'
            placeholder='Your username'
            required
          />
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
          <PasswordInput
            label='Repeat Password'
            placeholder='Repeat your password'
            required
          />
          <Checkbox
            label='Remember me'
            mt='sm'
          />
          <Button
            fullWidth
            mt='md'
            color='dark'>
            Register
          </Button>
          <Text
            ta='center'
            size='sm'
            mt='md'>
            Already have an account?{" "}
            <Anchor
              component={Link}
              href='/login'
              c='dark'>
              Login here
            </Anchor>
          </Text>
        </Stack>
      </Paper>
    </Center>
  );
}
