/* import Services from '../../../companiesData/fServices'

export default function handler({ query: { slug } }, res) {
  const filtered = Services.filter((service) => service.slug === slug)

  if (filtered.length > 0) {
    res.status(200).json(filtered)
  } else {
    res
      .status(404)
      .json({ message: `Service with the slug of ${slug} is not found` })
  }
}
 */
