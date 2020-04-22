export const fetchOxford = (word, setSearching, setSenses, setErr) => {
  console.log("Start Fetching from OXFORD..");

  const app_id = "7621ee00";
  const app_key = "92292c7f136fbf68d2bc2091aba5a573";

  fetch(
    `https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${word}`,
    {
      headers: {
        app_id,
        app_key,
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      // console.log(json);
      //
      setSearching(false);
      setErr(null);
      setSenses(json.results[0].lexicalEntries[0].entries[0].senses);
    })
    .catch((err) => {
      console.log(err);
      setSearching(false);
      setSenses(null);
      setErr(err);
    });
};
