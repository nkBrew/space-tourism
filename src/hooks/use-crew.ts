import { graphql, useStaticQuery } from 'gatsby';

interface ICrew {
  bio: string;
  images: {
    png: any;
    webp: any;
  };
  name: string;
  role: string;
}

interface ICrewDict {
  [key: string]: ICrew;
}

export const useCrew = (): ICrewDict => {
  const data = useStaticQuery(graphql`
    {
      dataJson {
        crew {
          bio
          images {
            webp {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
          name
          role
        }
      }
    }
  `);

  const crewDict: ICrewDict = {};
  data.dataJson.crew.forEach((c) => (crewDict[c.name] = c));
  return crewDict;
};
