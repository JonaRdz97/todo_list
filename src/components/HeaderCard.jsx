import React from 'react';

const HeaderCard = ({numberTask}) => {
    const styles = {
        margin: "0 auto 0px",
        //paddingTop: "20px",
        paddingLeft: "20px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        color: "#f2f2f2",
        height: 110,
        textAlign: "center",
        fontSize: "2rem", 
        fontWeight: 300,
        background: "linear-gradient(90deg, rgba(4,191,69,0.7) 22%, rgba(63,140,90,0.7) 69%), url('/img/bg-header-card1.jpg')", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        backgroundPosition: "left top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }

    return <h3 style={styles}>{`Tarea #${numberTask}`}</h3>
}

export default HeaderCard;