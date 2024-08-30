import {FieldGuesser, ListGuesser} from "@api-platform/admin";
import {ReferenceField, TextField} from "react-admin";

export default function CountriesList(props) {
  return (
    <ListGuesser {...props}>
      <FieldGuesser source='name' label='Nom du pays' />
      <ReferenceField reference='api/continents' source='continent' label='Continent'>
        <TextField source='name' />
      </ReferenceField>
      <FieldGuesser source='createdAt' label='Date de création' />
      <FieldGuesser source='slug' />
    </ListGuesser>
  )
}
