import DisplayPersonalDetails from "./DisplayPersonalDetails";
import Navbar from "./Navbar";

const DisplayCV = () => {
    return (
        <div className="flex flex-col">
            <Navbar />
            <DisplayPersonalDetails />
        </div>
    );
};

export default DisplayCV;
