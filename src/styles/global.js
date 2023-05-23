import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  text-decoration: none;
  
}

img {
  max-width: 100%;

}


ul , ol {
    list-style: none;
}

button{
    cursor: pointer;
    background: transparent;
    border: 0;
}

:root {
  --color-brand-1: #B993D6;
  --color-brand-2: #8CA6DB;
  --background-1:#ffffff;
  --background-2:#8f6e5d;
  --color-grey-1:  #212529;
  --color-grey-2:  #343a40;
  --color-grey-3:  #dee2e6;
  --color-grey-4:  #e9ecef;
  --color-grey-5:  #f1f3f5;
  --color-grey-6:  #ffffff;
  --radius-default: 0.5rem;
  --title-1: 3rem;
  --title-2: 2.5rem;
  --title-3: 2rem;
  --text-1: 1.5rem;
  --text-2: 1rem;
  --text-3: 0.875rem;
}

body {
 height: 100vh;
 font-family: "Raleway", sans-serif;
 background: var(--background-1);

}

.container {
  max-width: 76rem;
  margin: 20px auto 20px auto;
  padding-left: 1rem;
  padding-right: 1rem;

  @media only screen and (max-width: 600px) {
 
   margin: 50px 0 130px 0;
   
  }
}





`;
