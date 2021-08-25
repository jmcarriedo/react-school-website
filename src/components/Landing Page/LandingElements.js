import styled from "styled-components";

export const Container= styled.div`
padding: 60px 120px;
margin: auto;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
@media (max-width: 1024px) {
   
}
@media (max-width: 768px) {
    padding: 30px 40px;
}
`;

export const MainHeader= styled.div`
font-family: "Lilita One", sans-serif;
text-transform: uppercase;
letter-spacing: 3px;
text-decoration: underline;
text-decoration-thickness: 1px;
text-underline-offset: 10px;
color: midnightblue;
font-size: min(max(1.7rem, 4vw), 40px);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 1024px) {
   
}
@media (max-width: 768px) {
    font-size: min(max(1.9rem, 4vw), 40px);
}
`;


export const Header= styled.div`
// background: yellow;
color: midnightblue;
// padding: 20px 0;
margin: 40px 0 20px 0;
font-size: min(max(1.7rem, 4vw), 30px);
font-weight: 500;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 1024px) {
   
}
@media (max-width: 768px) {
    font-size: min(max(1.7rem, 4vw), 19px);
    
}
`;

export const SubHeader= styled.div`
margin: 20px 0 30px 0;
color: midnightblue;
font-size: min(max(1.7rem, 4vw), 16px);
font-weight: 400;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 1024px) {
   
}
@media (max-width: 768px) {
    font-size: min(max(1.7rem, 4vw), 14px);
}
`;

export const Paragraph= styled.div`
// background: pink;
margin: auto;
color: midnightblue;
font-size: min(max(1.5rem, 4vw), 15px);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: justify;
@media (max-width: 1024px) {
   
}
@media (max-width: 768px) {
    font-size: min(max(1.5rem, 4vw), 12px); 
}
`;

export const Testimonial= styled.div`
padding: 40px 0;
width: 60%;
margin: auto;
color: #fff;
font-size: min(max(1rem, 4vw), 18px);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 1024px) {
   
}
@media (max-width: 768px) {
    font-size: min(max(1rem, 4vw), 14px);
}
`;

export const Button= styled.button`
margin: auto;
color: #fff;
background: midnightblue;
width: 200px;
padding: 20px 10px;
border: none;
box-shadow: 5px 5px 0 0 ;
border-radius: 15px;
font-size: min(max(1.7rem, 4vw), 16px);
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
&:hover{
    transform: scale(1.05);
}
@media (max-width: 1024px) {
   
}
@media (max-width: 768px) {

}
`;