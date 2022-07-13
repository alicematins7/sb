import React from "react";
import { BsFacebook, BsInstagram, BsLinkdin } from "react-icons/bs";
import * as S from "./styles";

 const Rodape = () => {
     return (
         <S.rodape>
             <div className="content"> 
                 <a href="https://facebook.com" target ="_blank" rel="noreferrer">
                     <BsFacebook />
                 </a>
                 < a href="https://instagram.com" target = "_blank" rel="noreferrer" >
                     <BsInstagram />
                 </a>
                 <a href="https://linkedin.com"  target= "_blank" rel="noreferrer">
                     <BsLinkdin />
                 </a>
             </div>
         </S.Rodape>
     );
 };

 export default Rodape