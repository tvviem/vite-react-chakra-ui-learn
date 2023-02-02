import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea
} from '@chakra-ui/react';
import { Form, useNavigate } from 'react-router-dom';

// type Task = {
//   title: string;
//   description: string;
//   isPriority: boolean;
// };

export default function Create() {
  let navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const task = {
      title: formData.get('title'),
      description: formData.get('description'),
      isPriority: formData.get('isPriority') === ''
    };

    console.log(task);
    navigate('/');
  }

  return (
    <Box maxW="480px">
      <Form method="post" onSubmit={handleSubmit}>
        <FormControl isRequired mb="40px">
          <FormLabel>Task name: </FormLabel>
          <Input type="text" name="title" />
          <FormHelperText>Enter a descriptive task name</FormHelperText>
        </FormControl>

        <FormControl mb="40px">
          <FormLabel>Task description: </FormLabel>
          <Textarea
            placeholder="Enter a detailed description for task..."
            name="description"
          ></Textarea>
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox name="isPriority" size="lg" color={'purple'} />
          <FormLabel mb="0px" ml="10px">
            Make this a priority task.
          </FormLabel>
        </FormControl>
        <Button type="submit">Submit</Button>
      </Form>
    </Box>
  );
}
