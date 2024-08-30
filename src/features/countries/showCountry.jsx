import {FieldGuesser, ShowGuesser} from "@api-platform/admin";
import {ReferenceField, TextField} from "react-admin";

export default function ShowCountry(props) {
  return (
    <ShowGuesser {...props}>
      <ReferenceField reference='api/continents' source='continent'>
        <TextField source='name' />
      </ReferenceField>
      <FieldGuesser source='createdAt' label='Date de création' />
      <FieldGuesser source='name' label='Pays' />
      <FieldGuesser source='slug' />
    </ShowGuesser>
  )
}
