// const backendUrl = "http://localhost:8080";
const backendUrl = "https://mern-interview-test-five.vercel.app";

const Apisummary = {
  upload: {
    url: `${backendUrl}/api/upload-drawing`,
    method: "post",
  },
  allDrawing: {
    url: `${backendUrl}/api/allDrawing`,
    method: "get",
  },
  sample: {
    url: `${backendUrl}/api/sample`,
    method: "get",
  },
  latest: {
    url: `${backendUrl}/api/latest`,
    method: "get",
  },
  delete: {
    url: `${backendUrl}/api/delete`,
    method: "post",
  },
  search: {
    url: `${backendUrl}/api/search`,
    method: "post",
  },
  update: {
    url: `${backendUrl}/api/update`,
    method: "post",
  },
  category: {
    url: `${backendUrl}/api/category`,
    method: "post",
  },
};
export default Apisummary;
