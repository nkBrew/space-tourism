import { useStaticQuery, graphql } from 'gatsby';

interface ITechnology {
  description: string;
  images: {
    landscape: any;
    portrait: any;
  };
  name: string;
}

export interface TechnologyDict {
  [key: string]: ITechnology;
}

const useTechnology = (): TechnologyDict => {
  const data = useStaticQuery(graphql`
    {
      dataJson {
        technology {
          description
          images {
            landscape {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
            portrait {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          name
        }
      }
    }
  `);

  const dict: TechnologyDict = {};
  data.dataJson.technology.forEach((t) => (dict[t.name] = t));

  return dict;
};

export default useTechnology;
