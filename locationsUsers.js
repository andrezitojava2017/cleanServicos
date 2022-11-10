const LocationsUsers = (slatitude, slongitude) => {
  const initial = [];

  for (let i = 0; i <= 5; i++) {
    console.log(slatitude);
    let lt = slatitude + [i + 3];
    let lg = slongitude + [i + 2];
    let name = `User${i}`;
    let user = {latitude: lt, longitude: lg, name: name};
    initial.push(user);
  }

  console.log(initial);
  return initial;
};

export default LocationsUsers;
