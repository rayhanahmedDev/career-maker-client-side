
import Allservice from "../../Component/Allservice";
import { useEffect, useState } from "react";


const AllServices = () => {

    const [allServices, setAllService] = useState([])
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setAllService(data))
    }, [])

    const handleSearch = ()=>{
        const inputField = document.getElementById('input-field')
        const inputValue = inputField.value.toLowerCase()
        const card = allServices
        const result = card.filter(card => card.ServiceName.toLowerCase() === inputValue)
        setAllService(result)
    }

    return (
        <div>
            <div className="text-center my-12">
                {/* input field */}
                <input type="text" id="input-field" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" />
                <button onClick={handleSearch} className="btn bg-gradient-to-r from-[#FF3300] to-[#FF8938] text-white">Search</button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12">
                {
                    allServices.slice(0, dataLength).map(data => <Allservice key={data._id} data={data}></Allservice>)
                }
            </div>
            <div className="text-center my-12">
                <div className={dataLength === allServices.length ? 'hidden' : undefined}>
                    <button onClick={() => setDataLength(allServices.length)} className="btn bg-gradient-to-r from-[#FF3300] to-[#FF8938] text-white">More</button>
                </div>
            </div>
        </div>
    );
};

export default AllServices;