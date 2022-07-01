import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Cabeçalho = styled.header`
  display: flex;
  border-bottom: 0.5rem solid ${colors.secondary};
  picture svg {
      height: 6 rem;
      width: 6 rem;
  }
  nav {
      width: 100%
      display: flex;
      justify-content: flex-end;
      align-items: center;
      ul {
          list-style-type: none;
          display: flex;
          align-items: center;
          
      }
  }

