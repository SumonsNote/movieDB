export default function Footer({ dict }) {
  return (
    <footer class="py-6 md:py-8 mt-8">
      <div class="container mx-auto">
        <p class="text-center text-sm text-black/30 dark:text-[#EEEEEE]/60">
          {`${dict.copyright} ©${dict.copyright_date} | ${dict.copyright_reserved}`}
        </p>
      </div>
    </footer>
  );
}
