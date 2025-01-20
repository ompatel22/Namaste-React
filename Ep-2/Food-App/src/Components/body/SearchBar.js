import React from "react";

const SearchBar = (props) => {
  const {setFilteredList, resList}=props;
  const [text, setText] = React.useState("");
  return (
    <div className="searchbar">
      <input
        id="search"
        type="text"
        placeholder="enter restaurant name"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          // console.log(text);
          const updatedFilteredList = resList.filter((res)=>res.info.name.toLowerCase().includes(text.toLowerCase()));
          setFilteredList(updatedFilteredList);
        }}
      >
        <img
          alt="search"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAAD6+vpoaGj8/PxfX19kZGTt7e34+Pjo6Oj09PRjY2OOjo7b29u7u7vBwcHOzs5aWlrJycmEhIStra1OTk4qKirh4eE8PDwfHx/Ly8u2traampqKiopWVlZ4eHhISEijo6MWFhY2NjZwcHAQEBAvLy+dnZ0jIyNAQEAWUxqZAAAHyklEQVR4nO2daYOqOgyGPYoiKK6o4y4uc878/z94XWbuTJOgoE3CQJ/v0kbat0nahlrN4XA4HA6Hw+FwOBwOh8Ph+JX40aLfW17oj6LA0+6OTbxo2R3++wM4TcbxoK3dt9cJR90JtO0nh3HP1+7jCwRx6551X0xWUV27q8/gx8Ms5t3YrWba/c3L4LjPbt+VYV+7z3no73Kad2Wa/BaBXU6fse/K6jdMyNHhafsuxEW3MWq+ZN+Zt0LPx3b3VfsuNAJtO1IZPD8BTWJtS1JYW7LvzLCIjs7szZ6BZ0ba9iB62Tq+n88zugLdgi2OjyTmvTlO+oNoFvh+MIuiUbxufDz4SadIgYd3vNfVt3FvFuIf1YNRd3P3d8XR1PBOR3fJ3WDXX3bSfzuPxEy4j5+qMadVhtcQxule0IC/9xnw39Ne3zLrIwapcWQRTPRT3sAkl/cVpc1kfRNDeogeenkfFKUEzNpz0aNF5qkoqIeyVRf2yopKDq7dkymJcEsOB2KlkYNc6P8+/7z+iXjeRjFkpFy1+Uva4FOjfm2rv7mZUX/4q1HBmHhobtmyBSGj29dHVEKYqKQ2RDxoZTwRY//DxnNzM8Ad6dp58ojtyblo45SFtW4Qf57Cwo8XCouS10cPn9h7eEYi1IetzcfH6PHi2SmUF7W8LqMh8k84OYXEYG65Ax6KjIXFBi2F1qOcEPnhooviErb+gi+aBhJUqxP9EXClYFE6NBUFXyISc5YdXA9mD8YcrdDADdAVTzNonIrJKWz5wJW7hfE1w2zP1jBbcBOAht6FMv0+2HlgdKig2Ajt10CPirFZ+Gce+Zr6CUj77TjbAjHoXkRr4OTInNm20ZhIPgMM0hNvaw2FYQpcYqa18IsFGKYCydMQjBtuVwpojcA+BoibdtztgQVDIIYCLSbc7YFkgkA2AxyI5ff3QRzDn+I323vj96NAEpx9IoJBIxDQgAQx+7QA0b3ACuybLbJH+kBoBA4v182DNwfu9kyn9F1i9xIEa9zNmRmwJndzF1amhdzOt7jQoKwQs5iCac8ubBeAfDOLG2hN5MQyiKCYNzCAqy9ynic0vRrmYAbMCZGbLp65hcB8bqGnYCFIzzIv+aZLI3ReyXT2mcN800LbW2opmGdsGryNVc1CoVFqWsg8SlWUxpyHzEqjslqYwQWzpwjyUCKnXGRXfOC1ieyUBOaRTGavTdZHvAGOQDJ73p7ZmsjJTzAzFszNmSOGeW26kZgWcq9QpnJ/SBxQBqe/uZsD2UuJJd/8U+fczYG9Ne5JUUNpBfaJAc5hCGyUAKFhXg5rtbbZ3oa7PZSh5U+cgINK/NEFOJ7En6EFUsO6i38B+BjsKW8UXXS420vM9gQytEDa2EcNOMkqsBXkgS1SZtcU3suRyCqAbQTmiQGODA15W7sBT+mzZoXhyQ+RbYQ6kO8WZ2NAZ4SOCYNhyhnot8EtapFBiic/Y/ILHoNkX30/gXeS2V4ifIUSZ76uwOtzbGMHzge5o+zwMgLTMgyPXgqlZy8koOU5z+iBF4NETg3cAPkopjw0upgjWV8BThCOxCl0gCVi0W/qsPWTfX8R3VuXLZGBbkBa/4PRrSeRzOU3HrqeZ1nJ0SQUFNIb+KauVacY33WWL6zQQH2wuCrOUEGwqXz9D7QcW0ye+riOi0bhCHzd2pba+fiqv7DMfEKUIbGSzJwRlXh0arehJfmPlazNgCjKp1VjEOuphWKAeJnQqYpxgyox1HxN9KhHdvRKKOKyAGemL+gNWWJISWZu0LXMnh6p1Ai9jgurnc5HMKd6dHjqNQbpJRSbiqU+qVpRZ465035tFJEZA1Wx3hdRLedKN5eN7Tit+uKXiYrVTNNM3K8z2xgmj4uAF/EtnnuVyVOdUQXMMKy59QdE6aWB990HydQgyVxhWSjhTTK7N8im415AjzB/0c31iQHFlf9und0LH8dVPwrCzx56YTBbJNu7Hy8h0ZyLXpZy5dO33WSzmew+3qkCkIAODrF1Tcxa0DsrZ7+I+ghBQ7PKd/CoQHceruESZaKmA0fkiZ/la3mnBupQtVZ7lF88CKb/52TqlIkt3W98xKQnnov1jwCTNFHTgTvjv/gRj4aZ+K1Tlb5VFfVMQNY7zsYGh11UEeyW9ncTgmyOJqJJhZVkHkEzXrzh/30QDGH245SNCY+ai/om1rxRrq92DZfpCSxaborw1SS/l9HIYXI/kiyion4RDu5/HDDj5wE90oErwlu8Uh8kW3JWzlurftbkKqWo7Edb8+EPevFqvT02WsfteBUvFzk3PKl1UTMktg+pqJ3CDFQbFFdRrVFIB84ylKKqO3B2KV5IbJuiOnAWKWJIbJkqKCoVTKlm4OxDhsTanbIL9RbL5cCRc7Fcitouv6KSJpZLUemQuFQDlXTgNPcX7eORIXGpTKyAA1cBualASOxRDly5FJXe09DulVWqGhKXay5WwERyLpbMxAqExBV14MrlhldAbipgoguJywDpwFVAUcsVEhf5UIolqhoSl2uXmHbDtXtlFVJRxT94zQolN+wlT2Wh5Ebh0/OcEA6cVAEtMZCils5CFBJrXefnA8qNfNUQdsw9DdGPskvxU1EZKjwVge+l/1SyteKb5e2C0racb/BGtFyOSigyDofD4XA4HA6Hw+FwOByO38Z/Ec1V7Sik27AAAAAASUVORK5CYII="
        />
      </button>
    </div>
  );
};

export default SearchBar;
