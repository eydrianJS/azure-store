import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'

interface SortItemParams {
  handleSetSorting: any
  sort: string | unknown
}

const SortItem = ({ sort, handleSetSorting }: SortItemParams) => {
  return (
    <FormControl>
      <InputLabel htmlFor="age-native-simple">Sortowanie</InputLabel>
      <Select
        native={true}
        value={sort}
        onChange={handleSetSorting}
        inputProps={{
          name: 'age',
          id: 'age-native-simple'
        }}>
        <option aria-label="None" value="" />
        <option value="10">Rosnąco po cenie</option>
        <option value="20">Malejąco po cenie</option>
      </Select>
    </FormControl>
  )
}

export default SortItem
