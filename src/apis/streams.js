import axios from "axios";
import { deflate } from "zlib";

export default axios.create({
  baseURL: "http://loaclhost:3001"
});
