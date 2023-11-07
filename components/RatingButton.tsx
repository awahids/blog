'use client'
import { ClapButton, LikeButton, Provider } from '@lyket/react'
import { useEffect, useState } from 'react'

const RatingButton = ({ slug }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  return (
    <div className={`fixed bottom-5 left-5 mb-2`}>
      <Provider
        apiKey="pt_ee64fae14c901d0cb830c420d26f5a"
        theme={{
          colors: {
            background: '#F44336',
            text: '#FFBF00',
            primary: '#42A5F5',
          },
        }}
      >
        {/* <ClapButton
          namespace="blog.awahids.my.id"
          id={slug}
          component={ClapButton.templates.Heart}
        /> */}
        <LikeButton
          namespace="blog.awahids.my.id"
          id={slug}
          component={LikeButton.templates.Heart}
          hideCounterIfLessThan={1}
        />
      </Provider>
    </div>
  )
}

export default RatingButton
