import React from 'react';
import Link from 'gatsby-link';
import styled from 'tachyons-components';
import CategorySection from '../components/CategorySection';
import WorkItem from '../components/WorkItem';
import AwardItem from '../components/AwardItem';
import Data from '../data_factory';

const ContentContainer = styled('div')`
  content pa3 ph5-ns pv4-ns
`;

class IndexPage extends React.Component {
  componentWillMount() {
    const script = document.createElement("script");

    script.src="https://use.typekit.net/ici2nml.js";
    script.async = true;

    document.body.appendChild(script);
    try{Typekit.load({ async: true });}catch(e){}
  }


  render() {
    return (
      <ContentContainer>
        <CategorySection title="💼 Work">
          <ul className="item-list">
            {Data.getWork.map(work => {
              return (
                <WorkItem
                  work={work}
                />
              )
            })}
          </ul>
        </CategorySection>

        <CategorySection title="🏆 Awards">
          <ul className="item-list">
            {Data.getAwards.map(award => {
              return (
                <AwardItem
                  award={award}
                />
              )
            })}
          </ul>
        </CategorySection>

        <CategorySection title="💬 Let's Talk">
          <ul className="item-list">
            <li>
              <a href="https://m.me/jurvistan" className="f5 v-mid lh-copy">Messenger</a>
            </li>
            <li>
              <a href="https://t.me/jurvis" className="f5 v-mid lh-copy">Telegram</a>
            </li>
            <li>
              <a href="https://twitter.com/jurvistan" className="f5 v-mid lh-copy">Twitter</a>
            </li>
            <li>
              <a href="https://github.com/jurvis" className="f5 v-mid lh-copy">GitHub</a>
            </li>
            <li>
              <a href="mailto:hello@jurvis.co">hello[at]jurvis.co</a>
            </li>
          </ul>
        </CategorySection>
      </ContentContainer>
    )
  }
}

export default IndexPage
