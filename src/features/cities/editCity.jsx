import {EditGuesser, InputGuesser} from "@api-platform/admin";
import {AutocompleteInput, ReferenceInput} from "react-admin";

export default function EditCity(props) {
  return (
    <EditGuesser {...props}>
      <InputGuesser name='name' source='name' label='Nom de la Ville' />
      <ReferenceInput name='country' source='country' reference='api/countries'>
        <AutocompleteInput
          isRequired
          format={v => v['@id'] || v}
          optionText='name'
          filterToQuery={name => ({ name })}
          name='country'
          label='Pays' />
      </ReferenceInput>
      <InputGuesser name='createdAt' source='createdAt' label='Date de création' />
    </EditGuesser>
  )
}
