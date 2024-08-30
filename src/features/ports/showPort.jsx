import {FieldGuesser, ShowGuesser} from "@api-platform/admin";
import {ReferenceField, TextField} from "react-admin";

export default function ShowPort(props) {
  return (
    <ShowGuesser {...props}>
      <ReferenceField reference='api/cities' source='city' label='Ville'>
        <TextField source='name' />
      </ReferenceField>
      <FieldGuesser source='createdAt' label='Date de création' />
      <FieldGuesser source='name' label='Ville' />
      <FieldGuesser source='latitude' label='Latitude' />
      <FieldGuesser source='longitude' label='Longitude' />
      <FieldGuesser source='slug' />
    </ShowGuesser>
  )
}
