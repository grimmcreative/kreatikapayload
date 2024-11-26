'use client'
import type { Page } from '@/payload-types'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { Button } from '@payloadcms/ui'
import { motion } from 'motion/react'
import React, { useEffect } from 'react'


export const HighImpactVideoHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
      <div className='min-h-screen min-w-full'>
        <video
          muted
          loop
          autoPlay
          className="absolute top-0 left-0 min-w-full min-h-screen -z-50 object-cover"
        >
          <source src= '/media/programming.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="bg-black opacity-40 w-full min-h-screen absolute top-0 left-0 -z-40"></div>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1, ease: "linear" }}
        >
          <div className="container w-full px-0 flex flex-col min-h-screen pb-40">
            <div className="w-[100%] m-auto gap-5">
              <h1 className="font-extrabold sm:text-start text-3xl md:text-3xl lg:text-4xl xl:text-8xl leading-loose text-white">
              Your brand in motion.
              </h1>
              <h3 className="text-white text-8xl font-light">Let&apos;s create connections together.</h3>
              <Button className='text-white font-bold shadow-lg bg-opacity-30 bg-white backdrop-blur-3xl p-5 rounded-3xl inline-flex mt-10 hover:bg-opacity-90 hover:text-black'>Kostenloses Beratungsgespräch</Button>
              <div className="w-100 flex flex-col gap-5 text-white font-light pt-10 border-t-[1px] border-white mt-20">
                <span className='hidden lg:block  w-[60%] text-3xl'>
                    Mit einer Roadshow von MOST präsentieren Sie Ihre Ideen zielgruppenspezifisch und persönlich vor Ort.
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
  )
}
