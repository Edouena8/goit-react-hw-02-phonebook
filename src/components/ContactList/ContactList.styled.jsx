import styled from '@emotion/styled';

export const ContactWrap = styled.ul`
    width: 600px;
`;

export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 10px;
    border: 1px solid black;

    &:hover {
        -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
        -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
        box-shadow: 0 0 0 7px rgb(118, 46, 177),
            0 0 0 14px rgba(118, 46, 177, 0.6),
            0 0 0 21px rgba(118, 46, 177, 0.4);
    }
`;

export const ContactText = styled.p`
    font-size: 25px;
`

export const DeleteBtn = styled.button`
text-decoration: none;
  display: inline-block;
  margin: 10px 20px;
  padding: 10px 30px;
  position: relative;
  border: 2px solid #63009C;
  color: #63009C;
  font-family: 'Montserrat', sans-serif;
  transition: .4s;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    border: 2px solid rgba(0, 0, 0, 0);
    transition: .4s;
  }
  &:hover:after {
    border-color: #63009C;
    width: calc(100% - 10px);
    height: calc(100% + 10px);
  }


`;

