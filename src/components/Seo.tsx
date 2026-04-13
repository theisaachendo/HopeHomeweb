import { useEffect } from 'react'

type SeoProps = {
  title: string
  description?: string
}

export function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    const full = title.includes('Hope Home') ? title : `${title} | Hope Home Inspections`
    document.title = full
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    if (description) {
      meta.setAttribute('content', description)
    }
  }, [title, description])

  return null
}
