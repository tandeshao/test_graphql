import { useMutation } from "@apollo/client/react";
import { ADD_SHOP } from "../GraphQL/Mutations";
import { useEffect, useState } from "react";

export default function MutationForm() {
  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const [addShop, { data, loading, error }] = useMutation(ADD_SHOP);
  const handleSubmit = () => {
    addShop({
      variables: {
        name: text,
      },
    });
  };

  useEffect(() => {
    if (!loading && !error && data) {
    console.log("mutation component", data);
    }
    //eslint-disable-line
  }, [data, error, loading])
  

  return (
    <div>
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={handleSubmit}> Submit </button>
    </div>
  );
}
