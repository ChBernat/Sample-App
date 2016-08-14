class fetchDataService {
  constructor($http) {
    this.$http = $http;
  };
  getData() {
    return this.$http.get('./json/mockdata.json').then(response => response.data);
  }
}

fetchDataService.$inject = ['$http'];

export default fetchDataService;