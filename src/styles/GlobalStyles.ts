import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
  ${reset} 
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
      -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    }
    input:focus {
      outline: none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
	 	 transition: background-color 5000s ease-in-out 0s;
		 -webkit-transition: background-color 9999s ease-out;
    	 -webkit-box-shadow: 0 0 0px 1000px white inset !important;
   }

    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
    html { 
      background-color: #000;
    }

    /* img {
      transition: all 0.2s  ease-in-out ;
    }
    img:hover {
    transform: scale(1.1); */
}
`;

export default GlobalStyles;
