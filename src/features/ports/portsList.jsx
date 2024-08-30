import {FieldGuesser, ListGuesser} from "@api-platform/admin";
import {ReferenceField, TextField} from "react-admin";

export default function PortsList(props) {
  return (
    <ListGuesser {...props}>
      <FieldGuesser source='name' label='Nom du port' />
      <ReferenceField reference='api/cities' source='city' label='Ville'>
        <TextField source='name' />
      </ReferenceField>
      <FieldGuesser source='createdAt' label='Date de création' />
      <FieldGuesser source='slug' />
    </ListGuesser>
  )
}
