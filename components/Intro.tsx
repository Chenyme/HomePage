"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { FaDownload } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaBlog } from "react-icons/fa";
import Link from "next/link"
import { Source_Code_Pro } from "next/font/google"
import { useLocale } from "next-intl"
import { useSectionInView } from "@/lib/hooks"
import { TypeAnimation } from "react-type-animation"
import { useActiveSectionContext } from "@/context/action-section-context"
import { useTranslations } from "next-intl"
import useSound from "use-sound"

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "400" })

export default function Intro() {
  const { ref } = useSectionInView("Home")
  const activeLocale = useLocale()
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
  const t = useTranslations("IntroSection")
  const [playHover] = useSound("/bubble.wav", { volume: 0.5 })

  return (
    <section
      ref={ref}
      className="mb-10 max-w-[50rem] text-center sm:mb-0 scroll-mt-28 pt-[7rem]"
      id="home"
    >
      <br />
      <br />
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/profile.png"
              alt="developer-image"
              width="250"
              height="250"
              quality="95"
              priority={true}
              className="h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            onHoverStart={() => {
              console.log("sound")
              playHover()
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.25, rotate: 15 }}
            className="absolute text-4xl bottom-0 right-0 hover:rotate-2"
            transition={{
              type: "spring",
              duration: 0.7,
              delay: 0.1,
              stiffness: 125,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className={`${sourceCodePro.className} text-sm tracking-wider `}>
          {t("hello_im")}
        </span>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-center text-4xl font-bold tracking-tight  sm:text-5xl">
            {t("name")}
          </h1>
          <div className="text-center">
            <span className={`${sourceCodePro.className} text-sm tracking-wider pad`}>
              I&apos;m a{" "}
            </span>
            <h2 id="name" className=" text-center  text-2xl  sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold">
              {activeLocale === "en" && (
              <TypeAnimation
                sequence={[
                  "College Students",
                  1000,
                  "Independent Developer",
                  1000,
                  "Amateur photographer",
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              )}
                {activeLocale === "zh" && (
                <TypeAnimation
                sequence={[
                  "不想上学的在校大学生 o((>ω< ))o",
                  2500,
                  "不独立的独立开发者 φ(*￣0￣)",
                  2500,
                  "不专业的摄影爱好者 ψ(｀∇´)ψ",
                  2500
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
              )}
            </h2>
          </div>
        </motion.div>
      </motion.h1>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="mailto:chenyme03@gmail.com"
          onClick={() => {
            setTimeOfLastClick(Date.now())
          }}
          className="group bg-gray-900 px-4 py-2 text-sm sm:text-lg text-white sm:px-7 sm:py-3 flex items-center gap-2  rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Email me Here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
      </motion.div>
      <br />
      <br />
      <motion.div
        className="flex flex-wrap items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          href={
            activeLocale == "en" ? "/chenyme.pdf" : "/Chenyme.pdf"
          }
          download={true}
          className=" bg-white py-2 px-3 text-sm text-gray-700 flex items-center gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <b>{t("download_cv")}</b>
          <FaDownload />
        </a>
        <a
          className=" bg-white py-2 px-3 text-sm text-gray-700 flex items-center gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/chenyme"
          target="_blank"
        >
          <b>{t("github")}</b>
          <FaGithub />
        </a>
        <a
          className=" bg-white py-2 px-3 text-sm text-gray-700 flex items-center gap-2  rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://blog.chenyme.top"
          target="_blank"
        >
          <b>{t("blog")}</b>
          <FaBlog />

        </a>
      </motion.div>

      <br />
      <motion.div
        className="flex flex-wrap items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
          <h1 id="name" className=" text-center  text-1xl  sm:text-2xl lg:text-1xl lg:leading-normal font-extrabold">
            <div className="text-center" style={{ fontSize: '.5rem' }}>
              &nbsp;
            </div>
            {t("short_intro")}
          </h1>
        </motion.div>
      <br />
      <br />
    </section>
  )
}
