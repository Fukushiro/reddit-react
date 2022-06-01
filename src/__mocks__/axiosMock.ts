import axios from "axios";
import { apiReddit, baseUrl } from "../services/apiReddit";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.create = jest.fn(() => mockedAxios);
// mockedAxios.get.mockImplementation((url: string) => {
//   if (url === baseUrl + "/user/get/subreddit") {
//     return Promise.resolve({
//       data: { subreddits: [{ id: 1, nome: "teste" }] },
//     });
//   }
//   return Promise.resolve({ data: null });
// });
mockedAxios.post.mockImplementation((url: string, data) => {
  console.log("Mock post", url);

  if (url === "/user/get/subreddit") {
    return Promise.resolve({
      data: {
        subreddits: [
          { id: 1, nome: "teste" },
          { id: 2, nome: "coisa" },
        ],
      },
    });
  }
  return Promise.resolve({ data: null });
});
