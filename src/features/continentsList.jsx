import {FieldGuesser, ListGuesser} from '@api-platform/admin'
import {ReferenceField, TextField} from 'react-admin'

export default function ContinentsList(props) {
  return (
    <ListGuesser {...props}>
      <FieldGuesser source='name' />
      <ReferenceField reference='api/users' source='author' label='Auteur'>
        <TextField source='fullName' />
      </ReferenceField>
      <FieldGuesser source='createdAt' />
    </ListGuesser>
  )
}
