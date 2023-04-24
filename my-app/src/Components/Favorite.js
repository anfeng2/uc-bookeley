import React, {useState} from 'react';


const Favorite = (props) => {

    const [Libs, setLibs] = useState(["Doe Library", "Moffitt Library", "Main Stacks", "VLSB", "East Asian Library", "Engineering Library", "Environmental Design Lib", "Chemistry Library"])

    const deleteLib = (lib) => {
        const newList = Libs.filter((item) => item !== lib);
        setLibs(newList);
    };


    return (
        <div>
            <h1>Favorite Libraries</h1>
            <div>
                {Libs.map(c => {
                    return <div class="hour row">
                            <button class="delete" onClick={deleteLib(c)}>X</button>
                            <h2> {c} </h2>
                        </div> })};
            </div>
        </div>

    );
}
export default Favorite;