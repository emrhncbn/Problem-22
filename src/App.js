import { useRef, useState } from 'react'

export default function VideoPlayer() {
  const ref = useRef()
  const [playing,setPlaying] = useState(false)

  const togglePlay = () => {
    const video = ref.current // Video öğesine eriş
    if (video.paused) {
      video.play() // Video duraksadıysa oynat
      setPlaying(true) // Durumunu güncelle
    } else {
      video.pause() // Video oynatılıyorsa duraklat
      setPlaying(false) // Durumunu güncelle
    }
  }

  const handlePlayClick = () => {
    const video = ref.current
    video.play()
    setPlaying(true)
  }

  const handlePauseClick = () => {
    const video = ref.current
    video.pause()
    setPlaying(false)
  }

  console.log(ref.current)

  return (
    <div className='max-w-[500px] space-y-4 p-8 mx-auto'>
      <h1 className='text-center font-bold text-3xl'>
        Video Oynatıcı
      </h1>
      <video
        ref={ref}
        src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
        poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
      />
      <div className='flex justify-between'>
      {playing ? (
          <button onClick={handlePauseClick} className='text-orange-500 font-semibold'>
            Duraklat
          </button>
        ) : (
          <button onClick={handlePlayClick} className='text-indigo-500 font-semibold'>
            Oynat
          </button>
        )}
        <div>{playing ? 'Oynatılıyor' : 'Duraklatıldı'}</div>
        </div>
      </div>
  )
}
