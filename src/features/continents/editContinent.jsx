import {EditGuesser, InputGuesser} from "@api-platform/admin";
import {AutocompleteInput, ReferenceInput} from "react-admin";

export default function EditContinent(props) {
  return (
    <EditGuesser {...props}>
      <ReferenceInput name='author' source='author' reference='api/users'>
        <AutocompleteInput
          optionText='fullName'
          label='Auteur'
          name='author'
          format={v => v['@id'] || v}
          filterToQuery={fullName => ({ fullName })} />
      </ReferenceInput>
      <InputGuesser name='name' source='name' label='Nom du continent' />
      <InputGuesser name='createdAt' source='createdAt' label='Date de création' />
    </EditGuesser>
  )
}
