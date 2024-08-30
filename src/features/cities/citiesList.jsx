import {FieldGuesser, ListGuesser} from "@api-platform/admin";
import {ReferenceField, TextField} from "react-admin";

export default function CitiesList(props) {
  return (
    <ListGuesser {...props}>
      <FieldGuesser source='name' label='Nom de la ville' />
      <ReferenceField reference='api/countries' source='country' label='Pays'>
        <TextField source='abbreviation' />
      </ReferenceField>
      <FieldGuesser source='createdAt' label='Date de création' />
      <FieldGuesser source='slug' />
    </ListGuesser>
  )
}
