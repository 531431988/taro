import Taro from "@tarojs/taro";
import interceptors from "./interceptors";
interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem));
const baseUrl =
  process.env.NODE_ENV === "development"
    ? "https://www.fastmock.site/mock/d8d1dbafa42c5740e6a4c9dc7a09b6bc/vue-ol"
    : "/";

class httpRequest {
  baseOptions(params, method = "GET") {
    let { url, data } = params;
    let contentType = "application/json";
    contentType = params.contentType || contentType;
    const option = {
      url: baseUrl + url,
      data,
      method,
      header: {
        "content-type": contentType,
        Authorization: Taro.getStorageSync("Authorization")
      }
    };
    return Taro.request(option);
  }

  get(url, data = "") {
    return this.baseOptions({ url, data });
  }

  post(url, data, contentType) {
    return this.baseOptions({ url, data, contentType }, "POST");
  }

  put(url, data = "") {
    return this.baseOptions({ url, data }, "PUT");
  }

  delete(url, data = "") {
    return this.baseOptions({ url, data }, "DELETE");
  }
}

export default new httpRequest();
