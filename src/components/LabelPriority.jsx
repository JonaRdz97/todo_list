import React from 'react';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

export default function LabelPriority({priority}){

  const styles = {
    priorityDesc: {
      color: "#262626",
      fontWeight: 300,
      fontSize: "0.8rem",
    }
  }

    return(
        <div className={priority}>
          <p style={styles.priorityDesc}>Prioridad: </p><InfoOutlinedIcon/><span>{priority}</span>
        </div>
    );
}