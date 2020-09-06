import styled from 'styled-components'
import * as appStyles from '../appStyle'


export const Content = styled.div`
    display : flex;
    flex-direction : column;
    height : 100%;
    margin : 40px 40px;
    margin-top : 304px;

    ${appStyles.iphoneMedia}{
        margin : 24px 24px;
        margin-top : 200px;
    }

    h5{
        font-size : 20px;
        font-weight : 700;
        color : ${appStyles.mainText};
        ${appStyles.iphoneMedia}{
            font-size : 16px;
        }
    }

    .contentWrap{
        display : flex;
        flex-flow : row wrap;
        justify-content : space-between;
        align-items: center;
        margin-top : 40px;
        width: 100%;

        ${appStyles.iphoneMedia}{
            margin-top : 24px;
        }
    }

    .contentItem{
        width: 30%;
        box-shadow : ${appStyles.shadow};
        border-radius: 16px;
        margin-bottom : 40px;
        
        ${appStyles.ipadProMedia}{
            border-radius: 8px;
            width: 48%;
        }

        ${appStyles.iphoneMedia}{
            border-radius: 8px;
            width: 100%;
        }

        img{
            border-radius: 16px 16px 0  0;
            width : 100%;
            height : 264px;
            object-fit : cover;
            
            ${appStyles.iphoneMedia}{
            border-radius: 8px 8px 0  0;
            }
        }

        .info{
            padding : 16px 24px;
                .rate{
                display : flex;
                align-items : center;

                    p{
                        color : ${appStyles.subText};
                        font-weight : 500;
                        font-size : 16px;
                    }

                    .stars{
                        margin-left : 8px;
                        display : flex;

                        i {
                            font-size : 16px;
                            color : ${appStyles.addCart};
                        }
                    }
                }
                h3{
                    font-weight : 600;
                    font-size : 16px;
                    margin : 8px 0;
                }

                p{
                    font-size : 12px;
                    color : ${appStyles.subText};
                    font-weight : 500;
                }

                .bottomArea{
                    display : flex;
                    flex-direction : row;
                    justify-content : space-between;
                    align-items : center;
                    margin-top : 24px;

                    p{
                        font-size : 20px;
                        color : ${appStyles.mainText};
                        font-weight : 600;
                    }

                    button{
                        outline : none;
                        border : none;
                        background-color : ${appStyles.addCart};
                        color : white;
                        display : flex;
                        align-items : center;
                        padding : 8px 24px;
                        border-radius : 4px;
                        text-transform : uppercase;
                        font-weight : 600;
                        cursor : pointer;
                        transition : 300ms all ease-in-out;

                        &:hover{
                            background-color : #fe5952;
                        }
                    }
                    
                }
        }
    }
`