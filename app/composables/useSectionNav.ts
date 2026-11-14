// composables/useSectionNav.ts
// Links to home page sections (#services, #work, ...) that work from any page.
// On the home page it scrolls smoothly; elsewhere it navigates to /#section.
export const useSectionNav = () => {
  const route = useRoute();

  const goToSection = async (id: string) => {
    if (route.path === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      await navigateTo({ path: "/", hash: `#${id}` });
    }
  };

  return { goToSection };
};
