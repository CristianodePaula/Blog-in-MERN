export const headerAnimation = {
  initial: { scale: 0.1, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 2, delay: 0.5, ease: 'easeInOut'}}
}

export const postImgAnimation = {
    hidden: { x: 50, opacity: 0 }, 
    show: { x: 1, opacity: 1, transition:{type: 'spring', stiffness: 20, duration: 2, delay: 0.4}}
  }

export const textPostAnimation = {
    hidden: { scale: 0.5, opacity: 0 },
    show: { scale: 1, opacity: 1, transition:{  duration: 1.8, delay: 0.6 }}
  }

export const  singlePostAnimation = {
  initial: { y: 50,opacity: 0 },
  animate: { y: 1, opacity: 1, transition:{  duration: 1.5, delay: 0.5 }}
}

export const writeAnimation = {
    initial: { scale: 0.1, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 1.5, delay: 0.5, ease: 'easeInOut'}}
}

export const aboutImgAnimation = {
    initial: { y: 50 , opacity: 0 },
    animate: { y: 1, opacity: 1, transition: { duration: 1, delay: 0.1, ease: 'easeInOut'}}
}
export const aboutTextAnimation = {
  initial: { x: -50 , opacity: 0 },
  animate: { x: 1, opacity: 1, transition: { duration: 1, delay: 0.1, ease: 'easeInOut'}}
}

export const contactFormAnimation = {
    initial: { opacity: 0, scale: 0.5, rotete: -180, delay: 0.2 },
    animate:{
      opacity: 1,
      scale: 1,
      rotate: 360,
      transition: { duration: 2, delay: 0.2, ease: 'backInOut' }}
  }