const HideAndShowPanel = ({isShowing}) => {
    if (isShowing) {
        return (
            <>
                <p>I am the secret behind the button.</p>
            </>
        )
    }
}

export default HideAndShowPanel