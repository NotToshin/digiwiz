export const navigation = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Start a project" },
] as const;

export const processSteps = [
  { title: "Discover", description: "Tell us what needs to change, who it affects and what a good result looks like." },
  { title: "Design", description: "Agree on a direction and review a prototype while changes are still easy to make." },
  { title: "Build", description: "Turn the direction into a working product and test the tasks people need to complete." },
  { title: "Launch", description: "Prepare the handover, check the live experience and agree on what to improve next." },
] as const;
