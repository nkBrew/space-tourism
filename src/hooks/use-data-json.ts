import { graphql, useStaticQuery } from 'gatsby';
interface CrewType {
  bio: string;
  name: string;
  role: string;
  images: {
    png: string;
    webp: string;
  };
}

interface DataJsonType {
  crew: CrewType[];
}

interface DataJsonQueryType {
  dataJson: DataJsonType;
}

export const useDataJson = (): DataJsonType => {
  const { dataJson }: DataJsonQueryType = useStaticQuery(graphql`
    query DataJsonQuery {
      dataJson {
        crew {
          bio
          name
          role
        }
      }
    }
  `);
  return dataJson;
};
