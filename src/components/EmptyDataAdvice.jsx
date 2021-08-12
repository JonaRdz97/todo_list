import React from 'react';

const EmptyDataAdvice = () => {

    const styles = {
        containerAdvice: {
            margin: 0,
            paddin: 0,
            //width: "100%",
            //height: "calc(100%  100px)",
            gridColumn: "1/-1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column", 
        },
        imgStyles:{
            width: "auto",
            maxWidth: 200,
            maxheight: 200,
            marginBottom: 20,
        },
        description: {
            padding: 10,
            fontWeight: 400,
            fontSize: "1.3rem",
            textAlign: "center",
            color: "#262626"
        }
     }

    return(
            <div style={styles.containerAdvice}>
                <img style={styles.imgStyles} src="/img/add_notes.svg" alt="no datos"/>
                <h3 style={styles.description}>Presiona el botón + para agregar un tarea</h3>
            </div>
    );
}

export default EmptyDataAdvice;