import {FieldGuesser, ListGuesser} from '@api-platform/admin'
import {ReferenceField, TextField} from 'react-admin'

export default function ContinentsList(props) {
  return (
    <ListGuesser {...props}>
      <FieldGuesser source='name' label='Nom du continent' />
      <ReferenceField reference='api/users' source='author' label='Auteur'>
        <TextField source='fullName' />
      </ReferenceField>
      <FieldGuesser source='createdAt' label='Date de création' />
      <FieldGuesser source='slug' />
    </ListGuesser>
  )
}
