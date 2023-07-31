import data from './data';

// i'll need to understand this well

// creating the trending api endpoint
// api/trending
export default function handler(req, res) {
  const { Trending } = data;
  if (Trending) return res.status(200).json(Trending);
  return res.status(400).json({ error: 'Data Not Found' });
}
