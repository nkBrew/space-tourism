import { graphql, useStaticQuery } from 'gatsby';

interface IDestinations {
  [key: string]: IDestination;
}

export interface IDestination {
  description: string;
  distance: string;
  images: {
    png: any;
    webp: string;
  };
  name: string;
  travel: string;
}

export const useDestinations = () => {
  const data = useStaticQuery(graphql`
    {
      dataJson {
        destinations {
          description
          distance
          images {
            png {
              childImageSharp {
                gatsbyImageData(placeholder: NONE)
              }
            }
          }
          name
          travel
        }
      }
    }
  `);

  const destinations: IDestinations = {};

  data.dataJson.destinations.forEach((d: IDestination) => (destinations[d.name] = d));
  return destinations;
};
