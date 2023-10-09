/* eslint-disable react/prop-types */

const ViewData = ({ data }) => {
    return (
        <>
            <div className='viewData'>
                {
                    data.map((i, idx) => (
                        <>
                            <div className='box' key={idx}>
                                <p>Name :{i.name}</p>
                                <p>Department :{i.depart}</p>
                                <p>Rating :{i.rating}</p>
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default ViewData