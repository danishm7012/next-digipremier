export default async function getAllPostSlugs() {
  const res = await fetch(`https://cms-digipremier.herokuapp.com/services`)

  const services = await res.json()

  const slugs = services.map((service) => service.slug)

  return slugs.map((slug) => {
    return {
      params: {
        slug,
      },
    }
  })
}
