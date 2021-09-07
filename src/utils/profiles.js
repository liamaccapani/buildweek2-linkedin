import { ResponsiveEmbed } from "react-bootstrap";

const PROFILES_URL = "https://striveschool-api.herokuapp.com/api/profile/";

// TO GET
export const searchProfile = async () => {
  try {
    const response = await fetch(`${PROFILES_URL}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo",
      },
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error("ERR FETCHING:");
    }
  } catch (error) {
    throw error;
  }
};

// TO GET EXPs
const fetchExp = async (query) => {
  try {
    const response = await fetch(`${PROFILES_URL}${query}/experiences`, {
      headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo",
      }
    })
    if(response.ok){
      const data = await response.json()
      return data

    } else {
      throw new Error 
    }
  } catch (error) {
    throw error
  }
}

export default fetchExp


// TO POST AN EXP
// const postNewExp = async (e) => {
//   e.preventDefault()
//   try {
//     const response = await fetch(`${PROFILES_URL}${id}/experiences`, {
//       method: 'POST',
//       body: JSON.stringify(newExp),
//       headers: {
//           Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo",
//           'Content-type': 'application/json'
//       }
//     })
//     if(response.ok){
//       alert('Experience added')
//     }
//   } catch (error) {
//     throw error
//   }
// }

// export default postNewExp