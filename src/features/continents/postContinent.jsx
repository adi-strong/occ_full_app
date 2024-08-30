import {CreateGuesser, InputGuesser} from "@api-platform/admin";

export default function PostContinent(props) {
  return (
    <CreateGuesser {...props}>
      <InputGuesser name='name' source='name' />
    </CreateGuesser>
  )
}
