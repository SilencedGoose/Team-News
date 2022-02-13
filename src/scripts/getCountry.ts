let coord2country = async (coords: number[]) => {
  let api_key = "797bc560a69c43a9bd8b8bba296c60f4";

  let api_url = "https://api.opencagedata.com/geocode/v1/json";

  let latitude = coords[0];
  let longitude = coords[1];

  var request_url =
    api_url +
    "?" +
    "key=" +
    api_key +
    "&q=" +
    encodeURIComponent(latitude + "," + longitude) +
    "&pretty=1" +
    "&no_annotations=1";

  return await fetch(request_url).then((response) => {
    if (response.ok) {
      var country = "no country returned";
      if (data.results[0].components.country != null) {
        country = data.results[0].components.country;
      }
      return country;
    } else {
      console.log("unable to geocode! Response code: " + request.status);
      console.log("error msg: " + data.status.message);
    }
  });
};

export default coord2country;
