import styled from 'styled-components'

const RedCont = styled.div`
background-color:${props=>props.cl};
color:${props=>props.text_cl}
`;
const Font = styled.div`
font-size: 3rem;
font-family: Oxygen;
`

export default function ImgCard({
    img="/dawg.jpeg",
    text="This is the dog.",
    bg="red",
    tcl="#FFF",
    children=null
}) {
    /* is equal to saying const mystyle = { 
        backgroundColor:"red"
    }   style={{
        backgroundColor:"red"
    }}
    */
    return <RedCont cl={bg} text_cl={tcl}>
        <img src={img} width="500px"  ></img>
        <Font>{text}</Font>
        {children}
    </RedCont>
}