//-1-
export const Publication = ({ item: { title, text } }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
};

// -2- export const Publication = ({item}) => {
//     return (
//       <article>
//         <h2>{item.title}</h2>
//         <p>{item.text}</p>
//       </article>
//     );
//   };

// - 3- export const Publication = ({ title, text }) => {
//     return (
//       <article>
//         <h2>{title}</h2>
//         <p>{text}</p>
//       </article>
//     );
//   };
