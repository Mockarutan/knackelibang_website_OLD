import React from "react";
import { graphql } from "gatsby";
import Layout_Promo from "../components/Layout-Promo";
import Content, { HTMLContent } from "../components/Content";
import Background from "../../static/img/promo_bg_02.png";
import Title from "../../static/img/JRTI_logo_WIP08.png";
import Navbar from "../components/Navbar";
import PromoContent from "./promo-content";

export const PromoPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <section className="promoArtContainer">
        <img src={Background} alt="" />
        <img className="titleImage" src={Title} alt="" />
      </section>
      <section className="contentPromoPage">
        <PromoContent />
      </section>
    </>
  );
};

const PromoPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout_Promo>
      <PromoPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout_Promo>
  );
};

export default PromoPage;

export const promoPageQuery = graphql`
  query PromoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
