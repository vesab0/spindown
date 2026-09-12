export async function loadGalleryImages(folderPath) {
  try {
    const folder = folderPath.startsWith('/') ? folderPath : `/${folderPath}`
    const cleanFolder = folder.endsWith('/') ? folder : `${folder}/`

    const images = import.meta.glob('/public/**/*.{png,jpg,jpeg,gif,webp}')

    const galleryImages = Object.keys(images)
      .filter((path) => {
        const publicPath = path.replace('/public', '')
        return publicPath.startsWith(cleanFolder)
      })
      .sort()
      .map((path) => path.replace('/public', ''))

    return galleryImages.length > 0 ? galleryImages : null
  } catch (error) {
    console.error(`Failed to load gallery images from ${folderPath}:`, error)
    return null
  }
}

export function getPlaceholderGallery(count = 4) {
  return Array.from({ length: count }, (_, i) => `Screenshot ${i + 1}`)
}
