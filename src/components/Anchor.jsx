function Anchor({children}) {
    return (
        <>
        <a href={children} target="_blank">{children}</a> <br />
        </>
    );
}

export default Anchor;