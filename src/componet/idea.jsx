
const Pousc = ({ name, id,  }) => {

    return (
        <div className="shadow-md p-1 m-2 rounded-sm bg-cyan-600 text-stone-800">
            <div className="italic">{name}</div>
            <div className="italic">{id}</div>
            
        </div>
    );
}

export default Pousc;