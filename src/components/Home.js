import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <ContainerHome>
            <Section
                title = "Model S"
                description = "Order Online For Touchless Delivery"
                backgroundImg = "model-s.jpg"
                leftBtntext = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
             <Section
                title = "Model Y"
                description = "Order Online For Touchless Delivery"
                backgroundImg = "model-y.jpg"
                leftBtntext = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
           
            <Section
                title = "Model X"
                description = "Order Online For Touchless Delivery"
                backgroundImg = "model-x.jpg"
                leftBtntext = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
             <Section
                title = "Model 3"
                description = "Order Online For Touchless Delivery"
                backgroundImg = "model-3.jpg"
                leftBtntext = "Custom Order"
                rightBtnText = "Existing Inventory"
            />
             <Section
                title = "Lowest Cost Solar Panels In India"
                description = "Money Back Guarantee"
                backgroundImg = "solar-panel.jpg"
                leftBtntext = "Order Now"
                rightBtnText = "Learn More"
            />
            <Section
                title = "Attractive Solar For New Roofs In India"
                description = "Solar Roof Costs Less Than A New Roof Plus Solar Panels"
                backgroundImg = "solar-roof.jpg"
                leftBtntext = "Order Now"
                rightBtnText = "Learn More"
            />
            <Section
                title = "Accessories"
                description = ""
                backgroundImg = "accessories.jpg"
                leftBtntext = "Shop Now"
                
            />
            
        </ContainerHome>
    );
};
const ContainerHome = styled.div`
    height:100vh;
`;

export default Home
