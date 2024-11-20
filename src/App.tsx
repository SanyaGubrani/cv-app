import Navbar from "./components/Navbar";
import DisplayCV from "./components/DisplayCV";

const App = () => {
    return (
        <div className="flex flex-col">
            <Navbar />
            <div>
                <DisplayCV />
            </div>
        </div>
    );
};

export default App;
