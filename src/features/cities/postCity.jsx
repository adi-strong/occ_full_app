import {CreateGuesser, InputGuesser} from "@api-platform/admin";
import {AutocompleteInput, ReferenceInput} from "react-admin";

export default function PostCity(props) {
  return (
    <CreateGuesser {...props}>
      <InputGuesser name='name' source='name' label='Nom de la Ville' />
      <ReferenceInput name='country' source='country' reference='api/countries'>
        <AutocompleteInput
          isRequired
          optionText='name'
          filterToQuery={name => ({ name })}
          name='country'
          label='Pays' />
      </ReferenceInput>
    </CreateGuesser>
  )
}
