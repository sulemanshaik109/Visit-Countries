import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: #161624;
  display: flex;
  flex-direction: column;
  padding-left: 80px;
  min-height: 100vh;
`
export const Heading = styled.h1`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 30px;
`
export const CountriesList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  width: 90%;
  border: 1px solid #94a3b8;
  border-radius: 10px;
  overflow: auto;
  height: 320px;
`
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px 20px;
  border-bottom: 1px solid #94a3b8;
  background-color: #1f1f2f;
`
export const CountryName = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 20px;
`
export const VisitBtn = styled.button`
  background-color: #3b82f6;
  border: none;
  border-radius: 3px;
  height: 30px;
  width: 80px;
  cursor: pointer;
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 18px;
`
export const VisitedCountriesList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export const VisitedListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 29%;
  margin-right: 10px;
`
export const Image = styled.img`
  width: 100%;
  height: 180px;
`
export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #1f1f2f;
`
export const RemoveBtn = styled.button`
  background: none;
  border: 1px solid #cbd5e1;
  border-radius: 3px;
  color: #cbd5e1;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  padding: 5px;
  cursor: pointer;
`
export const VisitedCountryName = styled(CountryName)`
  margin: 0px;
`
export const Para = styled.p`
  color: #94a3b8;
  font-family: 'Roboto';
  font-size: 18px;
  margin-right: 10px;
`
export const NoVisitedCountries = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
