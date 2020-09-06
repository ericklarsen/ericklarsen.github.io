import styled from 'styled-components'
import * as appStyle from '../appStyle'

export const LocationWrap = styled.div`
    display : flex;
    flex-direction : column;
    position : fixed;
    background-color : white;
    transform : translateY(650px);
    opacity : 0;
    bottom: 0;
    top: 120px;
    left: 400px;
    right : 400px;
    z-index : 11;
    padding : 40px;
    border-radius : 8px 8px 0px 0px;
    box-shadow : ${appStyle.shadow};
    transition : 400ms all ease-in-out;
    pointer-events : none;

    ${appStyle.ipadProMedia}{
    left: 100px;
    right : 100px;
    padding : 24px;
    }

    ${appStyle.iphoneMedia}{
    left: 0;
    right : 0;
    padding : 24px;
    }


    &.true {
        transform : translateY(0);
        opacity : 1;
        pointer-events : visible;
    }

    

    
    .close{
        display : flex;
        justify-content : flex-end;

        button{
            border : none;
            outline : none;
            background-color : transparent;
            cursor : pointer;
        }
    }

    .title {
        margin-top : 24px;
        font-weight : 500;
        font-size : 24px;

        ${appStyle.iphoneMedia}{
        font-size : 20px;
        width : 90%;
        }
    }

    .input{
        display : flex;
        flex-direction : row;
        align-content : center;
        border : 1px solid ${appStyle.outlineBorder};
        padding : 16px;
        margin-top : 24px;

        ${appStyle.iphoneMedia}{
        padding : 8px;
        }

        i{
            font-size : 24px;
            color : ${appStyle.addCart};
            
        }

        input{
            border : none;
            outline : none;
            margin-left : 16px;
            font-size : 16px;
            font-weight : 400px;
            caret-color : ${appStyle.addCart};
            width : 100%;
            ${appStyle.iphoneMedia}{
                font-size : 14px;
                width : 90%;
            }
        }
    }

    .listWrap{
        display : none;
        flex-direction : column;
        width : 100%;
        margin-top : 24px;

        &[active = true]{
        display : flex;
        }
        
        .list{
            display : flex;
            flex-direction : row;
            margin : 16px 0;
            width : 100%;
            .pin{
                display: flex;
                justify-content :center;
                align-items : center;
                width: 40px;
                height : 40px;
                border-radius: 100%;
                background-color : ${appStyle.outlineBorder};
                margin-right : 16px;
                
                ${appStyle.iphoneMedia}{
                    width: 32px;
                    height : 32px;
                }

                i{
                    color : ${appStyle.subText};
                    font-size : 24px;
                }
            }

            .text{
                width : 85%;
                border-bottom : 1px solid ${appStyle.outlineBorder};
                padding-bottom : 8px;
                h5{
                    font-size : 16px;
                    font-weight : 600;
                }
                p{
                    padding : 4px 0;
                    font-size : 12px;
                    color : ${appStyle.subText};
                }
            }

        }
    }


    .locationFooter{
        display : flex;
        position : absolute;
        justify-content : center;
        align-items : center;

        bottom : 32px;
        left : 0;
        right : 0;

        font-size : 12px;
    }

`