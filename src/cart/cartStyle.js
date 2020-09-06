import styled from 'styled-components'
import * as appStyles from '../appStyle'

export const CartWrapper = styled.div`
    display : flex;
    position : relative;
    width : auto;
    height : auto;

    .transparentBG {
        display : flex;
        position : fixed;
        width : 100vw;
        height : 5%;
        bottom : 100px;
        left: 0;
        right : 0;
        bottom  : 0;
        opacity : 0;
        pointer-events : none;
        background : linear-gradient(to bottom, rgba(255, 255, 255, 0),#ffffff);
        transition : 350ms all ease-in-out;
        
        &[active=true]{
            opacity : 0.7;
        }
    }
`

export const Cart = styled.div`
    display : flex;
    background-color : ${appStyles.stickyCart};
    position: fixed;
    bottom: -100px;
    opacity : 0;
    right: 0;
    left: 0;
    padding : 24px;
    margin : 0 32px;
    color : white;
    border-radius : 8px;
    justify-content : space-between;
    align-items: center;
    transition : all 400ms ease-in-out;
    z-index : 10;

    ${appStyles.iphoneMedia}{
        margin : 0 16px;
        padding : 16px;
        bottom: -110px;
    }

    &.true{
        transform : translateY(-124px);
        opacity: 100;
    }

    .cartLeft{
        display: flex;
        flex-direction : column;

        h5{
            font-size : 16px;
            font-weight: 600;
            color : white;
        }
        p{
            margin-top : 4px;
            font-size : 12px;
        }
    }

    .cartRight{
        display : flex;
        border : none;
        outline : none;
        background-color : transparent;
        color : white;
        cursor : pointer;
        padding : 0;
    }

   
`