
import RealStateHomeSearchBar from '../home/components/RealStateHomeSearchBar'
import CardSearchList from '../cards/CardSearchList'
import styles from './Search.module.css'
const Search = () => {
    const iconCards = null;
    const style = {
      searchWrapper:{},
      searchContainer:{
        ...styles.searchContainer
        },
    };
    const budgetRange = null;
    const propertyTypeData = {
        residential: [
            'Apartment/Flat',
            'Independent House/Villa',
            'Plot/Land',
            'Builder Floor',
            'Penthouse',
          ],
          commercial: [
            'Office Space',
            'Shop/Showroom',
            'Commercial Land',
            'Warehouse/Godown',
            'Industrial Building',
          ]
    };
  return (
    <div>

      <RealStateHomeSearchBar iconCard={iconCards} style={style} budgetRange={budgetRange} propertyTypeData={propertyTypeData}/>
      <CardSearchList/>
    </div>
  )
}

export default Search
