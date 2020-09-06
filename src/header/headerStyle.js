import styled from 'styled-components'
import * as appStyles from '../appStyle'

export const HeaderWrap = styled.div`
    display : flex;
    top : 0;
    left :0;
    right: 0;
    position : fixed;
    flex-flow : column nowrap;

    .overlay2{
        content : "";
        position: absolute;
        background-color : ${appStyles.mainText};
        width : 100%;
        height : 100vh;
        opacity : 0;
        top : 0;
        z-index : 3;
        left : 0;
        transition : 350ms all ease-in-out;
        pointer-events: none; 
    }

    .overlay2[active=true]{
        opacity : 0.5;
        pointer-events: visible; 
    }
`

export const Header = styled.div`
    display : flex;
    flex-direction : column;
    padding : 16px 40px;
    color : ${appStyles.mainText};
    z-index : 2;
    background-color : white;
    border-bottom : 1px solid ${appStyles.outlineBorder};

    ${appStyles.iphoneMedia}{
        padding : 8px 24px;
    }

    .headerNav{
        display : flex;
        flex-direction : row;
        margin : 8px 0;

        button{
            border: none;
            background-color : transparent;
            outline: none;
            padding : 0;
        }

        .navSideRight{
            display : flex;
            flex-direction : column;
            margin-left : 16px;

            p { 
                margin :0;
            }

            .upTxt{
                font-size : 12px;
                text-transform : uppercase;

                    ${appStyles.iphoneMedia}{
                        font-size : 8px;
                    }
            }

            .botTxt{
                display : flex;
                flex-direction : row;
                align-items :center;
                justify-content : center;
                cursor : pointer;

                p{
                    margin-top : 4px;
                    font-size : 20px;
                    font-weight : 500;

                    ${appStyles.iphoneMedia}{
                        font-size : 16px;
                    }
                }

                span{
                    color : ${appStyles.addCart};
                    font-size : 20px;
                }
            }
        }
    }

    .headerDate{
        width: auto;
        display : block;
        flex-direction : row;
        align-items : center;
        margin : 16px 0;
        white-space : nowrap;
        overflow : auto;

        ${appStyles.iphoneMedia}{
            margin : 0;
            margin-top : 8px;
        }

        &::-webkit-scrollbar {
            display : none;
        }

        .dateItem{
            display : inline-block;
            border : none;
            margin-right : 24px;
            width : 64px;
            height : 64px;
            background-color: transparent;
            outline : none;
            cursor: pointer;

            ${appStyles.iphoneMedia}{
                margin-right: 8px;
                width : 48px;
                height : 48px;
            }
            
            .info {
                display : flex;
                width : 100%;
                height : 100%;
                flex-direction: column;
                justify-content : center;
                align-items : center;
            }
            .day { 
                font-size : 12px;
                ${appStyles.iphoneMedia}{
                    font-size : 8px;
                }
            }

            .date{
                font-size : 16px;
                font-weight : 600;
                ${appStyles.iphoneMedia}{
                    font-size : 14px;
                }
            }
        }

        .dateItem[active=true]{
            background-color : ${appStyles.mainText};
            color : white;
            border-radius : 100%;
        }

        .dateItem[disable=true]{
            color : ${appStyles.pickerIcon};
        }

    }


`

export const HeaderBtnBot = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    box-shadow : ${appStyles.shadow};
    padding : 16px 40px;
    left: 0;
    right: 0;
    position : relative;
    transform : translateY(-100px);
    transition : 350ms all ease-in-out;
    background-color : white;

    ${appStyles.iphoneMedia}{
        padding : 8px 24px;
    }
    
    &.active {
        transform : translateY(0);
    }
        .lunch{
            width : 50%;
            height : 48px;
            background-color : transparent;
            font-weight : 500;
            font-size : 16px;
            border : 2px solid ${appStyles.outlineBorder};
            outline : none;
            cursor : pointer;
            border-radius : 8px 0 0 8px;
            transition : 200ms all ease-in-out;

            ${appStyles.iphoneMedia}{
                border-radius : 4px 0 0 4px;
                font-size : 14px;
                height : 40px;
            }
        }
        .dinner{
            width : 50%;
            height : 48px;
            background-color : transparent;
            font-weight : 500;
            font-size : 16px;
            border : 2px solid ${appStyles.outlineBorder};
            border-left : none;
            outline : none;
            cursor : pointer;
            border-radius : 0 8px 8px 0;
            transition : 200ms all ease-in-out;
            
            ${appStyles.iphoneMedia}{
                border-radius : 0 4px 4px 0;
                font-size : 14px;
                height : 40px;
            }
        }


        button.active {
            background-color : ${appStyles.mainText};
            border : 2px solid ${appStyles.mainText};
            color : white;
        }
`