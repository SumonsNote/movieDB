import Star from "../components/Star";

export function generateStarRating(rating) {
  const stars = [];
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push(<Star key={i} />);
  }
  return stars;
}
