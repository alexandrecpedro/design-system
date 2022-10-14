import { Checkbox } from "@radix-ui/react-checkbox";
import axios from "axios";
import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button } from "../components/button/Button";
import { Heading } from "../components/heading/Heading";
import { Text } from "../components/text/Text";
import { TextInput } from "../components/textInput/TextInput";
import { Logo } from "../Logo";

export function SignIn() {
  /** REACT HOOKS **/
  // useState
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  // handleSignIn function
  const handleSignIn = async (event: FormEvent) => {
    event.preventDefault();

    await axios.post('/sessions', {
      email: 'email@example.com',
      password: '12345678'
    });

    setIsUserSignedIn(true);
  }

  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <Logo />

        <Heading size='lg' className='mt-4'>
          Ignite Lab
        </Heading>

        <Text size='lg' className='text-gray-400 mt-1'>
          Log in and start using
        </Text>
      </header>

      <form onSubmit={handleSignIn} className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
        { isUserSignedIn && <Text>Successfully logged in!</Text> }
        <label htmlFor="email" className='flex flex-col gap-3'>
          <Text className='font-semibold'>E-mail Address</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input type='email' id='email' placeholder='Enter your e-mail' />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className='flex flex-col gap-3'>
          <Text className='font-semibold'>Password</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input type='password' id='password' placeholder='******' />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm' className='text-gray-200'>Remind me for 30 days</Text>
        </label>

        <Button type='submit' className='mt-4'>Login to the platform</Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Forgot you password?</a>
        </Text>
        <Text asChild size='sm'>
          <a href="" className='text-gray-400 underline hover:text-gray-200'>Does not have an account? Have one now!</a>
        </Text>
      </footer>
    </div>
  );
}