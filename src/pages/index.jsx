import React from 'react';
import Link from 'gatsby-link';
import styled from 'tachyons-components';
import CategorySection from '../components/CategorySection';
import WorkItem from '../components/WorkItem';
import AwardItem from '../components/AwardItem';
import Data from '../data_factory';

const ContentContainer = styled('div')`
`;

const HeroContainer = styled('div')`
  mv4 mv5-m mv6-l
`

const CategoriesContainer = styled('div')`
`

const SubHead = styled('h1')`
  f4 fw3 lh-copy measure ma0
`

const WorkList = styled('div')`
  pa0 mv0
`

class IndexPage extends React.Component {
  render() {
    return (
      <ContentContainer>
        <HeroContainer>
          <SubHead>Hello, my name is Jurvis, a software developer based in Singapore.</SubHead>
          <SubHead>I strive to build unforgettable digital experiences.</SubHead>
        </HeroContainer>
        <CategoriesContainer>
          <CategorySection title="Work">
            <div className="item-list">
              {Data.getWork.map(work => {
                return (
                  <WorkItem
                    work={work}
                  />
                )
              })}
            </div>
          </CategorySection>

          <CategorySection title="Awards">
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

          <CategorySection title="Let's Talk">
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
        </CategoriesContainer>
      </ContentContainer>
    )
  }
}

export default IndexPage
