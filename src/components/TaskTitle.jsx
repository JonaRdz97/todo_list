import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';

const TaskContent = ({title}) => {
    const styles = {
        fontSize: "0.9rem",
        fontWeight: 600,
        width: "80%",
        color: "#262626",
        textAlign: "center",
        margin: "0 auto 15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 5
    }

    return(
        <div style={styles}>
            <MessageOutlinedIcon />
            <p>{title}</p>
        </div>
    );
}

export default TaskContent;