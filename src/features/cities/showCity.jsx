import {FieldGuesser, ShowGuesser} from "@api-platform/admin";
import {ReferenceField, TextField} from "react-admin";

export default function ShowCity(props) {
  return (
    <ShowGuesser {...props}>
      <ReferenceField reference='api/continents' source='continent'>
        <TextField source='name' />
      </ReferenceField>
      <FieldGuesser source='createdAt' label='Date de création' />
      <FieldGuesser source='name' label='Ville' />
      <FieldGuesser source='slug' />
    </ShowGuesser>
  )
}
