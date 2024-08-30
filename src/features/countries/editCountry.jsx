import {EditGuesser, InputGuesser} from "@api-platform/admin";
import {AutocompleteInput, ReferenceInput} from "react-admin";

export default function EditCountry(props) {
  return (
    <EditGuesser {...props}>
      <InputGuesser name='name' source='name' label='Nom du Pays' />
      <InputGuesser name='abbreviation' source='abbreviation' label='Abréviation (Acronyme)' />
      <InputGuesser name='postalCode' source='postalCode' label='Code Postal' />
      <ReferenceInput name='continent' source='continent' reference='api/continents'>
        <AutocompleteInput
          isRequired
          optionText='name'
          format={v => v['@if'] || v}
          filterToQuery={name => ({ name })}
          name='continent'
          label='Continent' />
      </ReferenceInput>
      <InputGuesser name='createdAt' source='createdAt' label='Date de création' />
    </EditGuesser>
  )
}
