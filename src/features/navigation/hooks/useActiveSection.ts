import { useEffect, useState } from "react"

/**
 * Custom hook observes which section is currently visible.
 * @param sectionIds - string IDs pertaining to each page section.
 * @returns the section ID string that is currently visible.
 */
export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id)
            }
          })
        },
        {
          root: null,
          threshold: 0.6, // 60% of section in view = active section
        }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [sectionIds])

  return active
}
