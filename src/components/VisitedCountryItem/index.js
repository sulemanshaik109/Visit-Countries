import {
  VisitedListItem,
  Image,
  ContentContainer,
  VisitedCountryName,
  RemoveBtn,
} from '../../styledComponents'

const VisitedCountryItem = props => {
  const {countryDetails, removeCountry} = props
  const {id, name, imageUrl} = countryDetails

  const onRemoveVisitedCountry = () => {
    removeCountry(id)
  }

  return (
    <VisitedListItem>
      <Image src={imageUrl} alt="thumbnail" />
      <ContentContainer>
        <VisitedCountryName>{name}</VisitedCountryName>
        <RemoveBtn type="button" onClick={onRemoveVisitedCountry}>
          Remove
        </RemoveBtn>
      </ContentContainer>
    </VisitedListItem>
  )
}

export default VisitedCountryItem
