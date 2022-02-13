interface articleProps {
  title: string;
  link: string;
  image: string;
  alt: string;
}

interface teamMember {
  name: string;
  location: LatLngExpression;
  country: string;
}

interface authProps {
  auth: Auth;
}

interface dbProps {
  teams: CollectionReference<DocumentData>;
  userID: string;
}
