import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaPaw } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIconLink,
    SocialIcons
} from "./Footer.elements";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Quem Somos</FooterLinkTitle>
                            <FooterLink to="/signin">Empresa</FooterLink>
                            <FooterLink to="/signin">Testemunhos</FooterLink>
                            <FooterLink to="/signin">Termos e Condições</FooterLink>
                            <FooterLink to="/signin">Politica de Privacidade</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contacte nos</FooterLinkTitle>
                            <FooterLink to="/signin">Contactos</FooterLink>
                            <FooterLink to="/signin">FAQs</FooterLink>
                            <FooterLink to="/signin">Parcerias</FooterLink>
                            <FooterLink to="/signin">Apoios</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Galeria</FooterLinkTitle>
                            <FooterLink to="/signin">Videos</FooterLink>
                            <FooterLink to="/signin">Imagens</FooterLink>
                            <FooterLink to="/signin">Produtos</FooterLink>
                            <FooterLink to="/signin">Serviços</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Redes Sociais</FooterLinkTitle>
                            <FooterLink to="/signin">Instagram</FooterLink>
                            <FooterLink to="/signin">Facebook</FooterLink>
                            <FooterLink to="/signin">Youtube</FooterLink>
                            <FooterLink to="/signin">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            <FaPaw />
                        </SocialLogo>
                        <WebsiteRights>Reino Animal © {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
