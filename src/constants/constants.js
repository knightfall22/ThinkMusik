import {
  Book,
  H_Path,
  H_List,
  H_Music,
  H_Profile,
  H_Tips,
  H_View,
  H_Book,
  List,
  Music,
  Path,
  Profile,
  Tips,
  View,
  Cart,
  H_Cart,
  courseImg1,
  courseImg2,
  courseImg3,
  sheetImg1,
  sheetImg2,
  sheetImg3,
} from "../assets";

export const SiderBarItems = [
  {
    name: "Overview",
    icon: View,
    highlight: H_View,
  },
  {
    name: "Learning Path",
    icon: Path,
    highlight: H_Path,
  },
  {
    name: "Explore Courses",
    icon: Book,
    highlight: H_Book,
  },
  {
    name: "Quick Tips",
    icon: Tips,
    highlight: H_Tips,
  },
  {
    name: "Instructors",
    icon: Profile,
    highlight: H_Profile,
  },
];

export const SiderBarItemsBottom = [
  {
    name: "Song Sheet",
    icon: Music,
    highlight: H_Music,
  },

  {
    name: "My List",
    icon: List,
    highlight: H_List,
  },
  {
    name: "Shop",
    icon: Cart,
    highlight: H_Cart,
  },
];

export const SiderBarIcons = [
  {
    name: "Overview",
    icon: View,
    highlight: H_View,
  },
  {
    name: "Path",
    icon: Path,
    highlight: H_Path,
  },
  {
    name: "Courses",
    icon: Book,
    highlight: H_Book,
  },
  {
    name: "Tips",
    icon: Tips,
    highlight: H_Tips,
  },
  {
    name: "Instructors",
    icon: Profile,
    highlight: H_Profile,
  },
  {
    name: "Sheet",
    icon: Music,
    highlight: H_Music,
  },

  {
    name: "List",
    icon: List,
    highlight: H_List,
  },
  {
    name: "Shop",
    icon: Cart,
    highlight: H_Cart,
  },
];

export const Information = [
  {
    icon: H_Path,
    title: "Learn Path",
    subtitle: "Start",
  },
  {
    icon: H_Book,
    title: "Explore Courses",
    subtitle: "View all courses",
  },
  {
    icon: H_Music,
    title: "Song Sheets",
    subtitle: "View all songs",
  },
];

export const CourseLists = [
  {
    image: courseImg1,
    title: "R & B Tutorial by Melanie",
    subtitle: "Beginner | 20 lessons",
  },
  {
    image: courseImg2,
    title: "How to Play Triads by Daniey",
    subtitle: "Advanced | 20 lessons",
  },
  {
    image: courseImg3,
    title: "Jimi Hendrix Licks by Melanie",
    subtitle: "Intermediate | 20 lessons",
  },
];

export const SheetSection = [
  {
    image: sheetImg1,
    name: "Hallelujay by Dunsin Oyekan",
  },
  {
    image: sheetImg2,
    name: "Amazing Grace by Dunsin Oyekan",
  },
  {
    image: sheetImg3,
    name: "Goodness of God by Dunsin Oyekan",
  },
];

/* Animation Variants */
export const SideVariants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
};

export const OverlayVariants = {
  hidden: { opacity: 0, zIndex: "-1" },
  visible: { opacity: 1, zIndex: "1000" },
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};
