import { mockData } from '../../mockData/data';

export default function fetchData(req, res) {
  res.status(200).json(mockData);
}
