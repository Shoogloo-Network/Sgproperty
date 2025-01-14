import React from 'react'

const Pq = () => {
    const data = [
        {
          id: 1,
          name: 'README.md',
        },
        {
          id: 2,
          name: 'Documents',
          children: [
            {
              id: 3,
              name: 'Word.doc',
            },
            {
              id: 4,
              name: 'Powerpoint.ppt',
            },
          ],
        },
        {
          id: 5,
          name: 'Downloads',
          children: [
            {
              id: 6,
              name: 'unnamed.txt',
            },
            {
              id: 7,
              name: 'Misc',
              children: [
                {
                  id: 8,
                  name: 'foo.txt',
                },
                {
                  id: 9,
                  name: 'bar.txt',
                },
              ],
            },
          ],
        },
      ];
  return (
    <div>
      {
        data.map((item)=>{
            return (
                <div key={item.id}>
                   {Object.keys(item).length > 0 && <h1>{item.name} +</h1>}
{/* <h1>{item.name}</h1> */}
<h2>{item?.children?.map((item)=>{
     
    return(<div key={item.id}> {(Object.keys(item).length > 0) && <h1>{item.name} * </h1>}
    {

        item.children && item.children.map((childItem) => {return (<div key={childItem.id}>
            <h1>{childItem.name} -</h1>
            {/* <h2>{childItem.size()}</h2> */}
        </div>)})
    }
  
    </div>);
})}</h2>
                </div>
            );
        })
      }
    </div>
  )
}

export default Pq
