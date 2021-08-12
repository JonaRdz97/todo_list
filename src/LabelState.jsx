import React from 'react';
export default function LabelState({status}){
    return(
        <div className="status">
            { status ? <span className="in-process">En proceso</span> : <span className="finished">Terminado</span>}
        </div>
    );
}