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

// export const useDataJson = () => {
//   const data = useStaticQuery(graphql`
//     {
//       allDataJson {
//         edges {
//           node {
//             crew {
//               name
//               role
//               bio
//               images {
//                 png
//                 webp
//               }
//             }
//             destinations {
//               name
//               description
//               distance
//               travel
//               images {
//                 png
//                 webp
//               }
//             }
//             technology {
//               description
//               name
//               images {
//                 portrait
//                 landscape
//               }
//             }
//           }
//         }
//       }
//     }
//   `);
//   return data;
// };
