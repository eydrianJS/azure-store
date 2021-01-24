import React, { useState, useCallback } from 'react'
import Products from '../../components/Products'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import AppsIcon from '@material-ui/icons/Apps'
import IconButton from '@material-ui/core/IconButton'
import SortInput from '../../components/SortInput'
import useStyles from './styles'

const MainPage = () => {
  const classes = useStyles()
  const [list, setList] = useState<boolean>(true)
  const [sort, setSort] = useState<string | unknown>('')

  const handleSetSorting = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSort(e.target.value)
  }, [])

  const handleSetList = useCallback(() => {
    setList(!list)
  }, [list])
  return (
    <Grid container={true} spacing={1}>
      <Grid item={true} xs={true}>
        <Paper className={classes.paper}>KATEGORIE</Paper>
      </Grid>
      <Grid item={true} xs={10}>
        <Paper className={classes.paper}>
          <Grid
            container={true}
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            spacing={1}
            className={classes.formControl}>
            <SortInput sort={sort} handleSetSorting={handleSetSorting} />
            {list ? (
              <IconButton aria-label="share" onClick={handleSetList}>
                <AppsIcon />
              </IconButton>
            ) : (
              <IconButton aria-label="share" onClick={handleSetList}>
                <FormatListBulletedIcon />
              </IconButton>
            )}
          </Grid>
          <Grid container={true} direction="row" justify="space-between" alignItems="flex-start" spacing={3}>
            <Products list={list} />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default MainPage
