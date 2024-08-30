import {FieldGuesser, ShowGuesser} from "@api-platform/admin";
import {ReferenceField, TextField} from "react-admin";

export default function ShowContinent(props) {
  return (
    <ShowGuesser {...props}>
      <ReferenceField reference='api/authors' source='author' label='Auteur'>
        <TextField source='fullName' />
      </ReferenceField>
      <FieldGuesser source='createdAt' label='Date de création' />
      <FieldGuesser source='name' label='Continent' />
    </ShowGuesser>
  )
}
