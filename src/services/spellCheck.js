import axios from "axios";
const baseUrl = "https://api-platform.trinka.ai/api/v2/plugin/check/paragraph";

const headers = {
  "Content-Type": "application/json",
  "x-api-key": "4GbMiC6iJQ1v3cjf5x3EG5Cj8y2qoQ968Ezqpa4x",
};

const spellCheckNote = (newObject) => {
  const request = axios.post(baseUrl, newObject, {
    headers: headers,
  });
  return request.then((response) => response.data);
};

export default { spellCheckNote };

// curl --location --request POST 'https://api-platform.trinka.ai/api/v2/plugin/check/paragraph' \
// --header 'x-api-key: 4GbMiC6iJQ1v3cjf5x3EG5Cj8y2qoQ968Ezqpa4x' \
// --header 'Content-Type: application/json' \
// --data-raw '{
// "paragraph": " Wood is a natural material used in indoor environment. It is utilized as not only a structural component but also an interior finishing material.",
// "language": "US",
// "style_guide": "",
// "is_sensitive_data": false
// }'
