interface articleProps {
  headline: string;
  url: string;
  img: string;
  alt: string;
}

interface newsProps {
  data: articleProps[];
}
