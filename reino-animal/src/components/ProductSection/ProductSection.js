import React from 'react';
import { Container } from '../../globalStyles';
import {
    ProdSection,
    ProdSearchContainer,
    ProdSearchBar,
    ProdSearchBarIcon,
    ProdIcon,
    ProdItemsList,
    ProdItem,
    ProdItemTitle,
    ProdItemDescription,
    ProdItemImage,
    ProdItemButton
} from './ProductSection.elements';

const ProductSection = ({ img }) => {
    return (
        <ProdSection>
            <Container>
                <ProdSearchContainer>
                    <ProdSearchBar type="text" placeholder="Type your search here" />
                    <ProdSearchBarIcon>
                        <ProdIcon />
                    </ProdSearchBarIcon>
                </ProdSearchContainer>
                <ProdItemsList>
                    <ProdItem>
                        <ProdItemTitle>Comida pro Duque!</ProdItemTitle>
                        <ProdItemDescription>Pequeno almoço dos campeões</ProdItemDescription>
                        <ProdItemImage src={img} alt="test" />
                        <ProdItemButton>Compra aí oh Xoããããããoooo</ProdItemButton>
                    </ProdItem>
                    <ProdItem>
                        <ProdItemTitle>Comida pro Duque!</ProdItemTitle>
                        <ProdItemDescription>Pequeno almoço dos campeões</ProdItemDescription>
                        <ProdItemImage src={img} alt="test" />
                        <ProdItemButton>Compra aí oh Xoããããããoooo</ProdItemButton>
                    </ProdItem>
                    <ProdItem>
                        <ProdItemTitle>Comida pro Duque!</ProdItemTitle>
                        <ProdItemDescription>Pequeno almoço dos campeões</ProdItemDescription>
                        <ProdItemImage src={img} alt="test" />
                        <ProdItemButton>Compra aí oh Xoããããããoooo</ProdItemButton>
                    </ProdItem>
                    <ProdItem>
                        <ProdItemTitle>Comida pro Duque!</ProdItemTitle>
                        <ProdItemDescription>Pequeno almoço dos campeões</ProdItemDescription>
                        <ProdItemImage src={img} alt="test" />
                        <ProdItemButton>Compra aí oh Xoããããããoooo</ProdItemButton>
                    </ProdItem>
                    <ProdItem>
                        <ProdItemTitle>Comida pro Duque!</ProdItemTitle>
                        <ProdItemDescription>Pequeno almoço dos campeões</ProdItemDescription>
                        <ProdItemImage src={img} alt="test" />
                        <ProdItemButton>Compra aí oh Xoããããããoooo</ProdItemButton>
                    </ProdItem>
                    <ProdItem>
                        <ProdItemTitle>Comida pro Duque!</ProdItemTitle>
                        <ProdItemDescription>Pequeno almoço dos campeões</ProdItemDescription>
                        <ProdItemImage src={img} alt="test" />
                        <ProdItemButton>Compra aí oh Xoããããããoooo</ProdItemButton>
                    </ProdItem>
                    <ProdItem>
                        <ProdItemTitle>Comida pro Duque!</ProdItemTitle>
                        <ProdItemDescription>Pequeno almoço dos campeões</ProdItemDescription>
                        <ProdItemImage src={img} alt="test" />
                        <ProdItemButton>Compra aí oh Xoããããããoooo</ProdItemButton>
                    </ProdItem>
                </ProdItemsList>
            </Container>
        </ProdSection>
    )
}

export default ProductSection
