
import RealStateHomeSearchBar from './RealStateHomeSearchBar'
import CardSearchList from './CardSearchList'
const Search = () => {
    const iconCards = null;
    const style = {
        searchWrapper:{},
        searchContainer:{
            position:'sticky',
            top: '100px',
            display: 'flex',
      alignItems:' center',
      gap: '15px',
   
     
     
     
      background: 'white',
      padding: '10px',
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
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
