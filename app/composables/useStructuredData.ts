export const useStructuredData = () => {
  const addPersonSchema = (person: {
    name: string
    description: string
    image?: string
    email?: string
    url?: string
    social?: string[]
  }) => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: person.name,
      description: person.description,
      ...(person.image && { image: person.image }),
      ...(person.email && { email: person.email }),
      ...(person.url && { url: person.url }),
      ...(person.social && { sameAs: person.social }),
    }

    useHead({
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(schema),
        },
      ],
    })
  }

  const addArticleSchema = (article: {
    headline: string
    description: string
    image?: string
    datePublished: string
    author: string
  }) => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.headline,
      description: article.description,
      ...(article.image && { image: article.image }),
      datePublished: article.datePublished,
      author: {
        "@type": "Person",
        name: article.author,
      },
    }

    useHead({
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(schema),
        },
      ],
    })
  }

  const addCreativeWorkSchema = (work: {
    name: string
    description: string
    image?: string
    creator: string
    dateCreated: string
  }) => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: work.name,
      description: work.description,
      ...(work.image && { image: work.image }),
      creator: {
        "@type": "Person",
        name: work.creator,
      },
      dateCreated: work.dateCreated,
    }

    useHead({
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(schema),
        },
      ],
    })
  }

  return {
    addPersonSchema,
    addArticleSchema,
    addCreativeWorkSchema,
  }
}
