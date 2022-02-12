interface articleProps {
  title: string;
  link: string;
  image: string;
  alt: string;
}

interface newsProps {
  data: articleProps[];
}

interface user {
  name: string;
  location: LatLngExpression;
}
