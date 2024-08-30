import {EditGuesser, InputGuesser} from "@api-platform/admin";
import {AutocompleteInput, ReferenceInput} from "react-admin";

export default function EditPort(props) {
  return (
    <EditGuesser {...props}>
      <InputGuesser name='name' source='name' label='Nom du Port' />
      <InputGuesser name='latitude' source='latitude' label='Latitude' />
      <InputGuesser name='longitude' source='longitude' label='Longitude' />
      <ReferenceInput name='city' source='city' reference='api/cities'>
        <AutocompleteInput
          isRequired
          format={v => v['@id'] || v}
          optionText='name'
          filterToQuery={name => ({ name })}
          name='city'
          label='Ville' />
      </ReferenceInput>
      <InputGuesser name='createdAt' source='createdAt' label='Date de création' />
    </EditGuesser>
  )
}
