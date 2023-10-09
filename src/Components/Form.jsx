/* eslint-disable react/prop-types */
function FormCompo({ setData }) {
    let data = {};
    function setValue(e) {
        e.preventDefault();
        data = {
            name: e.target.name.value,
            depart: e.target.depart.value,
            rating: e.target.rating.value
        }
        setData(prevData => [...prevData, data]);
        e.target.name.value = null;
        e.target.depart.value = null;
        e.target.rating.value = null;
    }
    return (
        <>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <form className="form" onSubmit={setValue}>
                <div className="w-100">
                    <label htmlFor="name">Name</label>
                    <input className="w-100" type="text" id="name"></input>
                </div>
                <div className="">
                    <label htmlFor="depart">Department</label>
                    <input className="w-100" type="text" id="depart"></input>
                </div>
                <div className="w-100">
                    <label htmlFor="rating">Rating</label>
                    <input className="w-100" type="number" id="rating"></input>
                </div>
                <div className="w-100">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </>
    )
}
export default FormCompo;
