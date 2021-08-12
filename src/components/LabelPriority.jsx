import React from 'react';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

export default function LabelPriority({priority}){
    return(
        <div className={priority}>
          <InfoOutlinedIcon/><span style={{color: "#262626"}}>{priority}</span>
        </div>
    );
}