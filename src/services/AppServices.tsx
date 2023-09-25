import useApi from "./useApi";
const base_URL = "http://localhost:5173/public/data-product/data.json";
export default new (class AppServices {
  async getUser() {
    let data: any;
    await useApi.getRequest(base_URL).then((response) => {
      data = response.data;
    });
    return data;
  }

  async postRequest(url: string, data: any, headers: any) {
    return await useApi.postRequest(url, data, headers);
  }

  async updateRequest(url: string, data: any, headers: any) {
    return await useApi.updateRequest(url, data, headers);
  }

  async deleteRequest(url: string, headers: any) {
    return await useApi.deleteRequest(url, headers);
  }
})();
