import { Badge, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';
import { useForm, ValidationError } from '@formspree/react';

export const ContactForm = () => {

  const [state, handleSubmit] = useForm("mvoyevkk");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form> */}

      <FormControl onSubmit={handleSubmit} isDisabled>
        <FormLabel htmlFor='email'>
          Email Address
        </FormLabel>
        <Input type='email' id='email' name='email' />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
        <FormLabel htmlFor='message'>
          Message
        </FormLabel>
        <Textarea id='message' name='message' marginBottom={15}/>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Button type='submit' disabled marginTop={2} zIndex={-1} colorScheme={'blue'}>
          Submit
        </Button>
        <Badge bg={'darkorchid'} zIndex={'1'} marginLeft={-8} marginTop={-6}>Soon</Badge>
      </FormControl>
    </>
  )
}
