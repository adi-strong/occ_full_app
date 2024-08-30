import {CreateGuesser, InputGuesser} from "@api-platform/admin";
import {AutocompleteInput, ReferenceInput} from "react-admin";

export default function PostPort(props) {
  return (
    <CreateGuesser {...props}>
      <InputGuesser name='name' source='name' label='Nom du Port' />
      <InputGuesser name='latitude' source='latitude' label='Latitude' />
      <InputGuesser name='longitude' source='longitude' label='Longitude' />
      <ReferenceInput name='city' source='city' reference='api/cities'>
        <AutocompleteInput
          isRequired
          optionText='name'
          filterToQuery={name => ({ name })}
          name='city'
          label='Ville' />
      </ReferenceInput>
    </CreateGuesser>
  )
}
