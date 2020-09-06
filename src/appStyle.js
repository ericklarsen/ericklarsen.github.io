import styled from 'styled-components'

export const mainText = "#424749"
export const subText = "#6e7679"
export const addCart = "#f9423a"
export const stickyCart = "#a23530"
export const pickerIcon = "#e2e4e4"
export const outlineBorder = "#f1f1f2"
export const shadow = "0px 8px 10px 0px rgba(10, 31, 68, 0.1)"

export const iphoneMedia = "@media (max-width: 375px)"
export const ipadProMedia = "@media (max-width: 1024px)"

export const AppWrap = styled.div`
display : flex;
position : relative;
flex-direction : column;
margin : 0;
padding : 0;
height : 100%;
width : 100%;
color : ${mainText};

 button{
    font-family: 'Montserrat', sans-serif;
    color : ${mainText};
 }
`