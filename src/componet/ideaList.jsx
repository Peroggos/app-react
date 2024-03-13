import Pousc from './idea';

const ideaList = ({ ideaList , searchTrem}) => {
    return (
        <div>
            {ideaList.map((id, index) => {
                return (
                    <idea
                        kye={index}
                        Company={Pousc.name}
                        Model={Pousc.id}
                     
                    />
                )
            })}
        </div>
    );

}

export default ideaList;