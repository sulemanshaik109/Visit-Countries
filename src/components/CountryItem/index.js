import {ListItem, CountryName, VisitBtn, Para} from '../../styledComponents'

const CountryItem = props => {
  const {countryData, clickVisitBtn} = props
  const {id, name, isVisited} = countryData

  const onClickVisitBtn = () => {
    clickVisitBtn(id)
  }

  return (
    <ListItem>
      <CountryName>{name}</CountryName>
      {isVisited ? (
        <Para>Visited</Para>
      ) : (
        <VisitBtn type="button" onClick={onClickVisitBtn}>
          Visit
        </VisitBtn>
      )}
    </ListItem>
  )
}

export default CountryItem
